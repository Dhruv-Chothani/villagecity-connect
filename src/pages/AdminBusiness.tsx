import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Building, Plus, Edit, Trash2, Search } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import type { Business } from "@/types";

const AdminBusiness = () => {
  const { businesses, setBusinesses } = useData();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});

  const resetForm = () => { setForm({}); setEditingId(null); setShowAddForm(false); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const biz = { name: form.name, type: form.type, location: form.location, contact: form.contact };
    if (editingId) {
      setBusinesses(businesses.map((b: Business) => b.id === editingId ? { ...b, ...biz } : b));
      toast.success("Business updated");
    } else {
      setBusinesses([...businesses, { id: Date.now().toString(), ...biz }]);
      toast.success("Business added");
    }
    resetForm();
  };

  const startEdit = (item: Business) => {
    setEditingId(item.id); setShowAddForm(true);
    setForm({ name: item.name, type: item.type, location: item.location, contact: item.contact });
  };

  return (
    <div className="p-6">
      <div className="mb-6"><h1 className="text-3xl font-bold mb-2">Business Management</h1><p className="text-muted-foreground">Manage businesses and registrations</p></div>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /></div>
        <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Business</Button>
      </div>
      {showAddForm && (
        <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit" : "Add"} Business</CardTitle></CardHeader><CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
            <div><Label>Type</Label><Input value={form.type || ""} onChange={e => setForm({...form, type: e.target.value})} placeholder="Retail/Startup/Manufacturing" required /></div>
            <div><Label>Location</Label><Input value={form.location || ""} onChange={e => setForm({...form, location: e.target.value})} required /></div>
            <div><Label>Contact</Label><Input value={form.contact || ""} onChange={e => setForm({...form, contact: e.target.value})} required /></div>
            <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
          </form>
        </CardContent></Card>
      )}
      <div className="grid gap-4">
        {businesses.filter((b: Business) => b.name.toLowerCase().includes(searchTerm.toLowerCase())).map((b: Business) => (
          <Card key={b.id}><CardContent className="p-4 flex justify-between items-center">
            <div><h3 className="font-bold">{b.name}</h3><div className="flex gap-2 mt-1"><Badge variant="secondary">{b.type}</Badge><span className="text-sm text-muted-foreground">📍 {b.location}</span><span className="text-sm text-muted-foreground">📞 {b.contact}</span></div></div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => startEdit(b)}><Edit className="h-4 w-4" /></Button>
              <Button size="sm" variant="outline" onClick={() => { setBusinesses(businesses.filter((x: Business) => x.id !== b.id)); toast.success("Deleted"); }}><Trash2 className="h-4 w-4" /></Button>
            </div>
          </CardContent></Card>
        ))}
      </div>
    </div>
  );
};

export default AdminBusiness;
