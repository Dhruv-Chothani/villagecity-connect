import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import { schools, stationery, courses, ebooks } from "@/lib/dummyData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { GraduationCap, School, BookOpen, Monitor, Download, ShoppingCart } from "lucide-react";

const Education = () => {
  const [search, setSearch] = useState("");
  const { isAdmin } = useAuth();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-education text-primary-foreground shadow-lg">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Education Sector</h1>
          <p className="text-sm text-muted-foreground">Schools, Colleges, Courses & Digital Learning</p>
        </div>
      </div>

      <Tabs defaultValue="schools" className="w-full">
        <TabsList className="mb-6 flex w-full flex-wrap gap-1">
          <TabsTrigger value="schools" className="gap-1.5"><School className="h-3.5 w-3.5" />Schools & Colleges</TabsTrigger>
          <TabsTrigger value="stationery" className="gap-1.5"><ShoppingCart className="h-3.5 w-3.5" />Stationery</TabsTrigger>
          <TabsTrigger value="courses" className="gap-1.5"><BookOpen className="h-3.5 w-3.5" />Skill Courses</TabsTrigger>
          <TabsTrigger value="digital" className="gap-1.5"><Monitor className="h-3.5 w-3.5" />Digital Learning</TabsTrigger>
        </TabsList>

        {/* Schools & Colleges */}
        <TabsContent value="schools">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <SearchFilter value={search} onChange={setSearch} placeholder="Search institutions..." />
            {isAdmin && <Button onClick={() => setShowForm(!showForm)} variant="outline" size="sm">{showForm ? "Cancel" : "+ Add Institution"}</Button>}
          </div>
          {showForm && isAdmin && (
            <div className="mb-6 rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 font-bold">Add New Institution</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label>Name</Label><Input placeholder="Institution name" /></div>
                <div><Label>Type</Label><Input placeholder="Government / Private / College" /></div>
                <div><Label>Location</Label><Input placeholder="Location" /></div>
                <div><Label>Classes</Label><Input placeholder="e.g. 1-12" /></div>
              </div>
              <Button className="mt-4" onClick={() => { toast.success("Institution added!"); setShowForm(false); }}>Save</Button>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {schools.filter(s => s.name.toLowerCase().includes(search.toLowerCase())).map(s => (
              <div key={s.id} className="sector-card">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold">{s.name}</h3>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${s.admissionOpen ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {s.admissionOpen ? "Admissions Open" : "Closed"}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-muted px-2 py-1">{s.type}</span>
                  <span className="rounded-full bg-muted px-2 py-1">📍 {s.location}</span>
                  <span className="rounded-full bg-accent/10 px-2 py-1 font-medium">{s.classes}</span>
                </div>
                {s.admissionOpen && <Button size="sm" className="mt-3" onClick={() => toast.success("Admission enquiry sent!")}>Enquire Admission</Button>}
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Stationery */}
        <TabsContent value="stationery">
          <SearchFilter value={search} onChange={setSearch} placeholder="Search stationery..." />
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stationery.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.category.toLowerCase().includes(search.toLowerCase())).map(s => (
              <div key={s.id} className="sector-card flex items-center gap-4">
                <span className="text-3xl">{s.image}</span>
                <div className="flex-1">
                  <h3 className="font-bold">{s.name}</h3>
                  <p className="text-xs text-muted-foreground">{s.category}</p>
                  <p className="mt-1 text-lg font-bold text-primary">₹{s.price}</p>
                </div>
                <Button size="sm" onClick={() => toast.success(`${s.name} added to cart!`)}>Buy</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Skill Courses */}
        <TabsContent value="courses">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <SearchFilter value={search} onChange={setSearch} placeholder="Search courses..." />
            {isAdmin && <Button onClick={() => setShowForm(!showForm)} variant="outline" size="sm">{showForm ? "Cancel" : "+ Add Course"}</Button>}
          </div>
          {showForm && isAdmin && (
            <div className="mb-6 rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 font-bold">Add New Course</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label>Course Name</Label><Input placeholder="Course name" /></div>
                <div><Label>Institution</Label><Input placeholder="Institution name" /></div>
                <div><Label>Duration</Label><Input placeholder="e.g. 3 months" /></div>
                <div><Label>Fee</Label><Input placeholder="e.g. ₹2,000" /></div>
              </div>
              <Button className="mt-4" onClick={() => { toast.success("Course added!"); setShowForm(false); }}>Save</Button>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.institution.toLowerCase().includes(search.toLowerCase())).map(c => (
              <div key={c.id} className="sector-card">
                <h3 className="font-bold">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.institution}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-muted px-2 py-1">{c.type}</span>
                  <span className="rounded-full bg-muted px-2 py-1">{c.duration}</span>
                  <span className="rounded-full bg-primary/10 px-2 py-1 font-medium text-primary">{c.fee}</span>
                </div>
                <Button size="sm" className="mt-3" onClick={() => toast.success("Enrolled successfully!")}>Enroll Now</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Digital Learning */}
        <TabsContent value="digital">
          <h2 className="mb-4 text-lg font-semibold">📖 eBooks & Learning Resources</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ebooks.map(e => (
              <div key={e.id} className="sector-card text-center">
                <p className="text-4xl">📕</p>
                <h3 className="mt-2 font-bold">{e.name}</h3>
                <p className="text-xs text-muted-foreground">{e.format} · {e.pages} pages</p>
                <span className={`mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${e.free ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                  {e.free ? "Free" : "Premium"}
                </span>
                <Button size="sm" className="mt-3 w-full gap-1" onClick={() => toast.success("Download started!")}>
                  <Download className="h-3.5 w-3.5" /> Download
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Education;
