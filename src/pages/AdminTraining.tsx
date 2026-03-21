import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { BookOpen, Plus, Edit, Trash2, Search } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { TrainingProgram } from "@/types";

const AdminTraining = () => {
  const { trainingPrograms, setTrainingPrograms } = useData();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});

  const resetForm = () => { setForm({}); setEditingId(null); setShowAddForm(false); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prog = { name: form.name, type: form.type, duration: form.duration, description: form.description };
    if (editingId) {
      setTrainingPrograms(trainingPrograms.map((p: TrainingProgram) => p.id === editingId ? { ...p, ...prog } : p));
      toast.success("Program updated");
    } else {
      setTrainingPrograms([...trainingPrograms, { id: Date.now().toString(), ...prog }]);
      toast.success("Program added");
    }
    resetForm();
  };

  return (
    <div className="p-6">
      <div className="mb-6"><h1 className="text-3xl font-bold mb-2">Training Management</h1><p className="text-muted-foreground">Manage skill development & training programs</p></div>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" /></div>
        <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Program</Button>
      </div>
      {showAddForm && (
        <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit" : "Add"} Program</CardTitle></CardHeader><CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
            <div><Label>Type</Label><Input value={form.type || ""} onChange={e => setForm({...form, type: e.target.value})} placeholder="Women Development/Technical/Vocational/Job-Oriented/Certification" required /></div>
            <div><Label>Duration</Label><Input value={form.duration || ""} onChange={e => setForm({...form, duration: e.target.value})} required /></div>
            <div className="md:col-span-2"><Label>Description</Label><Input value={form.description || ""} onChange={e => setForm({...form, description: e.target.value})} required /></div>
            <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
          </form>
        </CardContent></Card>
      )}
      <div className="grid gap-4">
        {trainingPrograms.filter((p: TrainingProgram) => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map((p: TrainingProgram) => (
          <Card key={p.id}><CardContent className="p-4 flex justify-between items-start">
            <div>
              <Badge variant="secondary">{p.type}</Badge>
              <h3 className="font-bold mt-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <p className="text-sm mt-1">⏱️ {p.duration}</p>
            </div>
            <div className="flex gap-2 ml-4">
              <Button size="sm" variant="outline" onClick={() => { setEditingId(p.id); setShowAddForm(true); setForm({ name: p.name, type: p.type, duration: p.duration, description: p.description }); }}><Edit className="h-4 w-4" /></Button>
              <Button size="sm" variant="outline" onClick={() => { setTrainingPrograms(trainingPrograms.filter((x: TrainingProgram) => x.id !== p.id)); toast.success("Deleted"); }}><Trash2 className="h-4 w-4" /></Button>
            </div>
          </CardContent></Card>
        ))}
      </div>
    </div>
  );
};

export default AdminTraining;
