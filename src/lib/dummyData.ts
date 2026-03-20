// ===== EDUCATION =====
export const schools = [
  { id: "s1", name: "Govt. Senior Secondary School", type: "Government", location: "Village A", classes: "1-12", admissionOpen: true },
  { id: "s2", name: "Saraswati Vidya Mandir", type: "Private", location: "Town Center", classes: "1-10", admissionOpen: true },
  { id: "s3", name: "Rural College of Science", type: "College", location: "Block HQ", classes: "B.Sc, B.A", admissionOpen: false },
  { id: "s4", name: "District Polytechnic", type: "College", location: "Town Center", classes: "Diploma", admissionOpen: true },
];

export const stationery = [
  { id: "st1", name: "NCERT Textbook Set (Class 10)", category: "Books", price: 450, image: "📚" },
  { id: "st2", name: "Classmate Notebook 6-Pack", category: "Notebooks", price: 180, image: "📓" },
  { id: "st3", name: "Geometry Box", category: "School Supplies", price: 120, image: "📐" },
  { id: "st4", name: "School Bag (Waterproof)", category: "School Supplies", price: 650, image: "🎒" },
  { id: "st5", name: "Art & Craft Kit", category: "School Supplies", price: 250, image: "🎨" },
  { id: "st6", name: "English Dictionary", category: "Books", price: 200, image: "📖" },
];

export const courses = [
  { id: "1", name: "Computer Science Basics", institution: "Village Academy", type: "Online", duration: "3 months", fee: "₹2,000" },
  { id: "2", name: "Digital Marketing", institution: "Skill India Center", type: "Online", duration: "2 months", fee: "₹1,500" },
  { id: "3", name: "Tailoring & Design", institution: "Women Empowerment Hub", type: "Offline", duration: "6 months", fee: "₹3,000" },
  { id: "4", name: "English Speaking", institution: "Community Center", type: "Offline", duration: "1 month", fee: "₹500" },
  { id: "5", name: "Web Development Bootcamp", institution: "TechSkill Academy", type: "Online", duration: "4 months", fee: "₹5,000", certified: true },
  { id: "6", name: "Electrician Certification", institution: "ITI Center", type: "Certification", duration: "1 year", fee: "₹8,000", certified: true },
];

export const ebooks = [
  { id: "eb1", name: "Learn Hindi (Beginner)", format: "PDF", pages: 120, free: true },
  { id: "eb2", name: "Mathematics Class 10", format: "PDF", pages: 350, free: true },
  { id: "eb3", name: "Computer Basics Guide", format: "PDF", pages: 80, free: false },
  { id: "eb4", name: "Organic Farming Manual", format: "PDF", pages: 200, free: true },
];

// ===== GROCERY =====
export const products = [
  { id: "1", name: "Basmati Rice 5kg", price: 320, category: "Grains", image: "🍚", offer: "" },
  { id: "2", name: "Wheat Flour 10kg", price: 400, category: "Grains", image: "🌾", offer: "10% OFF" },
  { id: "3", name: "Mustard Oil 1L", price: 180, category: "Grains", image: "🫒", offer: "" },
  { id: "4", name: "Face Cream 100ml", price: 150, category: "Beauty", image: "✨", offer: "" },
  { id: "5", name: "Shampoo 500ml", price: 220, category: "Beauty", image: "🧴", offer: "15% OFF" },
  { id: "6", name: "Milk 1L", price: 60, category: "Dairy", image: "🥛", offer: "" },
  { id: "7", name: "Paneer 200g", price: 80, category: "Dairy", image: "🧀", offer: "" },
  { id: "8", name: "Curd 500g", price: 40, category: "Dairy", image: "🥣", offer: "" },
  { id: "9", name: "Biscuit Family Pack", price: 45, category: "Snacks", image: "🍪", offer: "Buy 2 Get 1" },
  { id: "10", name: "Namkeen 400g", price: 90, category: "Snacks", image: "🥨", offer: "" },
  { id: "11", name: "Sugar 2kg", price: 90, category: "Grains", image: "🍬", offer: "" },
  { id: "12", name: "Fresh Vegetables Pack", price: 150, category: "Grains", image: "🥬", offer: "" },
];

