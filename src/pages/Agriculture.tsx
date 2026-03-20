import { useState } from "react";
import { farmingTips, cropPrices, fertilizers, machinery } from "@/lib/dummyData";
import SearchFilter from "@/components/SearchFilter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Tractor, TrendingUp, TrendingDown, Minus, Sprout, Leaf, Cog } from "lucide-react";

const Agriculture = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-agriculture text-primary-foreground shadow-lg">
          <Tractor className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Agriculture Sector</h1>
          <p className="text-sm text-muted-foreground">Farming Tips, Seeds & Fertilizers, Machinery</p>
        </div>
      </div>

      {/* Crop Prices Banner */}
      <div className="mb-6">
        <h2 className="mb-3 text-lg font-bold">📊 Today's Crop Market Prices</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {cropPrices.map(c => (
            <div key={c.crop} className="rounded-xl border bg-card p-4 text-center shadow-sm">
              <p className="text-sm font-medium text-muted-foreground">{c.crop}</p>
              <p className="text-lg font-bold">{c.price}</p>
              <div className="flex items-center justify-center gap-1 text-xs">
                {c.trend === "up" && <><TrendingUp className="h-3 w-3 text-primary" /><span className="text-primary">Rising</span></>}
                {c.trend === "down" && <><TrendingDown className="h-3 w-3 text-destructive" /><span className="text-destructive">Falling</span></>}
                {c.trend === "stable" && <><Minus className="h-3 w-3 text-muted-foreground" /><span className="text-muted-foreground">Stable</span></>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Tabs defaultValue="tips" className="w-full">
        <TabsList className="mb-6 flex w-full flex-wrap gap-1">
          <TabsTrigger value="tips" className="gap-1.5"><Sprout className="h-3.5 w-3.5" />Farming Tips</TabsTrigger>
          <TabsTrigger value="fertilizers" className="gap-1.5"><Leaf className="h-3.5 w-3.5" />Fertilizers & Seeds</TabsTrigger>
          <TabsTrigger value="machinery" className="gap-1.5"><Cog className="h-3.5 w-3.5" />Machinery</TabsTrigger>
        </TabsList>

        <TabsContent value="tips">
          <SearchFilter value={search} onChange={setSearch} placeholder="Search tips..." />
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {farmingTips.filter(t => t.title.toLowerCase().includes(search.toLowerCase())).map(t => (
              <div key={t.id} className="sector-card">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-sector-agriculture/10 px-2 py-0.5 text-xs font-medium text-sector-agriculture">{t.season}</span>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
                <h3 className="mt-2 font-bold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.content}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fertilizers">
          <h2 className="mb-4 text-lg font-semibold">🌱 Fertilizers & Seeds Info</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fertilizers.map(f => (
              <div key={f.id} className="sector-card">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold">{f.name}</h3>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{f.type}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{f.usage}</p>
                <p className="mt-2 text-lg font-bold text-primary">{f.price}</p>
                <Button size="sm" className="mt-3" onClick={() => toast.success("Enquiry submitted!")}>Enquire</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="machinery">
          <h2 className="mb-4 text-lg font-semibold">🚜 Machinery Rental & Purchase</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {machinery.map(m => (
              <div key={m.id} className="sector-card">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold">{m.name}</h3>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${m.type === "Rental" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>{m.type}</span>
                </div>
                <p className="mt-2 text-lg font-bold text-primary">{m.price}</p>
                <span className={`text-xs ${m.available ? "text-primary" : "text-destructive"}`}>{m.available ? "✅ Available" : "❌ Not Available"}</span>
                <Button size="sm" className="mt-3" disabled={!m.available} onClick={() => toast.success("Booking confirmed!")}>
                  {m.type === "Rental" ? "Book Now" : "Buy Now"}
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Agriculture;
