import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Monitor, Wrench, ShoppingBag } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { useAuth } from "@/contexts/AuthContext";
import { ElectronicsItem, RepairService } from "@/types";

const ELEC_CATEGORIES = ["All", "Mobiles", "Home Appliances", "Accessories"];

const Electronics = () => {
  const { electronics, repairServices, addSubmission } = useData();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [repairForm, setRepairForm] = useState<string | null>(null);
  const [rf, setRf] = useState({ device: "", name: "", phone: "", address: "" });

  const filtered = electronics.filter((e: ElectronicsItem) => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.category.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || e.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-electronics text-primary-foreground shadow-lg"><Monitor className="h-6 w-6" /></div>
        <div><h1 className="text-2xl font-bold">Electronics Sector</h1><p className="text-sm text-muted-foreground">Repair Services & Buy Electronics</p></div>
      </div>
      <Tabs defaultValue="repair" className="w-full">
        <TabsList className="mb-6 flex w-full flex-wrap gap-1">
          <TabsTrigger value="repair" className="gap-1.5"><Wrench className="h-3.5 w-3.5" />Repair Services</TabsTrigger>
          <TabsTrigger value="buy" className="gap-1.5"><ShoppingBag className="h-3.5 w-3.5" />Buy Electronics</TabsTrigger>
        </TabsList>
        <TabsContent value="repair">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repairServices.map((r: RepairService) => (
              <div key={r.id} className="sector-card">
                <p className="text-3xl">{r.icon}</p>
                <h3 className="mt-2 font-bold">{r.type}</h3>
                <p className="text-sm text-muted-foreground">{r.description}</p>
                <p className="mt-2 text-sm font-bold text-primary">{r.price}</p>
                {repairForm === r.id ? (
                  <div className="mt-3 space-y-2 rounded-lg bg-muted p-3">
                    <div><Label>Device Details</Label><Input value={rf.device} onChange={e => setRf({...rf, device: e.target.value})} placeholder="e.g. Samsung TV" /></div>
                    <div><Label>Your Name</Label><Input value={rf.name} onChange={e => setRf({...rf, name: e.target.value})} /></div>
                    <div><Label>Phone</Label><Input value={rf.phone} onChange={e => setRf({...rf, phone: e.target.value})} /></div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => { addSubmission({ type: "booking", sector: "Electronics", userName: rf.name || user?.name || "Guest", userEmail: user?.email || "", userPhone: rf.phone, details: { service: r.type, device: rf.device, price: r.price } }); toast.success("Repair booked!"); setRepairForm(null); setRf({ device: "", name: "", phone: "", address: "" }); }}>Submit</Button>
                      <Button size="sm" variant="outline" onClick={() => setRepairForm(null)}>Cancel</Button>
                    </div>
                  </div>
                ) : (<Button size="sm" className="mt-3" onClick={() => setRepairForm(r.id)}>Book Repair</Button>)}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="buy">
          <div className="mb-4 flex flex-wrap items-center gap-3"><SearchFilter value={search} onChange={setSearch} placeholder="Search electronics..." /></div>
          <div className="mb-4 flex flex-wrap gap-2">{ELEC_CATEGORIES.map(c => (<Button key={c} size="sm" variant={category === c ? "default" : "outline"} onClick={() => setCategory(c)}>{c}</Button>))}</div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((e: ElectronicsItem) => (
              <div key={e.id} className="sector-card text-center">
                <p className="text-3xl">{e.image}</p>
                <h3 className="mt-2 font-bold">{e.name}</h3>
                <p className="text-xs text-muted-foreground">{e.category}</p>
                <p className="mt-2 text-lg font-bold text-primary">₹{e.price.toLocaleString()}</p>
                <Button size="sm" className="mt-3 w-full" onClick={() => { addSubmission({ type: "enquiry", sector: "Electronics", userName: user?.name || "Guest", userEmail: user?.email || "", userPhone: "", details: { product: e.name, price: e.price } }); toast.success("Enquiry submitted!"); }}>Enquire</Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Electronics;
