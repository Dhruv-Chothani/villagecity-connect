import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Wrench, Plus, Edit, Trash2, Search, Star } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { ServiceWorker } from "@/types";

const AdminServices = () => {
  const { serviceWorkers, setServiceWorkers } = useData();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});

  const resetForm = () => { setForm({}); setEditingId(null); setShowAddForm(false); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const worker = { name: form.name, trade: form.trade, experience: form.experience, rate: form.rate, rating: parseFloat(form.rating || "4.0"), available: form.available === "true" };
    if (editingId) {
      setServiceWorkers(serviceWorkers.map((s: ServiceWorker) => s.id === editingId ? { ...s, ...worker } : s));
      toast.success("Worker updated");
    } else {
      setServiceWorkers([...serviceWorkers, { id: Date.now().toString(), ...worker }]);
      toast.success("Worker added");
    }
    resetForm();
  };

  const startEdit = (item: ServiceWorker) => {
    setEditingId(item.id); setShowAddForm(true);
    setForm({ name: item.name, trade: item.trade, experience: item.experience, rate: item.rate, rating: String(item.rating), available: String(item.available) });
  };

  return (
    <div className="p-6">
      <div className="mb-6"><h1 className="text-3xl font-bold mb-2">Services Management</h1><p className="text-muted-foreground">Manage service workers and providers</p></div>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" /></div>
        <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Worker</Button>
      </div>
      {showAddForm && (
        <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit" : "Add"} Service Worker</CardTitle></CardHeader><CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
            <div><Label>Trade</Label><Input value={form.trade || ""} onChange={e => setForm({...form, trade: e.target.value})} placeholder="Electrician/Plumber/Carpenter" required /></div>
            <div><Label>Experience</Label><Input value={form.experience || ""} onChange={e => setForm({...form, experience: e.target.value})} placeholder="e.g. 10 years" required /></div>
            <div><Label>Rate</Label><Input value={form.rate || ""} onChange={e => setForm({...form, rate: e.target.value})} placeholder="₹500/day" required /></div>
            <div><Label>Rating</Label><Input type="number" step="0.1" min="0" max="5" value={form.rating || ""} onChange={e => setForm({...form, rating: e.target.value})} /></div>
            <div><Label>Available</Label><select value={form.available || "true"} onChange={e => setForm({...form, available: e.target.value})} className="w-full px-3 py-2 border rounded-md bg-background"><option value="true">Yes</option><option value="false">No</option></select></div>
            <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
          </form>
        </CardContent></Card>
      )}
      <div className="grid gap-4">
        {serviceWorkers.filter((s: ServiceWorker) => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.trade.toLowerCase().includes(searchTerm.toLowerCase())).map((s: ServiceWorker) => (
          <Card key={s.id}><CardContent className="p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">{s.name}</h3>
              <div className="flex gap-2 mt-1 flex-wrap">
                <Badge variant="secondary">{s.trade}</Badge>
                <span className="text-sm text-muted-foreground">{s.experience}</span>
                <span className="text-sm font-bold text-primary">{s.rate}</span>
                <div className="flex items-center gap-1"><Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /><span className="text-sm">{s.rating}</span></div>
                <Badge className={s.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>{s.available ? "Available" : "Busy"}</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => startEdit(s)}><Edit className="h-4 w-4" /></Button>
              <Button size="sm" variant="outline" onClick={() => { setServiceWorkers(serviceWorkers.filter((x: ServiceWorker) => x.id !== s.id)); toast.success("Deleted"); }}><Trash2 className="h-4 w-4" /></Button>
            </div>
          </CardContent></Card>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;
