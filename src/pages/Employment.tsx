import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import { jobs, awarenessPrograms } from "@/lib/dummyData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Users, Megaphone, HardHat, Briefcase, UserPlus, Calendar, Upload } from "lucide-react";

const JOB_TYPES = ["All", "Private", "Daily Wage"];

const Employment = () => {
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("All");
  const [applying, setApplying] = useState<string | null>(null);

  const filtered = jobs.filter(j => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase());
    const matchType = jobType === "All" || j.type === jobType;
    return matchSearch && matchType;
  });

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-employment text-primary-foreground shadow-lg">
          <Users className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Employment Sector</h1>
          <p className="text-sm text-muted-foreground">Job Alerts, Daily Wage, Company Jobs & Registration</p>
        </div>
      </div>

      <Tabs defaultValue="jobs" className="w-full">
        <TabsList className="mb-6 flex w-full flex-wrap gap-1">
          <TabsTrigger value="awareness" className="gap-1.5"><Megaphone className="h-3.5 w-3.5" />Awareness</TabsTrigger>
          <TabsTrigger value="jobs" className="gap-1.5"><Briefcase className="h-3.5 w-3.5" />Job Listings</TabsTrigger>
          <TabsTrigger value="register" className="gap-1.5"><UserPlus className="h-3.5 w-3.5" />Register</TabsTrigger>
        </TabsList>

        <TabsContent value="awareness">
          <h2 className="mb-4 text-lg font-semibold">📢 Awareness Programs</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awarenessPrograms.map(a => (
              <div key={a.id} className="sector-card">
                <span className="inline-block rounded-full bg-sector-employment/10 px-2 py-0.5 text-xs font-medium text-sector-employment">Program</span>
                <h3 className="mt-2 font-bold">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.description}</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {a.date}
                  <span>📍 {a.location}</span>
                </div>
                <Button size="sm" className="mt-3" onClick={() => toast.success("Registered for program!")}>Join</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="jobs">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <SearchFilter value={search} onChange={setSearch} placeholder="Search jobs..." />
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {JOB_TYPES.map(t => (
              <Button key={t} size="sm" variant={jobType === t ? "default" : "outline"} onClick={() => setJobType(t)} className="gap-1.5">
                {t === "Daily Wage" ? <HardHat className="h-3.5 w-3.5" /> : <Briefcase className="h-3.5 w-3.5" />} {t}
              </Button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map(j => (
              <div key={j.id} className="sector-card">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold">{j.title}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${j.type === "Daily Wage" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"}`}>{j.type}</span>
                </div>
                <p className="mt-2 text-sm">💰 {j.salary}</p>
                <p className="text-sm text-muted-foreground">📍 {j.location}</p>
                {applying === j.id ? (
                  <div className="mt-3 space-y-2 rounded-lg bg-muted p-3">
                    <div><Label>Your Name</Label><Input placeholder="Full name" /></div>
                    <div><Label>Phone</Label><Input placeholder="Phone number" /></div>
                    <div><Label>Experience</Label><Input placeholder="e.g. 2 years" /></div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => { toast.success("Application submitted!"); setApplying(null); }}>Submit</Button>
                      <Button size="sm" variant="outline" onClick={() => setApplying(null)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <Button size="sm" className="mt-3" onClick={() => setApplying(j.id)}>Apply Now</Button>
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="register">
          <div className="mx-auto max-w-lg rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold">📝 Employment Registration</h3>
            <p className="mb-4 text-sm text-muted-foreground">Create your job seeker profile to get matched with opportunities</p>
            <div className="space-y-4">
              <div><Label>Full Name</Label><Input placeholder="Full name" /></div>
              <div><Label>Phone</Label><Input placeholder="Phone number" /></div>
              <div><Label>Email</Label><Input type="email" placeholder="Email address" /></div>
              <div><Label>Skills</Label><Input placeholder="e.g. Data Entry, Driving, Welding" /></div>
              <div><Label>Experience</Label><Input placeholder="e.g. 3 years in construction" /></div>
              <div><Label>Preferred Job Type</Label><Input placeholder="Full-time / Daily Wage / Part-time" /></div>
              <div>
                <Label>Upload Resume (Optional)</Label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border-2 border-dashed p-4 text-center">
                  <Upload className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Click to upload resume (PDF/DOC)</span>
                </div>
              </div>
              <Button className="w-full" onClick={() => toast.success("Registration successful! We'll match you with jobs.")}>Register as Job Seeker</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Employment;
