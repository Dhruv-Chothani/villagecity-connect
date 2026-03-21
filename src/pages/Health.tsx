import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Heart, Stethoscope, Building2, Pill, Megaphone, ShoppingCart } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { useAuth } from "@/contexts/AuthContext";
import { Doctor, Hospital, Medicine, HealthTip } from "@/types";

const Health = () => {
  const { doctors, hospitals, medicines, healthTips, addSubmission } = useData();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [booking, setBooking] = useState<string | null>(null);
  const [bookingForm, setBookingForm] = useState({ name: "", date: "" });

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-health text-primary-foreground shadow-lg"><Heart className="h-6 w-6" /></div>
        <div><h1 className="text-2xl font-bold">Health Services</h1><p className="text-sm text-muted-foreground">Doctor Consultation, Hospitals, Medicine & Health Awareness</p></div>
      </div>
      <Tabs defaultValue="doctors" className="w-full">
        <TabsList className="mb-6 flex w-full flex-wrap gap-1">
          <TabsTrigger value="doctors" className="gap-1.5"><Stethoscope className="h-3.5 w-3.5" />Doctors</TabsTrigger>
          <TabsTrigger value="hospitals" className="gap-1.5"><Building2 className="h-3.5 w-3.5" />Hospitals</TabsTrigger>
          <TabsTrigger value="medicines" className="gap-1.5"><Pill className="h-3.5 w-3.5" />Medicines</TabsTrigger>
          <TabsTrigger value="awareness" className="gap-1.5"><Megaphone className="h-3.5 w-3.5" />Health Awareness</TabsTrigger>
        </TabsList>
        <TabsContent value="doctors">
          <SearchFilter value={search} onChange={setSearch} placeholder="Search doctors..." />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {doctors.filter((d: Doctor) => d.name.toLowerCase().includes(search.toLowerCase()) || d.specialty.toLowerCase().includes(search.toLowerCase())).map((d: Doctor) => (
              <div key={d.id} className="sector-card">
                <div className="flex items-start justify-between">
                  <div><h3 className="font-bold">{d.name}</h3><p className="text-sm text-muted-foreground">{d.specialty}</p><p className="text-xs text-muted-foreground">{d.hospital}</p></div>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${d.available ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>{d.available ? "Available" : "Unavailable"}</span>
                </div>
                <p className="mt-2 text-sm font-bold text-primary">Fee: {d.fee}</p>
                {booking === d.id ? (
                  <div className="mt-3 space-y-2 rounded-lg bg-muted p-3">
                    <div><Label>Your Name</Label><Input placeholder="Full name" value={bookingForm.name} onChange={e => setBookingForm({...bookingForm, name: e.target.value})} /></div>
                    <div><Label>Date</Label><Input type="date" value={bookingForm.date} onChange={e => setBookingForm({...bookingForm, date: e.target.value})} /></div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => { addSubmission({ type: "booking", sector: "Health", userName: bookingForm.name || user?.name || "Guest", userEmail: user?.email || "", userPhone: "", details: { doctor: d.name, specialty: d.specialty, fee: d.fee, date: bookingForm.date } }); toast.success("Appointment booked!"); setBooking(null); setBookingForm({ name: "", date: "" }); }}>Confirm</Button>
                      <Button size="sm" variant="outline" onClick={() => setBooking(null)}>Cancel</Button>
                    </div>
                  </div>
                ) : (d.available && <Button size="sm" className="mt-3" onClick={() => setBooking(d.id)}>Book Appointment</Button>)}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="hospitals">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hospitals.map((h: Hospital) => (
              <div key={h.id} className="sector-card">
                <div className="flex items-start justify-between"><h3 className="font-bold">{h.name}</h3>{h.emergency && <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-bold text-destructive">🚨 Emergency</span>}</div>
                <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-xs">{h.type}</span>
                <p className="mt-2 text-sm text-muted-foreground">📍 {h.location}</p>
                <p className="text-sm text-muted-foreground">🛏️ {h.beds} beds</p>
                <p className="text-sm font-medium text-primary">📞 {h.phone}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="medicines">
          <SearchFilter value={search} onChange={setSearch} placeholder="Search medicines..." />
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {medicines.filter((m: Medicine) => m.name.toLowerCase().includes(search.toLowerCase())).map((m: Medicine) => (
              <div key={m.id} className="sector-card flex items-center gap-4">
                <span className="text-3xl">{m.image}</span>
                <div className="flex-1">
                  <h3 className="font-bold">{m.name}</h3><p className="text-xs text-muted-foreground">{m.category}</p>
                  {m.prescription && <span className="inline-block rounded-full bg-secondary/10 px-2 py-0.5 text-xs text-secondary">Prescription Required</span>}
                  <p className="mt-1 text-lg font-bold text-primary">₹{m.price}</p>
                </div>
                <Button size="sm" onClick={() => { addSubmission({ type: "order", sector: "Health", userName: user?.name || "Guest", userEmail: user?.email || "", userPhone: "", details: { medicine: m.name, price: m.price } }); toast.success("Medicine ordered!"); }} disabled={m.prescription}><ShoppingCart className="mr-1 h-3.5 w-3.5" /> Order</Button>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="awareness">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {healthTips.map((t: HealthTip) => (
              <div key={t.id} className="sector-card">
                <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${t.type === "Campaign" ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"}`}>{t.type}</span>
                <h3 className="mt-2 font-bold">{t.title}</h3><p className="mt-1 text-sm text-muted-foreground">{t.content}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Health;
