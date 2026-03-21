import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Monitor, Wrench, Plus, Edit, Trash2, Search, Package } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { ElectronicsItem, RepairService } from "@/types";

const AdminElectronics = () => {
  const { electronics, setElectronics, repairServices, setRepairServices } = useData();
  const [activeTab, setActiveTab] = useState("products");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});

  const resetForm = () => { setForm({}); setEditingId(null); setShowAddForm(false); };

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prod = { name: form.name, brand: form.brand, category: form.category, price: parseFloat(form.price), image: form.image || "📦" };
    if (editingId) {
      setElectronics(electronics.map((p: ElectronicsItem) => p.id === editingId ? { ...p, ...prod } : p));
      toast.success("Product updated");
    } else {
      setElectronics([...electronics, { id: Date.now().toString(), ...prod }]);
      toast.success("Product added");
    }
    resetForm();
  };

  const handleRepairSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rep = { type: form.type, description: form.description, price: form.price, icon: form.icon || "🔧" };
    if (editingId) {
      setRepairServices(repairServices.map((r: RepairService) => r.id === editingId ? { ...r, ...rep } : r));
      toast.success("Service updated");
    } else {
      setRepairServices([...repairServices, { id: "r" + Date.now(), ...rep }]);
      toast.success("Service added");
    }
    resetForm();
  };

  const handleDelete = (id: string, type: string) => {
    if (type === "product") setElectronics(electronics.filter((p: ElectronicsItem) => p.id !== id));
    else setRepairServices(repairServices.filter((r: RepairService) => r.id !== id));
    toast.success("Deleted");
  };

  return (
    <div className="p-6">
      <div className="mb-6"><h1 className="text-3xl font-bold mb-2">Electronics Management</h1><p className="text-muted-foreground">Manage products and repair services</p></div>
      <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); resetForm(); }}>
        <TabsList className="mb-6">
          <TabsTrigger value="products" className="gap-2"><Package className="h-4 w-4" />Products ({electronics.length})</TabsTrigger>
          <TabsTrigger value="repairs" className="gap-2"><Wrench className="h-4 w-4" />Repair Services ({repairServices.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <div className="mb-4 flex justify-between items-center">
            <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /></div>
            <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Product</Button>
          </div>
          {showAddForm && (
            <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit" : "Add"} Product</CardTitle></CardHeader><CardContent>
              <form onSubmit={handleProductSubmit} className="grid gap-4 md:grid-cols-2">
                <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                <div><Label>Brand</Label><Input value={form.brand || ""} onChange={e => setForm({...form, brand: e.target.value})} required /></div>
                <div><Label>Category</Label><Input value={form.category || ""} onChange={e => setForm({...form, category: e.target.value})} placeholder="Mobiles/Home Appliances/Accessories" required /></div>
                <div><Label>Price (₹)</Label><Input type="number" value={form.price || ""} onChange={e => setForm({...form, price: e.target.value})} required /></div>
                <div><Label>Image (emoji)</Label><Input value={form.image || ""} onChange={e => setForm({...form, image: e.target.value})} placeholder="📱" /></div>
                <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
              </form>
            </CardContent></Card>
          )}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {electronics.filter((p: ElectronicsItem) => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map((p: ElectronicsItem) => (
              <Card key={p.id}><CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2"><span className="text-3xl">{p.image}</span><div><h3 className="font-bold">{p.name}</h3><p className="text-sm text-muted-foreground">{p.category}</p></div></div>
                <p className="text-lg font-bold text-primary">₹{p.price.toLocaleString()}</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={() => { setEditingId(p.id); setShowAddForm(true); setForm({ name: p.name, category: p.category, price: String(p.price), image: p.image }); }}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(p.id, "product")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="repairs">
          <div className="mb-4 flex justify-between items-center">
            <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Repair Service</Button>
          </div>
          {showAddForm && (
            <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit" : "Add"} Service</CardTitle></CardHeader><CardContent>
              <form onSubmit={handleRepairSubmit} className="grid gap-4 md:grid-cols-2">
                <div><Label>Type</Label><Input value={form.type || ""} onChange={e => setForm({...form, type: e.target.value})} placeholder="Mobile Repair" required /></div>
                <div><Label>Price Range</Label><Input value={form.price || ""} onChange={e => setForm({...form, price: e.target.value})} placeholder="₹200-₹2,000" required /></div>
                <div><Label>Description</Label><Input value={form.description || ""} onChange={e => setForm({...form, description: e.target.value})} required /></div>
                <div><Label>Icon (emoji)</Label><Input value={form.icon || ""} onChange={e => setForm({...form, icon: e.target.value})} placeholder="📱" /></div>
                <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
              </form>
            </CardContent></Card>
          )}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {repairServices.map((r: RepairService) => (
              <Card key={r.id}><CardContent className="p-4">
                <span className="text-3xl">{r.icon}</span>
                <h3 className="mt-2 font-bold">{r.type}</h3>
                <p className="text-sm text-muted-foreground">{r.description}</p>
                <p className="text-primary font-bold mt-1">{r.price}</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={() => { setEditingId(r.id); setShowAddForm(true); setForm({ type: r.type, description: r.description, price: r.price, icon: r.icon }); }}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(r.id, "repair")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminElectronics;
