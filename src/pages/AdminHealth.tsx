import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Stethoscope, Pill, Heart, Plus, Edit, Trash2, Search } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { Doctor, Hospital, Medicine, HealthTip } from "@/types";

const AdminHealth = () => {
  const { doctors, setDoctors, hospitals, setHospitals, medicines, setMedicines, healthTips, setHealthTips } = useData();
  const [activeTab, setActiveTab] = useState("doctors");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});

  const resetForm = () => { setForm({}); setEditingId(null); setShowAddForm(false); };

  const handleDoctorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const doc = { name: form.name, specialty: form.specialty, hospital: form.hospital, fee: form.fee, available: form.available === "true", consultType: form.consultType || "Both" };
    if (editingId) {
      setDoctors(doctors.map((d: Doctor) => d.id === editingId ? { ...d, ...doc } : d));
      toast.success("Doctor updated");
    } else {
      setDoctors([...doctors, { id: Date.now().toString(), ...doc }]);
      toast.success("Doctor added");
    }
    resetForm();
  };

  const handleHospitalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const h = { name: form.name, type: form.type, location: form.location, emergency: form.emergency === "true", beds: parseInt(form.beds), phone: form.phone };
    if (editingId) {
      setHospitals(hospitals.map((ho: Hospital) => ho.id === editingId ? { ...ho, ...h } : ho));
      toast.success("Hospital updated");
    } else {
      setHospitals([...hospitals, { id: "h" + Date.now(), ...h }]);
      toast.success("Hospital added");
    }
    resetForm();
  };

  const handleMedicineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const m = { name: form.name, category: form.category, price: parseFloat(form.price), prescription: form.prescription === "true", image: form.image || "💊" };
    if (editingId) {
      setMedicines(medicines.map((med: Medicine) => med.id === editingId ? { ...med, ...m } : med));
      toast.success("Medicine updated");
    } else {
      setMedicines([...medicines, { id: "m" + Date.now(), ...m }]);
      toast.success("Medicine added");
    }
    resetForm();
  };

  const handleDelete = (id: string, type: string) => {
    if (type === "doctor") setDoctors(doctors.filter((d: Doctor) => d.id !== id));
    else if (type === "hospital") setHospitals(hospitals.filter((h: Hospital) => h.id !== id));
    else if (type === "medicine") setMedicines(medicines.filter((m: Medicine) => m.id !== id));
    else if (type === "tip") setHealthTips(healthTips.filter((t: HealthTip) => t.id !== id));
    toast.success("Deleted successfully");
  };

  const startEdit = (item: Doctor | Hospital | Medicine, type: string) => {
    setEditingId(item.id);
    setShowAddForm(true);
    if (type === "doctor") setForm({ name: item.name, specialty: item.specialty, hospital: item.hospital, fee: item.fee, available: String(item.available), consultType: item.consultType });
    else if (type === "hospital") setForm({ name: item.name, type: item.type, location: item.location, emergency: String(item.emergency), beds: String(item.beds), phone: item.phone });
    else if (type === "medicine") setForm({ name: item.name, category: item.category, price: String(item.price), prescription: String(item.prescription), image: item.image });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Health Management</h1>
        <p className="text-muted-foreground">Manage doctors, hospitals, medicines, and health awareness</p>
      </div>

      <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); resetForm(); }}>
        <TabsList className="mb-6">
          <TabsTrigger value="doctors" className="gap-2"><Stethoscope className="h-4 w-4" />Doctors ({doctors.length})</TabsTrigger>
          <TabsTrigger value="hospitals" className="gap-2"><Heart className="h-4 w-4" />Hospitals ({hospitals.length})</TabsTrigger>
          <TabsTrigger value="medicines" className="gap-2"><Pill className="h-4 w-4" />Medicines ({medicines.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="doctors">
          <div className="mb-4 flex justify-between items-center">
            <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search doctors..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /></div>
            <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Doctor</Button>
          </div>
          {showAddForm && (
            <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit Doctor" : "Add Doctor"}</CardTitle></CardHeader><CardContent>
              <form onSubmit={handleDoctorSubmit} className="grid gap-4 md:grid-cols-2">
                <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                <div><Label>Specialty</Label><Input value={form.specialty || ""} onChange={e => setForm({...form, specialty: e.target.value})} required /></div>
                <div><Label>Hospital</Label><Input value={form.hospital || ""} onChange={e => setForm({...form, hospital: e.target.value})} required /></div>
                <div><Label>Fee</Label><Input value={form.fee || ""} onChange={e => setForm({...form, fee: e.target.value})} placeholder="₹200" required /></div>
                <div><Label>Available</Label><select value={form.available || "true"} onChange={e => setForm({...form, available: e.target.value})} className="w-full px-3 py-2 border rounded-md bg-background"><option value="true">Yes</option><option value="false">No</option></select></div>
                <div><Label>Consult Type</Label><Input value={form.consultType || ""} onChange={e => setForm({...form, consultType: e.target.value})} placeholder="Both/Online/Clinic" /></div>
                <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
              </form>
            </CardContent></Card>
          )}
          <div className="grid gap-4">
            {doctors.filter((d: Doctor) => d.name.toLowerCase().includes(searchTerm.toLowerCase())).map((d: Doctor) => (
              <Card key={d.id}><CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.specialty} • {d.hospital}</p>
                  <div className="flex gap-2 mt-1"><Badge variant="outline">{d.fee}</Badge><Badge className={d.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>{d.available ? "Available" : "Unavailable"}</Badge></div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => startEdit(d, "doctor")}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(d.id, "doctor")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hospitals">
          <div className="mb-4 flex justify-between items-center">
            <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search hospitals..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /></div>
            <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Hospital</Button>
          </div>
          {showAddForm && (
            <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit Hospital" : "Add Hospital"}</CardTitle></CardHeader><CardContent>
              <form onSubmit={handleHospitalSubmit} className="grid gap-4 md:grid-cols-2">
                <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                <div><Label>Type</Label><Input value={form.type || ""} onChange={e => setForm({...form, type: e.target.value})} placeholder="Government/Private" required /></div>
                <div><Label>Location</Label><Input value={form.location || ""} onChange={e => setForm({...form, location: e.target.value})} required /></div>
                <div><Label>Beds</Label><Input type="number" value={form.beds || ""} onChange={e => setForm({...form, beds: e.target.value})} required /></div>
                <div><Label>Phone</Label><Input value={form.phone || ""} onChange={e => setForm({...form, phone: e.target.value})} required /></div>
                <div><Label>Emergency</Label><select value={form.emergency || "false"} onChange={e => setForm({...form, emergency: e.target.value})} className="w-full px-3 py-2 border rounded-md bg-background"><option value="true">Yes</option><option value="false">No</option></select></div>
                <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
              </form>
            </CardContent></Card>
          )}
          <div className="grid gap-4">
            {hospitals.filter((h: Hospital) => h.name.toLowerCase().includes(searchTerm.toLowerCase())).map((h: Hospital) => (
              <Card key={h.id}><CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{h.name}</h3>
                  <p className="text-sm text-muted-foreground">{h.type} • {h.location} • {h.beds} beds</p>
                  <div className="flex gap-2 mt-1">{h.emergency && <Badge className="bg-red-100 text-red-800">🚨 Emergency</Badge>}<Badge variant="outline">📞 {h.phone}</Badge></div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => startEdit(h, "hospital")}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(h.id, "hospital")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="medicines">
          <div className="mb-4 flex justify-between items-center">
            <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search medicines..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /></div>
            <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Medicine</Button>
          </div>
          {showAddForm && (
            <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit Medicine" : "Add Medicine"}</CardTitle></CardHeader><CardContent>
              <form onSubmit={handleMedicineSubmit} className="grid gap-4 md:grid-cols-2">
                <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                <div><Label>Category</Label><Input value={form.category || ""} onChange={e => setForm({...form, category: e.target.value})} required /></div>
                <div><Label>Price (₹)</Label><Input type="number" value={form.price || ""} onChange={e => setForm({...form, price: e.target.value})} required /></div>
                <div><Label>Prescription Required</Label><select value={form.prescription || "false"} onChange={e => setForm({...form, prescription: e.target.value})} className="w-full px-3 py-2 border rounded-md bg-background"><option value="false">No</option><option value="true">Yes</option></select></div>
                <div><Label>Image (emoji)</Label><Input value={form.image || ""} onChange={e => setForm({...form, image: e.target.value})} placeholder="💊" /></div>
                <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
              </form>
            </CardContent></Card>
          )}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {medicines.filter((m: Medicine) => m.name.toLowerCase().includes(searchTerm.toLowerCase())).map((m: Medicine) => (
              <Card key={m.id}><CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2"><span className="text-3xl">{m.image}</span><div><h3 className="font-bold">{m.name}</h3><Badge variant="outline">{m.category}</Badge></div></div>
                <p className="text-lg font-bold text-primary">₹{m.price}</p>
                {m.prescription && <Badge className="bg-yellow-100 text-yellow-800 mt-1">Prescription Required</Badge>}
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={() => startEdit(m, "medicine")}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(m.id, "medicine")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminHealth;
