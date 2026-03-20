import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import { electronics, repairServices } from "@/lib/dummyData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Monitor, Wrench, ShoppingBag } from "lucide-react";

const ELEC_CATEGORIES = ["All", "Mobiles", "Home Appliances", "Accessories"];

const Electronics = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [repairForm, setRepairForm] = useState<string | null>(null);

  const filtered = electronics.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.brand.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || e.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-electronics text-primary-foreground shadow-lg">
          <Monitor className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Electronics Sector</h1>
          <p className="text-sm text-muted-foreground">Repair Services & Buy Electronics</p>
        </div>
      </div>

      <Tabs defaultValue="repair" className="w-full">
        <TabsList className="mb-6 flex w-full flex-wrap gap-1">
          <TabsTrigger value="repair" className="gap-1.5"><Wrench className="h-3.5 w-3.5" />Repair Services</TabsTrigger>
          <TabsTrigger value="buy" className="gap-1.5"><ShoppingBag className="h-3.5 w-3.5" />Buy Electronics</TabsTrigger>
        </TabsList>

        <TabsContent value="repair">
          <h2 className="mb-4 text-lg font-semibold">🔧 Repair Service Categories</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repairServices.map(r => (
              <div key={r.id} className="sector-card">
                <p className="text-3xl">{r.icon}</p>
                <h3 className="mt-2 font-bold">{r.type}</h3>
                <p className="text-sm text-muted-foreground">{r.description}</p>
                <p className="mt-2 text-sm font-bold text-primary">{r.price}</p>
                {repairForm === r.id ? (
                  <div className="mt-3 space-y-2 rounded-lg bg-muted p-3">
                    <div><Label>Device Details</Label><Input placeholder="e.g. Samsung TV, broken screen" /></div>
                    <div><Label>Your Name</Label><Input placeholder="Full name" /></div>
                    <div><Label>Phone</Label><Input placeholder="Phone number" /></div>
                    <div><Label>Address</Label><Input placeholder="Service address" /></div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => { toast.success("Repair booked!"); setRepairForm(null); }}>Submit</Button>
                      <Button size="sm" variant="outline" onClick={() => setRepairForm(null)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <Button size="sm" className="mt-3" onClick={() => setRepairForm(r.id)}>Book Repair</Button>
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="buy">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <SearchFilter value={search} onChange={setSearch} placeholder="Search electronics..." />
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {ELEC_CATEGORIES.map(c => (
              <Button key={c} size="sm" variant={category === c ? "default" : "outline"} onClick={() => setCategory(c)}>{c}</Button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map(e => (
              <div key={e.id} className="sector-card text-center">
                <p className="text-3xl">{e.image}</p>
                <h3 className="mt-2 font-bold">{e.name}</h3>
                <p className="text-xs text-muted-foreground">{e.brand} · {e.category}</p>
                <p className="mt-2 text-lg font-bold text-primary">₹{e.price.toLocaleString()}</p>
                <Button size="sm" className="mt-3 w-full" onClick={() => toast.success("Added to enquiry!")}>Enquire</Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Electronics;
