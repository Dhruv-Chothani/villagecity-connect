import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Edit, Trash2, Package, Search } from "lucide-react";
import { useData } from "@/contexts/DataContext";
import { GroceryItem } from "@/types";

const AdminGrocery = () => {
  const { groceryProducts, setGroceryProducts } = useData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", category: "", price: "", image: "", offer: "" });

  const categories = ["all", "Grains", "Beauty", "Dairy", "Snacks"];

  const filteredItems = groceryProducts.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setGroceryProducts(groceryProducts.map(item =>
        item.id === editingId
          ? { ...item, name: formData.name, category: formData.category, price: parseFloat(formData.price), image: formData.image || item.image, offer: formData.offer }
          : item
      ));
      toast.success("Grocery item updated successfully");
    } else {
      const newItem = {
        id: Date.now().toString(),
        name: formData.name,
        category: formData.category,
        price: parseFloat(formData.price),
        image: formData.image || "🛒",
        offer: formData.offer,
      };
      setGroceryProducts([...groceryProducts, newItem]);
      toast.success("Grocery item added successfully");
    }
    resetForm();
  };

  const handleEdit = (item: GroceryItem) => {
    setEditingId(item.id);
    setFormData({ name: item.name, category: item.category, price: item.price.toString(), image: item.image, offer: item.offer || "" });
    setShowAddForm(true);
  };

  const handleDelete = (id: string) => {
    setGroceryProducts(groceryProducts.filter(item => item.id !== id));
    toast.success("Grocery item deleted successfully");
  };

  const resetForm = () => {
    setFormData({ name: "", category: "", price: "", image: "", offer: "" });
    setEditingId(null);
    setShowAddForm(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Grocery Management</h1>
        <p className="text-muted-foreground">Manage grocery items, inventory, and pricing</p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search grocery items..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
        </div>
        <div className="flex gap-2">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-3 py-2 border rounded-md bg-background">
            {categories.map(cat => (<option key={cat} value={cat}>{cat === "all" ? "All Categories" : cat}</option>))}
          </select>
          <Button onClick={() => setShowAddForm(true)}><Plus className="h-4 w-4 mr-2" />Add Item</Button>
        </div>
      </div>

      {showAddForm && (
        <Card className="mb-6">
          <CardHeader><CardTitle>{editingId ? "Edit Grocery Item" : "Add New Grocery Item"}</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><Label>Item Name</Label><Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required /></div>
              <div>
                <Label>Category</Label>
                <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full px-3 py-2 border rounded-md bg-background" required>
                  <option value="">Select category</option>
                  {categories.filter(c => c !== "all").map(cat => (<option key={cat} value={cat}>{cat}</option>))}
                </select>
              </div>
              <div><Label>Price (₹)</Label><Input type="number" step="0.01" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required /></div>
              <div><Label>Offer</Label><Input value={formData.offer} onChange={(e) => setFormData({...formData, offer: e.target.value})} placeholder="e.g. 10% OFF" /></div>
              <div><Label>Image (emoji)</Label><Input value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} placeholder="🛒" /></div>
              <div className="md:col-span-2 flex gap-2">
                <Button type="submit">{editingId ? "Update Item" : "Add Item"}</Button>
                <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{item.image}</span>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
              </div>
              {item.offer && <span className="inline-block rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-bold text-destructive mb-2">{item.offer}</span>}
              <p className="text-lg font-bold text-primary mb-3">₹{item.price}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(item)}><Edit className="h-4 w-4" /></Button>
                <Button size="sm" variant="outline" onClick={() => handleDelete(item.id)}><Trash2 className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No grocery items found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default AdminGrocery;