export const groceryStores = [
  { id: "gs1", name: "Sharma Kirana Store", location: "Main Market, Village A", phone: "9876543210", delivery: true, rating: 4.5 },
  { id: "gs2", name: "New India General Store", location: "Block B Market", phone: "9876543211", delivery: true, rating: 4.2 },
  { id: "gs3", name: "Gupta Provisions", location: "Town Center", phone: "9876543212", delivery: false, rating: 4.0 },
];

export const subscriptionPlans = [
  { id: "sub1", name: "Daily Milk (1L)", frequency: "Daily", price: "₹60/day", items: "Milk 1L" },
  { id: "sub2", name: "Weekly Vegetable Basket", frequency: "Weekly", price: "₹250/week", items: "Mixed fresh vegetables" },
  { id: "sub3", name: "Monthly Essentials", frequency: "Monthly", price: "₹1,200/month", items: "Rice, Flour, Oil, Sugar, Dal" },
];

// ===== BUSINESS =====
export const businesses = [
  { id: "1", name: "Sharma General Store", type: "Retail", location: "Main Market, Village A", contact: "9876543210" },
  { id: "2", name: "Green Agro Startup", type: "Startup", location: "Block B", contact: "9876543211" },
  { id: "3", name: "Village Handicrafts", type: "Manufacturing", location: "Craft Lane", contact: "9876543212" },
];

export const businessEvents = [
  { id: "be1", name: "Startup Mela 2026", date: "2026-04-15", location: "District HQ", type: "Networking", description: "Connect with investors and mentors" },
  { id: "be2", name: "Women Entrepreneur Workshop", date: "2026-04-25", location: "Community Hall", type: "Workshop", description: "Business planning & funding guidance" },
  { id: "be3", name: "Digital Marketing Bootcamp", date: "2026-05-10", location: "Online", type: "Training", description: "Learn to promote your business online" },
];

export const fundingSchemes = [
  { id: "fs1", name: "PM Mudra Yojana", type: "Loan", amount: "Up to ₹10 Lakh", eligibility: "Small businesses", description: "Micro loans for unfunded businesses" },
  { id: "fs2", name: "Startup India Seed Fund", type: "Grant", amount: "Up to ₹20 Lakh", eligibility: "Registered startups", description: "Seed funding for early-stage startups" },
  { id: "fs3", name: "Stand-Up India", type: "Loan", amount: "₹10L - ₹1Cr", eligibility: "SC/ST/Women", description: "Bank loans for greenfield enterprises" },
];

// ===== HEALTH =====
export const doctors = [
  { id: "1", name: "Dr. Priya Sharma", specialty: "General Physician", hospital: "Community Health Center", fee: "₹200", available: true, consultType: "Both" },
  { id: "2", name: "Dr. Rajesh Kumar", specialty: "Dentist", hospital: "District Hospital", fee: "₹300", available: true, consultType: "Clinic" },
  { id: "3", name: "Dr. Anita Verma", specialty: "Gynecologist", hospital: "Women's Clinic", fee: "₹400", available: false, consultType: "Online" },
  { id: "4", name: "Dr. Suresh Patel", specialty: "Orthopedic", hospital: "Bone & Joint Clinic", fee: "₹500", available: true, consultType: "Both" },
];

export const hospitals = [
  { id: "h1", name: "Community Health Center", type: "Government", location: "Village A", emergency: true, beds: 50, phone: "108" },
  { id: "h2", name: "District Hospital", type: "Government", location: "Town Center", emergency: true, beds: 200, phone: "108" },
  { id: "h3", name: "LifeCare Clinic", type: "Private", location: "Block B", emergency: false, beds: 20, phone: "9876543230" },
];

export const medicines = [
  { id: "m1", name: "Paracetamol 500mg", category: "Pain Relief", price: 30, prescription: false, image: "💊" },
  { id: "m2", name: "Cough Syrup 100ml", category: "Cold & Flu", price: 85, prescription: false, image: "🍯" },
  { id: "m3", name: "ORS Sachets (10 pack)", category: "Hydration", price: 50, prescription: false, image: "💧" },
  { id: "m4", name: "Blood Pressure Tablets", category: "Heart", price: 150, prescription: true, image: "❤️" },
  { id: "m5", name: "Vitamin D Capsules", category: "Supplements", price: 200, prescription: false, image: "☀️" },
];

