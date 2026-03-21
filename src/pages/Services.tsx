import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Wrench, Star, Zap, Droplets, Hammer, PaintBucket, HardHat } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { useAuth } from "@/contexts/AuthContext";
import { ServiceWorker } from "@/types";

const TRADES = ["All", "Electrician", "Plumber", "Carpenter", "House Painter", "Daily Wage Labour"];
const tradeIcons: Record<string, React.ReactNode> = { "Electrician": <Zap className="h-4 w-4" />, "Plumber": <Droplets className="h-4 w-4" />, "Carpenter": <Hammer className="h-4 w-4" />, "House Painter": <PaintBucket className="h-4 w-4" />, "Daily Wage Labour": <HardHat className="h-4 w-4" /> };

const Services = () => {
  const { serviceWorkers, addSubmission } = useData();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [trade, setTrade] = useState("All");
  const [booking, setBooking] = useState<string | null>(null);
  const [bf, setBf] = useState({ name: "", address: "", date: "" });

  const filtered = serviceWorkers.filter((s: ServiceWorker) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.trade.toLowerCase().includes(search.toLowerCase());
    const matchTrade = trade === "All" || s.trade === trade;
    return matchSearch && matchTrade;
  });

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-services text-primary-foreground shadow-lg"><Wrench className="h-6 w-6" /></div>
        <div><h1 className="text-2xl font-bold">Services Sector</h1><p className="text-sm text-muted-foreground">Electricians, Plumbers, Carpenters & More</p></div>
      </div>
      <Tabs defaultValue="browse" className="w-full">
        <TabsList className="mb-6 flex w-full flex-wrap gap-1">
          <TabsTrigger value="browse" className="gap-1.5"><Wrench className="h-3.5 w-3.5" />Browse Services</TabsTrigger>
          <TabsTrigger value="book" className="gap-1.5"><Star className="h-3.5 w-3.5" />Book Service</TabsTrigger>
        </TabsList>
        <TabsContent value="browse">
          <div className="mb-4 flex flex-wrap items-center gap-3"><SearchFilter value={search} onChange={setSearch} placeholder="Search services..." /></div>
          <div className="mb-4 flex flex-wrap gap-2">{TRADES.map(t => (<Button key={t} size="sm" variant={trade === t ? "default" : "outline"} onClick={() => setTrade(t)} className="gap-1.5">{tradeIcons[t]} {t}</Button>))}</div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s: ServiceWorker) => (
              <div key={s.id} className="sector-card">
                <div className="flex items-start justify-between">
                  <div><h3 className="font-bold">{s.name}</h3><span className="inline-block rounded-full bg-sector-services/10 px-2 py-0.5 text-xs font-medium text-sector-services">{s.trade}</span><p className="mt-1 text-xs text-muted-foreground">{s.experience} experience</p></div>
                  <div className="text-right"><div className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" /><span className="text-sm font-medium">{s.rating}</span></div><span className={`text-xs ${s.available ? "text-primary" : "text-destructive"}`}>{s.available ? "Available" : "Busy"}</span></div>
                </div>
                <p className="mt-2 text-sm font-bold text-primary">{s.rate}</p>
                {booking === s.id ? (
                  <div className="mt-3 space-y-2 rounded-lg bg-muted p-3">
                    <div><Label>Your Name</Label><Input value={bf.name} onChange={e => setBf({...bf, name: e.target.value})} /></div>
                    <div><Label>Address</Label><Input value={bf.address} onChange={e => setBf({...bf, address: e.target.value})} /></div>
                    <div><Label>Date</Label><Input type="date" value={bf.date} onChange={e => setBf({...bf, date: e.target.value})} /></div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => { addSubmission({ type: "booking", sector: "Services", userName: bf.name || user?.name || "Guest", userEmail: user?.email || "", userPhone: "", details: { worker: s.name, trade: s.trade, rate: s.rate, date: bf.date, address: bf.address } }); toast.success("Service booked!"); setBooking(null); setBf({ name: "", address: "", date: "" }); }}>Confirm</Button>
                      <Button size="sm" variant="outline" onClick={() => setBooking(null)}>Cancel</Button>
                    </div>
                  </div>
                ) : (<Button size="sm" className="mt-3" disabled={!s.available} onClick={() => setBooking(s.id)}>Book Now</Button>)}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="book">
          <div className="mx-auto max-w-lg rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold">📋 Schedule a Service</h3>
            <div className="space-y-4">
              <div><Label>Service Type</Label><Input placeholder="e.g. Electrician, Plumber" /></div>
              <div><Label>Description</Label><Input placeholder="Describe the work needed" /></div>
              <div><Label>Your Name</Label><Input placeholder="Full name" /></div>
              <div><Label>Phone</Label><Input placeholder="Phone number" /></div>
              <div><Label>Address</Label><Input placeholder="Service address" /></div>
              <div><Label>Preferred Date</Label><Input type="date" /></div>
              <Button className="w-full" onClick={() => { addSubmission({ type: "booking", sector: "Services", userName: user?.name || "Guest", userEmail: user?.email || "", userPhone: "", details: { type: "General service request" } }); toast.success("Service request submitted!"); }}>Submit Request</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Services;
