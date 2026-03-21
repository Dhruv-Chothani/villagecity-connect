import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { School, BookOpen, GraduationCap, Monitor, Plus, Edit, Trash2, Search } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { School as SchoolType, Stationery, EduCourse, Ebook } from "@/types";

const AdminEducation = () => {
  const { schools, setSchools, stationery, setStationery, eduCourses, setEduCourses, ebooks, setEbooks } = useData();
  const [activeTab, setActiveTab] = useState("schools");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Generic form state
  const [form, setForm] = useState<Record<string, string>>({});

  const resetForm = () => { setForm({}); setEditingId(null); setShowAddForm(false); };

  // Schools CRUD
  const handleSchoolSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setSchools(schools.map((s: SchoolType) => s.id === editingId ? { ...s, name: form.name, type: form.type, location: form.location, classes: form.classes, admissionOpen: form.admissionOpen === "true" } : s));
      toast.success("School updated");
    } else {
      setSchools([...schools, { id: Date.now().toString(), name: form.name, type: form.type, location: form.location, classes: form.classes, admissionOpen: form.admissionOpen === "true" }]);
      toast.success("School added");
    }
    resetForm();
  };

  const handleStationerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setStationery(stationery.map((s: Stationery) => s.id === editingId ? { ...s, name: form.name, category: form.category, price: parseFloat(form.price), image: form.image || s.image } : s));
      toast.success("Stationery updated");
    } else {
      setStationery([...stationery, { id: "st" + Date.now(), name: form.name, category: form.category, price: parseFloat(form.price), image: form.image || "📦" }]);
      toast.success("Stationery added");
    }
    resetForm();
  };

  const handleCourseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setEduCourses(eduCourses.map((c: EduCourse) => c.id === editingId ? { ...c, name: form.name, institution: form.institution, type: form.type, duration: form.duration, fee: form.fee } : c));
      toast.success("Course updated");
    } else {
      setEduCourses([...eduCourses, { id: Date.now().toString(), name: form.name, institution: form.institution, type: form.type, duration: form.duration, fee: form.fee }]);
      toast.success("Course added");
    }
    resetForm();
  };

  const handleEbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setEbooks(ebooks.map((eb: Ebook) => eb.id === editingId ? { ...eb, name: form.name, format: form.format, pages: parseInt(form.pages), free: form.free === "true" } : eb));
      toast.success("eBook updated");
    } else {
      setEbooks([...ebooks, { id: "eb" + Date.now(), name: form.name, format: form.format || "PDF", pages: parseInt(form.pages), free: form.free === "true" }]);
      toast.success("eBook added");
    }
    resetForm();
  };

  const handleDelete = (id: string, type: string) => {
    if (type === "school") { setSchools(schools.filter((s: SchoolType) => s.id !== id)); }
    else if (type === "stationery") { setStationery(stationery.filter((s: Stationery) => s.id !== id)); }
    else if (type === "course") { setEduCourses(eduCourses.filter((c: EduCourse) => c.id !== id)); }
    else if (type === "ebook") { setEbooks(ebooks.filter((e: Ebook) => e.id !== id)); }
    toast.success("Deleted successfully");
  };

  const startEdit = (item: SchoolType | Stationery | EduCourse | Ebook, type: string) => {
    setEditingId(item.id);
    setShowAddForm(true);
    if (type === "school") {
      const school = item as SchoolType;
      setForm({ name: school.name, type: school.type, location: school.location, classes: school.classes, admissionOpen: String(school.admissionOpen) });
    }
    else if (type === "stationery") {
      const stationery = item as Stationery;
      setForm({ name: stationery.name, category: stationery.category, price: String(stationery.price), image: stationery.image });
    }
    else if (type === "course") {
      const course = item as EduCourse;
      setForm({ name: course.name, institution: course.institution, type: course.type, duration: course.duration, fee: course.fee });
    }
    else if (type === "ebook") {
      const ebook = item as Ebook;
      setForm({ name: ebook.name, format: ebook.format, pages: String(ebook.pages), free: String(ebook.free) });
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Education Management</h1>
        <p className="text-muted-foreground">Manage schools, stationery, courses, and eBooks</p>
      </div>

      <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); resetForm(); }}>
        <TabsList className="mb-6">
          <TabsTrigger value="schools" className="gap-2"><School className="h-4 w-4" />Schools ({schools.length})</TabsTrigger>
          <TabsTrigger value="stationery" className="gap-2"><BookOpen className="h-4 w-4" />Stationery ({stationery.length})</TabsTrigger>
          <TabsTrigger value="courses" className="gap-2"><GraduationCap className="h-4 w-4" />Courses ({eduCourses.length})</TabsTrigger>
          <TabsTrigger value="ebooks" className="gap-2"><Monitor className="h-4 w-4" />eBooks ({ebooks.length})</TabsTrigger>
        </TabsList>

        {/* Schools */}
        <TabsContent value="schools">
          <div className="mb-4 flex justify-between items-center">
            <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search schools..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /></div>
            <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add School</Button>
          </div>
          {showAddForm && (
            <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit School" : "Add School"}</CardTitle></CardHeader><CardContent>
              <form onSubmit={handleSchoolSubmit} className="grid gap-4 md:grid-cols-2">
                <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                <div><Label>Type</Label><Input value={form.type || ""} onChange={e => setForm({...form, type: e.target.value})} placeholder="Government/Private/College" required /></div>
                <div><Label>Location</Label><Input value={form.location || ""} onChange={e => setForm({...form, location: e.target.value})} required /></div>
                <div><Label>Classes</Label><Input value={form.classes || ""} onChange={e => setForm({...form, classes: e.target.value})} required /></div>
                <div><Label>Admission Open</Label>
                  <select value={form.admissionOpen || "true"} onChange={e => setForm({...form, admissionOpen: e.target.value})} className="w-full px-3 py-2 border rounded-md bg-background">
                    <option value="true">Yes</option><option value="false">No</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
              </form>
            </CardContent></Card>
          )}
          <div className="grid gap-4">
            {schools.filter((s: SchoolType) => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map((s: SchoolType) => (
              <Card key={s.id}><CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{s.name}</h3>
                  <div className="flex gap-2 mt-1"><Badge variant="secondary">{s.type}</Badge><Badge variant="outline">{s.classes}</Badge>
                    <Badge className={s.admissionOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>{s.admissionOpen ? "Admission Open" : "Closed"}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">📍 {s.location}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => startEdit(s, "school")}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(s.id, "school")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>

        {/* Stationery */}
        <TabsContent value="stationery">
          <div className="mb-4 flex justify-between items-center">
            <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search stationery..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /></div>
            <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Item</Button>
          </div>
          {showAddForm && (
            <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit Stationery" : "Add Stationery"}</CardTitle></CardHeader><CardContent>
              <form onSubmit={handleStationerySubmit} className="grid gap-4 md:grid-cols-2">
                <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                <div><Label>Category</Label><Input value={form.category || ""} onChange={e => setForm({...form, category: e.target.value})} placeholder="Books/Notebooks/School Supplies" required /></div>
                <div><Label>Price (₹)</Label><Input type="number" value={form.price || ""} onChange={e => setForm({...form, price: e.target.value})} required /></div>
                <div><Label>Image (emoji)</Label><Input value={form.image || ""} onChange={e => setForm({...form, image: e.target.value})} placeholder="📦" /></div>
                <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
              </form>
            </CardContent></Card>
          )}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stationery.filter((s: Stationery) => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map((s: Stationery) => (
              <Card key={s.id}><CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2"><span className="text-3xl">{s.image}</span><div><h3 className="font-bold">{s.name}</h3><Badge variant="outline">{s.category}</Badge></div></div>
                <p className="text-lg font-bold text-primary">₹{s.price}</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={() => startEdit(s, "stationery")}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(s.id, "stationery")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>

        {/* Courses */}
        <TabsContent value="courses">
          <div className="mb-4 flex justify-between items-center">
            <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search courses..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /></div>
            <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Course</Button>
          </div>
          {showAddForm && (
            <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit Course" : "Add Course"}</CardTitle></CardHeader><CardContent>
              <form onSubmit={handleCourseSubmit} className="grid gap-4 md:grid-cols-2">
                <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                <div><Label>Institution</Label><Input value={form.institution || ""} onChange={e => setForm({...form, institution: e.target.value})} required /></div>
                <div><Label>Type</Label><Input value={form.type || ""} onChange={e => setForm({...form, type: e.target.value})} placeholder="Online/Offline/Certification" required /></div>
                <div><Label>Duration</Label><Input value={form.duration || ""} onChange={e => setForm({...form, duration: e.target.value})} required /></div>
                <div><Label>Fee</Label><Input value={form.fee || ""} onChange={e => setForm({...form, fee: e.target.value})} placeholder="₹2,000" required /></div>
                <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
              </form>
            </CardContent></Card>
          )}
          <div className="grid gap-4">
            {eduCourses.filter((c: EduCourse) => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((c: EduCourse) => (
              <Card key={c.id}><CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.institution} • {c.type} • {c.duration}</p>
                  <p className="text-primary font-bold">{c.fee}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => startEdit(c, "course")}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(c.id, "course")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>

        {/* eBooks */}
        <TabsContent value="ebooks">
          <div className="mb-4 flex justify-between items-center">
            <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search eBooks..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /></div>
            <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add eBook</Button>
          </div>
          {showAddForm && (
            <Card className="mb-6"><CardHeader><CardTitle>{editingId ? "Edit eBook" : "Add eBook"}</CardTitle></CardHeader><CardContent>
              <form onSubmit={handleEbookSubmit} className="grid gap-4 md:grid-cols-2">
                <div><Label>Name</Label><Input value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                <div><Label>Format</Label><Input value={form.format || ""} onChange={e => setForm({...form, format: e.target.value})} placeholder="PDF" required /></div>
                <div><Label>Pages</Label><Input type="number" value={form.pages || ""} onChange={e => setForm({...form, pages: e.target.value})} required /></div>
                <div><Label>Free?</Label>
                  <select value={form.free || "true"} onChange={e => setForm({...form, free: e.target.value})} className="w-full px-3 py-2 border rounded-md bg-background">
                    <option value="true">Yes</option><option value="false">No</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex gap-2"><Button type="submit">{editingId ? "Update" : "Add"}</Button><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button></div>
              </form>
            </CardContent></Card>
          )}
          <div className="grid gap-4 md:grid-cols-2">
            {ebooks.filter((e: Ebook) => e.name.toLowerCase().includes(searchTerm.toLowerCase())).map((eb: Ebook) => (
              <Card key={eb.id}><CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{eb.name}</h3>
                  <p className="text-sm text-muted-foreground">{eb.format} • {eb.pages} pages</p>
                  <Badge className={eb.free ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>{eb.free ? "Free" : "Paid"}</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => startEdit(eb, "ebook")}><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(eb.id, "ebook")}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminEducation;