export const healthTips = [
  { id: "ht1", title: "Stay Hydrated in Summer", content: "Drink 8-10 glasses of water daily. Add ORS if working outdoors.", type: "Tip" },
  { id: "ht2", title: "Free Health Camp - April 2026", content: "Free checkup camp at Community Hall on April 20. Blood test, BP, sugar included.", type: "Campaign" },
  { id: "ht3", title: "Vaccination Drive for Children", content: "Polio & measles vaccination at all PHCs from March 25-30.", type: "Campaign" },
];

// ===== ELECTRONICS =====
export const electronics = [
  { id: "1", name: 'LED TV 32"', price: 12000, category: "Mobiles", brand: "Samsung", image: "📺" },
  { id: "2", name: "Smartphone 4G", price: 8500, category: "Mobiles", brand: "Realme", image: "📱" },
  { id: "3", name: "Ceiling Fan", price: 1800, category: "Home Appliances", brand: "Havells", image: "🌀" },
  { id: "4", name: "Mixer Grinder", price: 2500, category: "Home Appliances", brand: "Prestige", image: "🔌" },
  { id: "5", name: "Air Cooler", price: 6500, category: "Home Appliances", brand: "Bajaj", image: "❄️" },
  { id: "6", name: "Earbuds TWS", price: 1200, category: "Accessories", brand: "boAt", image: "🎧" },
  { id: "7", name: "Power Bank 10000mAh", price: 900, category: "Accessories", brand: "Mi", image: "🔋" },
];

export const repairServices = [
  { id: "r1", type: "Mobile Repair", description: "Screen, battery, software issues", price: "₹200-₹2,000", icon: "📱" },
  { id: "r2", type: "TV Repair", description: "LED, LCD, Smart TV repairs", price: "₹300-₹3,000", icon: "📺" },
  { id: "r3", type: "Appliance Repair", description: "AC, Cooler, Fridge, Washing Machine", price: "₹500-₹5,000", icon: "🔧" },
];

// ===== AGRICULTURE =====
export const farmingTips = [
  { id: "1", title: "Best Practices for Wheat Sowing", content: "Prepare land properly, use certified seeds, and sow in November for best yield.", date: "2026-01-15", season: "Rabi" },
  { id: "2", title: "Organic Pest Control", content: "Use neem oil spray and companion planting to reduce pest damage naturally.", date: "2026-02-10", season: "All" },
  { id: "3", title: "Water Management in Summer", content: "Drip irrigation saves 40% water. Mulching helps retain soil moisture.", date: "2026-03-05", season: "Summer" },
  { id: "4", title: "Paddy Transplanting Tips", content: "Transplant 25-day old seedlings. Maintain 2-3cm water level in fields.", date: "2026-06-01", season: "Kharif" },
];

export const cropPrices = [
  { crop: "Wheat", price: "₹2,275/quintal", trend: "up" },
  { crop: "Rice", price: "₹2,183/quintal", trend: "stable" },
  { crop: "Sugarcane", price: "₹315/quintal", trend: "up" },
  { crop: "Cotton", price: "₹6,620/quintal", trend: "down" },
  { crop: "Soybean", price: "₹4,600/quintal", trend: "up" },
];

export const fertilizers = [
  { id: "f1", name: "DAP (50kg)", type: "Chemical", price: "₹1,350", usage: "Base fertilizer for all crops" },
  { id: "f2", name: "Urea (45kg)", type: "Chemical", price: "₹267", usage: "Nitrogen top dressing" },
  { id: "f3", name: "Vermicompost (25kg)", type: "Organic", price: "₹300", usage: "Soil enrichment" },
  { id: "f4", name: "Hybrid Wheat Seeds", type: "Seeds", price: "₹120/kg", usage: "High-yield wheat variety" },
  { id: "f5", name: "Paddy Seeds (IR-64)", type: "Seeds", price: "₹80/kg", usage: "Medium-duration rice variety" },
];

