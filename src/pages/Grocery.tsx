import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import { products, groceryStores, subscriptionPlans } from "@/lib/dummyData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ShoppingCart, Plus, Minus, Store, Package, Tag, Star, CalendarCheck } from "lucide-react";

interface CartItem { id: string; name: string; price: number; qty: number; }

const CATEGORIES = ["All", "Grains", "Beauty", "Dairy", "Snacks"];

const Grocery = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [category, setCategory] = useState("All");

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });

  const addToCart = (p: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === p.id);
      if (existing) return prev.map(c => c.id === p.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { id: p.id, name: p.name, price: p.price, qty: 1 }];
    });
    toast.success(`${p.name} added to cart`);
  };

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-grocery text-primary-foreground shadow-lg">
          <ShoppingCart className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Home Grocery Store</h1>
          <p className="text-sm text-muted-foreground">Online Ordering, Home Delivery & Daily Subscriptions</p>
        </div>
      </div>

      <Tabs defaultValue="shop" className="w-full">
        <TabsList className="mb-6 flex w-full flex-wrap gap-1">
          <TabsTrigger value="shop" className="gap-1.5"><Package className="h-3.5 w-3.5" />Shop Online</TabsTrigger>
          <TabsTrigger value="stores" className="gap-1.5"><Store className="h-3.5 w-3.5" />Local Stores</TabsTrigger>
          <TabsTrigger value="subscription" className="gap-1.5"><CalendarCheck className="h-3.5 w-3.5" />Subscriptions</TabsTrigger>
          <TabsTrigger value="offers" className="gap-1.5"><Tag className="h-3.5 w-3.5" />Offers</TabsTrigger>
        </TabsList>

        {/* Shop Online */}
        <TabsContent value="shop">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <SearchFilter value={search} onChange={setSearch} placeholder="Search products..." />
            <Button variant="outline" size="sm" onClick={() => setShowCart(!showCart)}>🛒 Cart ({cart.reduce((s, c) => s + c.qty, 0)})</Button>
          </div>
          {/* Category Filters */}
          <div className="mb-4 flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <Button key={c} size="sm" variant={category === c ? "default" : "outline"} onClick={() => setCategory(c)}>{c}</Button>
            ))}
          </div>
          {showCart && cart.length > 0 && (
            <div className="mb-6 rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-3 font-bold">Your Cart</h3>
              {cart.map(c => (
                <div key={c.id} className="flex items-center justify-between border-b py-2">
                  <span className="text-sm">{c.name}</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setCart(prev => prev.map(x => x.id === c.id ? { ...x, qty: Math.max(0, x.qty - 1) } : x).filter(x => x.qty > 0))}><Minus className="h-4 w-4" /></button>
                    <span className="text-sm font-medium">{c.qty}</span>
                    <button onClick={() => setCart(prev => prev.map(x => x.id === c.id ? { ...x, qty: x.qty + 1 } : x))}><Plus className="h-4 w-4" /></button>
                    <span className="ml-2 text-sm font-bold">₹{c.price * c.qty}</span>
                  </div>
                </div>
              ))}
              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold">Total: ₹{total}</span>
                <Button size="sm" onClick={() => { toast.success("Order placed! Home delivery in 2 hours."); setCart([]); setShowCart(false); }}>Place Order</Button>
              </div>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(p => (
              <div key={p.id} className="sector-card flex items-center gap-4">
                <span className="text-4xl">{p.image}</span>
                <div className="flex-1">
                  <h3 className="font-bold">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                  {p.offer && <span className="inline-block rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-bold text-destructive">{p.offer}</span>}
                  <p className="mt-1 text-lg font-bold text-primary">₹{p.price}</p>
                </div>
                <Button size="sm" onClick={() => addToCart(p)}>Add</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Local Stores */}
        <TabsContent value="stores">
          <h2 className="mb-4 text-lg font-semibold">📍 Nearby Stores</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groceryStores.map(s => (
              <div key={s.id} className="sector-card">
                <h3 className="font-bold">{s.name}</h3>
                <p className="text-sm text-muted-foreground">📍 {s.location}</p>
                <p className="text-sm text-muted-foreground">📞 {s.phone}</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-secondary text-secondary" /><span className="text-sm font-medium">{s.rating}</span></div>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${s.delivery ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {s.delivery ? "🚚 Home Delivery" : "Pickup Only"}
                  </span>
                </div>
                <Button size="sm" className="mt-3" onClick={() => toast.success("Store contact copied!")}>Contact Store</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Subscriptions */}
        <TabsContent value="subscription">
          <h2 className="mb-4 text-lg font-semibold">📅 Daily Needs Subscriptions</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subscriptionPlans.map(s => (
              <div key={s.id} className="sector-card">
                <h3 className="font-bold">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.items}</p>
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-muted px-2 py-1">{s.frequency}</span>
                  <span className="rounded-full bg-primary/10 px-2 py-1 font-bold text-primary">{s.price}</span>
                </div>
                <Button size="sm" className="mt-3" onClick={() => toast.success("Subscription started!")}>Subscribe</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Offers */}
        <TabsContent value="offers">
          <h2 className="mb-4 text-lg font-semibold">🎉 Today's Offers & Discounts</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.filter(p => p.offer).map(p => (
              <div key={p.id} className="sector-card flex items-center gap-4 border-2 border-dashed border-destructive/30">
                <span className="text-4xl">{p.image}</span>
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-bold text-destructive">{p.offer}</span>
                  <h3 className="mt-1 font-bold">{p.name}</h3>
                  <p className="text-lg font-bold text-primary">₹{p.price}</p>
                </div>
                <Button size="sm" onClick={() => addToCart(p)}>Grab</Button>
              </div>
            ))}
            {products.filter(p => p.offer).length === 0 && <p className="py-10 text-center text-muted-foreground">No offers today. Check back soon!</p>}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Grocery;
