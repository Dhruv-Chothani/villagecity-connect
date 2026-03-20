import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import { businesses, businessEvents, fundingSchemes } from "@/lib/dummyData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Briefcase, Building, Rocket, Handshake, Calendar } from "lucide-react";

const Business = () => {
  const [search, setSearch] = useState("");
  const { isAdmin } = useAuth();
  const [showForm, setShowForm] = useState(false);

  const filtered = businesses.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) || b.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-business text-primary-foreground shadow-lg">
          <Briefcase className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Business Sector</h1>
          <p className="text-sm text-muted-foreground">Registration, Startup Support & Networking</p>
        </div>
      </div>

      <Tabs defaultValue="listings" className="w-full">
        <TabsList className="mb-6 flex w-full flex-wrap gap-1">
          <TabsTrigger value="listings" className="gap-1.5"><Building className="h-3.5 w-3.5" />Business Listings</TabsTrigger>
          <TabsTrigger value="startup" className="gap-1.5"><Rocket className="h-3.5 w-3.5" />Startup Support</TabsTrigger>
          <TabsTrigger value="networking" className="gap-1.5"><Handshake className="h-3.5 w-3.5" />Networking</TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <SearchFilter value={search} onChange={setSearch} placeholder="Search businesses..." />
            {isAdmin && <Button onClick={() => setShowForm(!showForm)} variant="outline" size="sm">{showForm ? "Cancel" : "+ Register Business"}</Button>}
          </div>
          {showForm && (
            <div className="mb-6 rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 font-bold">Register New Business</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label>Business Name</Label><Input placeholder="Business name" /></div>
                <div><Label>Type</Label><Input placeholder="e.g. Retail, Startup" /></div>
                <div><Label>Location</Label><Input placeholder="Location" /></div>
                <div><Label>Contact</Label><Input placeholder="Phone number" /></div>
              </div>
              <Button className="mt-4" onClick={() => { toast.success("Business registered!"); setShowForm(false); }}>Register</Button>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(b => (
              <div key={b.id} className="sector-card">
                <h3 className="font-bold">{b.name}</h3>
                <span className="inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">{b.type}</span>
                <p className="mt-2 text-sm text-muted-foreground">📍 {b.location}</p>
                <p className="text-sm text-muted-foreground">📞 {b.contact}</p>
                <Button size="sm" variant="outline" className="mt-3" onClick={() => toast.success("Contact details copied!")}>Contact</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="startup">
          <h2 className="mb-4 text-lg font-semibold">💰 Funding & Mentorship Schemes</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fundingSchemes.map(f => (
              <div key={f.id} className="sector-card">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold">{f.name}</h3>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{f.type}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
                <p className="mt-2 text-sm font-bold text-primary">{f.amount}</p>
                <p className="text-xs text-muted-foreground">Eligibility: {f.eligibility}</p>
                <Button size="sm" className="mt-3" onClick={() => toast.success("Application details sent!")}>Apply Now</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="networking">
          <h2 className="mb-4 text-lg font-semibold">📅 Events & Partnerships</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessEvents.map(e => (
              <div key={e.id} className="sector-card">
                <span className="inline-block rounded-full bg-sector-business/10 px-2 py-0.5 text-xs font-medium text-sector-business">{e.type}</span>
                <h3 className="mt-2 font-bold">{e.name}</h3>
                <p className="text-sm text-muted-foreground">{e.description}</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {e.date}
                  <span>📍 {e.location}</span>
                </div>
                <Button size="sm" className="mt-3" onClick={() => toast.success("Registered for event!")}>Register</Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Business;
