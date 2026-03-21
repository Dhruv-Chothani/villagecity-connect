import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Tractor, Sprout, Leaf, Plus, Edit, Trash2, Search, Package } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { FarmingTip, Fertilizer, Machinery } from "@/types";

const AdminAgriculture = () => {
  const { farmingTips, setFarmingTips, fertilizers, setFertilizers, machinery, setMachinery } = useData();
  const [activeTab, setActiveTab] = useState("tips");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});

  const resetForm = () => { setForm({}); setEditingId(null); setShowAddForm(false); };

  const handleTipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tip = { title: form.title, content: form.content, date: form.date || new Date().toISOString().slice(0, 10), season: form.season };
    if (editingId) { setFarmingTips(farmingTips.map((t: FarmingTip) => t.id === editingId ? { ...t, ...tip } : t)); toast.success("Updated"); }
    else { setFarmingTips([...farmingTips, { id: Date.now().toString(), ...tip }]); toast.success("Tip added"); }
    resetForm();
  };

  const handleFertilizerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fert = { name: form.name, type: form.type, price: form.price, usage: form.usage };
    if (editingId) { setFertilizers(fertilizers.map((f: Fertilizer) => f.id === editingId ? { ...f, ...fert } : f)); toast.success("Updated"); }
    else { setFertilizers([...fertilizers, { id: "f" + Date.now(), ...fert }]); toast.success("Added"); }
    resetForm();
  };

  const handleMachinerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mach = { name: form.name, type: form.type, price: form.price, available: form.available === "true" };
    if (editingId) { setMachinery(machinery.map((m: Machinery) => m.id === editingId ? { ...m, ...mach } : m)); toast.success("Updated"); }
    else { setMachinery([...machinery, { id: "ma" + Date.now(), ...mach }]); toast.success("Added"); }
    resetForm();
  };

  const handleDelete = (id: string, type: string) => {
    if (type === "tip") setFarmingTips(farmingTips.filter((t: FarmingTip) => t.id !== id));
    else if (type === "fertilizer") setFertilizers(fertilizers.filter((f: Fertilizer) => f.id !== id));
    else setMachinery(machinery.filter((m: Machinery) => m.id !== id));
    toast.success("Deleted");
  };

  return (
    <div className="p-6">
      <div className="mb-6"><h1 className="text-3xl font-bold mb-2">Agriculture Management</h1><p className="text-muted-foreground">Manage farming tips, fertilizers, and machinery</p></div>
      <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); resetForm(); }}>
        <TabsList className="mb-6">
          <TabsTrigger value="tips" className="gap-2"><Sprout className="h-4 w-4" />Tips ({farmingTips.length})</TabsTrigger>
          <TabsTrigger value="fertilizers" className="gap-2"><Leaf className="h-4 w-4" />Fertilizers ({fertilizers.length})</TabsTrigger>
          <TabsTrigger value="machinery" className="gap-2"><Tractor className="h-4 w-4" />Machinery ({machinery.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="tips">
          <div className="mb-4 flex justify-between"><div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" /></div><Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Tip</Button></div>
          {showAddForm && <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit" : "Add"} Tip</CardTitle></CardHeader><CardContent><form onSubmit={handleTipSubmit} className="grid gap-4 md:grid-cols-2">
            <div><Label>Title</Label><Input value={form.title || ""} onChange={e => setForm({...form, title: e.target.value})} required /></div>
            <div><Label>Season</Label><Input value={form.season || ""} onChange={e => setForm({...form, season: e.target.value})} placeholder="Rabi/Kharif/All" required /></div>
            <div className="md:col-span-2"><Label>Content</Label><Input value={form.content || ""} onChange={e => setForm({...form, content: e.target.value})} required /></div>
            <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
          </form></CardContent></Card>}
          <div className="grid gap-4">
            {farmingTips.filter((t: FarmingTip) => t.title.toLowerCase().includes(searchTerm.toLowerCase())).map((t: FarmingTip) => (
              <Card key={t.id}><CardContent className="p-4 flex justify-between items-start">
                <div><Badge variant="outline">{t.season}</Badge><h3 className="font-bold mt-1">{t.title}</h3><p className="text-sm text-muted-foreground">{t.content}</p></div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => { setEditingId(t.id); setShowAddForm(true); setForm({ title: t.title, content: t.content, season: t.season }); }}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(t.id, "tip")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fertilizers">
          <div className="mb-4 flex justify-between"><Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Fertilizer/Seed</Button></div>
          {showAddForm && <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit" : "Add"}</CardTitle></CardHeader><CardContent><form onSubmit={handleFertilizerSubmit} className="grid gap-4 md:grid-cols-2">
            <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
            <div><Label>Type</Label><Input value={form.type || ""} onChange={e => setForm({...form, type: e.target.value})} placeholder="Chemical/Organic/Seeds" required /></div>
            <div><Label>Price</Label><Input value={form.price || ""} onChange={e => setForm({...form, price: e.target.value})} required /></div>
            <div><Label>Usage</Label><Input value={form.usage || ""} onChange={e => setForm({...form, usage: e.target.value})} required /></div>
            <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
          </form></CardContent></Card>}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {fertilizers.map((f: Fertilizer) => (
              <Card key={f.id}><CardContent className="p-4">
                <h3 className="font-bold">{f.name}</h3><Badge variant="outline">{f.type}</Badge>
                <p className="text-sm text-muted-foreground mt-1">{f.usage}</p>
                <p className="text-primary font-bold mt-1">{f.price}</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={() => { setEditingId(f.id); setShowAddForm(true); setForm({ name: f.name, type: f.type, price: f.price, usage: f.usage }); }}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(f.id, "fertilizer")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="machinery">
          <div className="mb-4 flex justify-between"><Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Machinery</Button></div>
          {showAddForm && <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit" : "Add"}</CardTitle></CardHeader><CardContent><form onSubmit={handleMachinerySubmit} className="grid gap-4 md:grid-cols-2">
            <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
            <div><Label>Type</Label><Input value={form.type || ""} onChange={e => setForm({...form, type: e.target.value})} placeholder="Purchase/Rental" required /></div>
            <div><Label>Price</Label><Input value={form.price || ""} onChange={e => setForm({...form, price: e.target.value})} required /></div>
            <div><Label>Available</Label><select value={form.available || "true"} onChange={e => setForm({...form, available: e.target.value})} className="w-full px-3 py-2 border rounded-md bg-background"><option value="true">Yes</option><option value="false">No</option></select></div>
            <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
          </form></CardContent></Card>}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {machinery.map((m: Machinery) => (
              <Card key={m.id}><CardContent className="p-4">
                <h3 className="font-bold">{m.name}</h3>
                <div className="flex gap-2 mt-1"><Badge variant={m.type === "Rental" ? "default" : "secondary"}>{m.type}</Badge><Badge className={m.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>{m.available ? "Available" : "Unavailable"}</Badge></div>
                <p className="text-primary font-bold mt-1">{m.price}</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={() => { setEditingId(m.id); setShowAddForm(true); setForm({ name: m.name, type: m.type, price: m.price, available: String(m.available) }); }}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(m.id, "machinery")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminAgriculture;
