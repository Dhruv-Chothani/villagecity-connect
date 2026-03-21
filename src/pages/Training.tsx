import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { BookOpen, Heart, Cog, Briefcase, Award } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { useAuth } from "@/contexts/AuthContext";
import { TrainingProgram } from "@/types";

const TYPES = ["All", "Women Development", "Technical", "Vocational", "Job-Oriented", "Certification"];

const Training = () => {
  const { trainingPrograms, addSubmission } = useData();
  const { user } = useAuth();
  const [enrolling, setEnrolling] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState("All");
  const [ef, setEf] = useState({ name: "", phone: "" });

  const filtered = trainingPrograms.filter((p: TrainingProgram) => typeFilter === "All" || p.type === typeFilter);

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-training text-primary-foreground shadow-lg"><BookOpen className="h-6 w-6" /></div>
        <div><h1 className="text-2xl font-bold">Skill Development & Training</h1><p className="text-sm text-muted-foreground">VCDA Mahila Shiksha Mission, Vocational & Job-Oriented Programs</p></div>
      </div>
      <Tabs defaultValue="programs" className="w-full">
        <TabsList className="mb-6 flex w-full flex-wrap gap-1">
          <TabsTrigger value="programs" className="gap-1.5"><BookOpen className="h-3.5 w-3.5" />All Programs</TabsTrigger>
          <TabsTrigger value="women" className="gap-1.5"><Heart className="h-3.5 w-3.5" />Women Empowerment</TabsTrigger>
          <TabsTrigger value="certifications" className="gap-1.5"><Award className="h-3.5 w-3.5" />Certifications</TabsTrigger>
        </TabsList>
        <TabsContent value="programs">
          <div className="mb-4 flex flex-wrap gap-2">{TYPES.map(t => (<Button key={t} size="sm" variant={typeFilter === t ? "default" : "outline"} onClick={() => setTypeFilter(t)}>{t}</Button>))}</div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p: TrainingProgram) => (
              <div key={p.id} className="sector-card">
                <span className="inline-block rounded-full bg-sector-training/10 px-2 py-0.5 text-xs font-medium text-sector-training">{p.type}</span>
                <h3 className="mt-2 font-bold">{p.name}</h3><p className="text-sm text-muted-foreground">{p.description}</p><p className="mt-2 text-xs text-muted-foreground">⏱️ Duration: {p.duration}</p>
                {enrolling === p.id ? (
                  <div className="mt-3 space-y-2 rounded-lg bg-muted p-3">
                    <div><Label>Your Name</Label><Input value={ef.name} onChange={e => setEf({...ef, name: e.target.value})} /></div>
                    <div><Label>Phone</Label><Input value={ef.phone} onChange={e => setEf({...ef, phone: e.target.value})} /></div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => { addSubmission({ type: "registration", sector: "Training", userName: ef.name || user?.name || "Guest", userEmail: user?.email || "", userPhone: ef.phone, details: { program: p.name, type: p.type, duration: p.duration } }); toast.success("Enrolled!"); setEnrolling(null); setEf({ name: "", phone: "" }); }}>Submit</Button>
                      <Button size="sm" variant="outline" onClick={() => setEnrolling(null)}>Cancel</Button>
                    </div>
                  </div>
                ) : (<Button size="sm" className="mt-3" onClick={() => setEnrolling(p.id)}>Enroll Now</Button>)}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="women">
          <div className="mb-6 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-6">
            <h2 className="text-xl font-bold text-primary">🌸 VCDA Mahila Shiksha Mission</h2>
            <p className="mt-2 text-muted-foreground">Empowering women through education, skill development, and entrepreneurship.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trainingPrograms.filter((p: TrainingProgram) => p.type === "Women Development").map((p: TrainingProgram) => (
              <div key={p.id} className="sector-card">
                <h3 className="font-bold">{p.name}</h3><p className="text-sm text-muted-foreground">{p.description}</p><p className="mt-2 text-xs text-muted-foreground">⏱️ {p.duration}</p>
                <Button size="sm" className="mt-3" onClick={() => { addSubmission({ type: "registration", sector: "Training", userName: user?.name || "Guest", userEmail: user?.email || "", userPhone: "", details: { program: p.name } }); toast.success("Enrolled!"); }}>Enroll Now</Button>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="certifications">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trainingPrograms.filter((p: TrainingProgram) => p.type === "Certification").map((p: TrainingProgram) => (
              <div key={p.id} className="sector-card">
                <div className="flex items-center gap-2"><Award className="h-5 w-5 text-primary" /><h3 className="font-bold">{p.name}</h3></div>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p><p className="mt-2 text-xs text-muted-foreground">⏱️ {p.duration}</p>
                <Button size="sm" className="mt-3" onClick={() => { addSubmission({ type: "registration", sector: "Training", userName: user?.name || "Guest", userEmail: user?.email || "", userPhone: "", details: { program: p.name, certification: true } }); toast.success("Enrolled!"); }}>Get Certified</Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Training;
