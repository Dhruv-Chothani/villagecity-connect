import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Briefcase, Megaphone, Plus, Edit, Trash2, Search } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { EmploymentOpportunity, AwarenessProgram } from "@/types";

const AdminEmployment = () => {
  const { jobs, setJobs, awarenessPrograms, setAwarenessPrograms } = useData();
  const [activeTab, setActiveTab] = useState("jobs");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});

  const resetForm = () => { setForm({}); setEditingId(null); setShowAddForm(false); };

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const job = { title: form.title, company: form.company, type: form.type, salary: form.salary, location: form.location };
    if (editingId) { setJobs(jobs.map((j: EmploymentOpportunity) => j.id === editingId ? { ...j, ...job } : j)); toast.success("Updated"); }
    else { setJobs([...jobs, { id: Date.now().toString(), ...job }]); toast.success("Job added"); }
    resetForm();
  };

  const handleAwarenessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prog = { title: form.title, date: form.date, location: form.location, description: form.description };
    if (editingId) { setAwarenessPrograms(awarenessPrograms.map((a: AwarenessProgram) => a.id === editingId ? { ...a, ...prog } : a)); toast.success("Updated"); }
    else { setAwarenessPrograms([...awarenessPrograms, { id: "ap" + Date.now(), ...prog }]); toast.success("Program added"); }
    resetForm();
  };

  return (
    <div className="p-6">
      <div className="mb-6"><h1 className="text-3xl font-bold mb-2">Employment Management</h1><p className="text-muted-foreground">Manage jobs and awareness programs</p></div>
      <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); resetForm(); }}>
        <TabsList className="mb-6">
          <TabsTrigger value="jobs" className="gap-2"><Briefcase className="h-4 w-4" />Jobs ({jobs.length})</TabsTrigger>
          <TabsTrigger value="awareness" className="gap-2"><Megaphone className="h-4 w-4" />Awareness ({awarenessPrograms.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs">
          <div className="mb-4 flex justify-between items-center">
            <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search jobs..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" /></div>
            <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Job</Button>
          </div>
          {showAddForm && <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit" : "Add"} Job</CardTitle></CardHeader><CardContent><form onSubmit={handleJobSubmit} className="grid gap-4 md:grid-cols-2">
            <div><Label>Title</Label><Input value={form.title || ""} onChange={e => setForm({...form, title: e.target.value})} required /></div>
            <div><Label>Company</Label><Input value={form.company || ""} onChange={e => setForm({...form, company: e.target.value})} required /></div>
            <div><Label>Type</Label><Input value={form.type || ""} onChange={e => setForm({...form, type: e.target.value})} placeholder="Private/Daily Wage" required /></div>
            <div><Label>Salary</Label><Input value={form.salary || ""} onChange={e => setForm({...form, salary: e.target.value})} required /></div>
            <div><Label>Location</Label><Input value={form.location || ""} onChange={e => setForm({...form, location: e.target.value})} required /></div>
            <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
          </form></CardContent></Card>}
          <div className="grid gap-4">
            {jobs.filter((j: EmploymentOpportunity) => j.title.toLowerCase().includes(searchTerm.toLowerCase())).map((j: EmploymentOpportunity) => (
              <Card key={j.id}><CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{j.title}</h3>
                  <p className="text-sm text-muted-foreground">{j.company} • {j.location}</p>
                  <div className="flex gap-2 mt-1"><Badge variant={j.type === "Daily Wage" ? "secondary" : "default"}>{j.type}</Badge><span className="text-sm font-bold text-primary">{j.salary}</span></div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => { setEditingId(j.id); setShowAddForm(true); setForm({ title: j.title, company: j.company, type: j.type, salary: j.salary, location: j.location }); }}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => { setJobs(jobs.filter((x: EmploymentOpportunity) => x.id !== j.id)); toast.success("Deleted"); }}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="awareness">
          <div className="mb-4 flex justify-between"><Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Program</Button></div>
          {showAddForm && <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit" : "Add"} Program</CardTitle></CardHeader><CardContent><form onSubmit={handleAwarenessSubmit} className="grid gap-4 md:grid-cols-2">
            <div><Label>Title</Label><Input value={form.title || ""} onChange={e => setForm({...form, title: e.target.value})} required /></div>
            <div><Label>Date</Label><Input value={form.date || ""} onChange={e => setForm({...form, date: e.target.value})} required /></div>
            <div><Label>Location</Label><Input value={form.location || ""} onChange={e => setForm({...form, location: e.target.value})} required /></div>
            <div className="md:col-span-2"><Label>Description</Label><Input value={form.description || ""} onChange={e => setForm({...form, description: e.target.value})} required /></div>
            <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
          </form></CardContent></Card>}
          <div className="grid gap-4">
            {awarenessPrograms.map((a: AwarenessProgram) => (
              <Card key={a.id}><CardContent className="p-4 flex justify-between items-start">
                <div><h3 className="font-bold">{a.title}</h3><p className="text-sm text-muted-foreground">{a.description}</p><p className="text-xs mt-1">📅 {a.date} • 📍 {a.location}</p></div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => { setEditingId(a.id); setShowAddForm(true); setForm({ title: a.title, date: a.date, location: a.location, description: a.description }); }}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => { setAwarenessPrograms(awarenessPrograms.filter((x: AwarenessProgram) => x.id !== a.id)); toast.success("Deleted"); }}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminEmployment;