export const machinery = [
  { id: "ma1", name: "Tractor (Mahindra 575)", type: "Purchase", price: "₹6,50,000", available: true },
  { id: "ma2", name: "Rotavator", type: "Rental", price: "₹800/hour", available: true },
  { id: "ma3", name: "Seed Drill Machine", type: "Rental", price: "₹500/hour", available: true },
  { id: "ma4", name: "Harvester", type: "Rental", price: "₹1,500/hour", available: false },
  { id: "ma5", name: "Sprayer Pump", type: "Purchase", price: "₹3,500", available: true },
];

// ===== SERVICES =====
export const services = [
  { id: "1", name: "Ramesh Kumar", trade: "Electrician", experience: "10 years", rate: "₹500/day", rating: 4.5, available: true },
  { id: "2", name: "Sunil Yadav", trade: "Plumber", experience: "8 years", rate: "₹450/day", rating: 4.2, available: true },
  { id: "3", name: "Mohan Lal", trade: "Carpenter", experience: "15 years", rate: "₹600/day", rating: 4.8, available: true },
  { id: "4", name: "Vijay Singh", trade: "House Painter", experience: "6 years", rate: "₹400/day", rating: 4.0, available: false },
  { id: "5", name: "Raju Mistri", trade: "Daily Wage Labour", experience: "12 years", rate: "₹350/day", rating: 4.1, available: true },
  { id: "6", name: "Sonu Electrician", trade: "Electrician", experience: "5 years", rate: "₹400/day", rating: 4.3, available: true },
];

// ===== TRAINING =====
export const trainingPrograms = [
  { id: "1", name: "VCDA Mahila Shiksha Mission", type: "Women Development", duration: "3 months", description: "Comprehensive literacy & skill program for women" },
  { id: "2", name: "Women Entrepreneurship Program", type: "Women Development", duration: "2 months", description: "Business skills & micro-finance training for women" },
  { id: "3", name: "Welding & Fitting", type: "Technical", duration: "6 months", description: "Industrial skill training with placement" },
  { id: "4", name: "Computer Hardware Repair", type: "Technical", duration: "3 months", description: "Learn PC assembly, repair & networking" },
  { id: "5", name: "Beauty & Wellness", type: "Vocational", duration: "4 months", description: "Professional beauty training with certification" },
  { id: "6", name: "Accounting & Tally", type: "Job-Oriented", duration: "3 months", description: "GST, Tally Prime & bookkeeping skills" },
  { id: "7", name: "Nursing Assistant", type: "Job-Oriented", duration: "1 year", description: "Healthcare support training with hospital internship" },
  { id: "8", name: "Solar Panel Installation", type: "Certification", duration: "2 months", description: "Certified training in solar energy systems" },
];

// ===== EMPLOYMENT =====
export const jobs = [
  { id: "1", title: "Data Entry Operator", company: "District Office", type: "Private", salary: "₹12,000/month", location: "Block HQ" },
  { id: "2", title: "Farm Labour", company: "Green Farms", type: "Daily Wage", salary: "₹500/day", location: "Village A" },
  { id: "3", title: "Teacher (Primary)", company: "Govt. School", type: "Private", salary: "₹18,000/month", location: "Village B" },
  { id: "4", title: "Security Guard", company: "ABC Company", type: "Private", salary: "₹10,000/month", location: "Town Center" },
  { id: "5", title: "Construction Worker", company: "Build Corp", type: "Daily Wage", salary: "₹600/day", location: "Highway Project" },
  { id: "6", title: "Helper at Workshop", company: "Auto Garage", type: "Daily Wage", salary: "₹400/day", location: "Town Center" },
];

export const awarenessPrograms = [
  { id: "ap1", title: "Right to Employment Awareness", date: "2026-04-05", location: "Gram Panchayat Hall", description: "Know your rights under MGNREGA and other schemes" },
  { id: "ap2", title: "Resume Writing Workshop", date: "2026-04-12", location: "Community Center", description: "Free workshop on building professional resumes" },
  { id: "ap3", title: "Skill Assessment Camp", date: "2026-04-20", location: "Block Office", description: "Get your skills assessed and matched with job openings" },
];
