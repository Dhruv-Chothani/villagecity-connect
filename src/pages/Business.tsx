import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Briefcase, Building, Rocket, Handshake, Calendar } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { useAuth } from "@/contexts/AuthContext";
import type { Business, BusinessEvent, FundingScheme } from "@/types";

const Business = () => {
  const { businesses, businessEvents, fundingSchemes, addSubmission } = useData();
  const { user } = useAuth();
  const [search, setSearch] = useState("");

  const filtered = businesses.filter((b: Business) => b.name.toLowerCase().includes(search.toLowerCase()) || b.type.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-business text-primary-foreground shadow-lg"><Briefcase className="h-6 w-6" /></div>
        <div><h1 className="text-2xl font-bold">Business Sector</h1><p className="text-sm text-muted-foreground">Registration, Startup Support & Networking</p></div>
      </div>
      <Tabs defaultValue="listings" className="w-full">
        <TabsList className="mb-6 flex w-full flex-wrap gap-1">
          <TabsTrigger value="listings" className="gap-1.5"><Building className="h-3.5 w-3.5" />Business Listings</TabsTrigger>
          <TabsTrigger value="startup" className="gap-1.5"><Rocket className="h-3.5 w-3.5" />Startup Support</TabsTrigger>
          <TabsTrigger value="networking" className="gap-1.5"><Handshake className="h-3.5 w-3.5" />Networking</TabsTrigger>
        </TabsList>
        <TabsContent value="listings">
          <SearchFilter value={search} onChange={setSearch} placeholder="Search businesses..." />
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b: Business) => (
              <div key={b.id} className="sector-card">
                <h3 className="font-bold">{b.name}</h3>
                <span className="inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">{b.type}</span>
                <p className="mt-2 text-sm text-muted-foreground">📍 {b.location}</p>
                <p className="text-sm text-muted-foreground">📞 {b.contact}</p>
                <Button size="sm" variant="outline" className="mt-3" onClick={() => { addSubmission({ type: "enquiry", sector: "Business", userName: user?.name || "Guest", userEmail: user?.email || "", userPhone: "", details: { business: b.name, action: "Contact enquiry" } }); toast.success("Enquiry sent!"); }}>Contact</Button>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="startup">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fundingSchemes.map((f: FundingScheme) => (
              <div key={f.id} className="sector-card">
                <div className="flex items-start justify-between"><h3 className="font-bold">{f.name}</h3><span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{f.type}</span></div>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
                <p className="mt-2 text-sm font-bold text-primary">{f.amount}</p>
                <Button size="sm" className="mt-3" onClick={() => { addSubmission({ type: "application", sector: "Business", userName: user?.name || "Guest", userEmail: user?.email || "", userPhone: "", details: { scheme: f.name, amount: f.amount } }); toast.success("Application submitted!"); }}>Apply Now</Button>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="networking">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessEvents.map((e: BusinessEvent) => (
              <div key={e.id} className="sector-card">
                <span className="inline-block rounded-full bg-sector-business/10 px-2 py-0.5 text-xs font-medium text-sector-business">{e.type}</span>
                <h3 className="mt-2 font-bold">{e.name}</h3>
                <p className="text-sm text-muted-foreground">{e.description}</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> {e.date} <span>📍 {e.location}</span></div>
                <Button size="sm" className="mt-3" onClick={() => { addSubmission({ type: "registration", sector: "Business", userName: user?.name || "Guest", userEmail: user?.email || "", userPhone: "", details: { event: e.name, date: e.date } }); toast.success("Registered!"); }}>Register</Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Business;
