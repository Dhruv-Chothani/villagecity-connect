// ===== REALISTIC DATA FOR SVCDA ADMIN PANEL =====

// ===== EDUCATION =====
export const schools = [
  { 
    id: "s1", 
    name: "SVCDA Government Senior Secondary School", 
    type: "Government", 
    location: "Village Nandigram, West Bengal", 
    classes: "1-12", 
    admissionOpen: true,
    established: "1995",
    principal: "Dr. Rajesh Kumar Sharma",
    contact: "+91-33-2345-6789",
    students: 850,
    rating: 4.2
  },
  { 
    id: "s2", 
    name: "Saraswati Vidya Mandir", 
    type: "Private", 
    location: "Town Center, Patna", 
    classes: "1-10", 
    admissionOpen: true,
    established: "2002",
    principal: "Mrs. Sunita Devi",
    contact: "+91-612-3456-7890",
    students: 650,
    rating: 4.5
  },
  { 
    id: "s3", 
    name: "Rural College of Science & Technology", 
    type: "College", 
    location: "Block HQ, Ranchi", 
    classes: "B.Sc, B.A, B.Com", 
    admissionOpen: false,
    established: "2010",
    principal: "Prof. Amitabh Singh",
    contact: "+91-651-2345-6789",
    students: 1200,
    rating: 4.0
  },
  { 
    id: "s4", 
    name: "District Polytechnic Institute", 
    type: "College", 
    location: "Town Center, Lucknow", 
    classes: "Diploma in Engineering", 
    admissionOpen: true,
    established: "2008",
    principal: "Dr. P.K. Mishra",
    contact: "+91-522-3456-7890",
    students: 980,
    rating: 4.3
  },
  { 
    id: "s5", 
    name: "SVCDA Primary School", 
    type: "Government", 
    location: "Village Rampur, Uttar Pradesh", 
    classes: "1-5", 
    admissionOpen: true,
    established: "1985",
    principal: "Mrs. Meena Kumari",
    contact: "+91-534-2345-6789",
    students: 320,
    rating: 4.1
  }
];

export const stationery = [
  { id: "st1", name: "NCERT Textbook Set (Class 10)", category: "Books", price: 450, image: "Book", stock: 150 },
  { id: "st2", name: "Classmate Notebook 6-Pack", category: "Notebooks", price: 180, image: "Notebook", stock: 200 },
  { id: "st3", name: "Geometry Box", category: "School Supplies", price: 120, image: "Tools", stock: 85 },
  { id: "st4", name: "School Bag (Waterproof)", category: "School Supplies", price: 650, image: "Bag", stock: 60 },
  { id: "st5", name: "Art & Craft Kit", category: "School Supplies", price: 250, image: "Art", stock: 45 },
  { id: "st6", name: "English Dictionary", category: "Books", price: 200, image: "Dictionary", stock: 100 },
  { id: "st7", name: "Calculator (Scientific)", category: "School Supplies", price: 350, image: "Calculator", stock: 75 },
  { id: "st8", name: "Pen Set (12 Pieces)", category: "School Supplies", price: 120, image: "Pen", stock: 180 }
];

export const courses = [
  { 
    id: "1", 
    name: "Computer Science Basics", 
    institution: "SVCDA Digital Academy", 
    type: "Online", 
    duration: "3 months", 
    fee: "₹2,000", 
    certified: true,
    instructor: "Dr. Ramesh Kumar",
    enrolled: 145,
    rating: 4.6
  },
  { 
    id: "2", 
    name: "Digital Marketing Masterclass", 
    institution: "Skill India Center", 
    type: "Online", 
    duration: "2 months", 
    fee: "₹1,500", 
    certified: true,
    instructor: "Ms. Priya Sharma",
    enrolled: 230,
    rating: 4.8
  },
  { 
    id: "3", 
    name: "Tailoring & Fashion Design", 
    institution: "Women Empowerment Hub", 
    type: "Offline", 
    duration: "6 months", 
    fee: "₹3,000", 
    certified: true,
    instructor: "Mrs. Anita Devi",
    enrolled: 89,
    rating: 4.4
  },
  { 
    id: "4", 
    name: "English Speaking Course", 
    institution: "Community Center", 
    type: "Offline", 
    duration: "1 month", 
    fee: "₹500", 
    certified: false,
    instructor: "Mr. John Smith",
    enrolled: 320,
    rating: 4.2
  },
  { 
    id: "5", 
    name: "Web Development Bootcamp", 
    institution: "TechSkill Academy", 
    type: "Online", 
    duration: "4 months", 
    fee: "₹5,000", 
    certified: true,
    instructor: "Dr. Amit Patel",
    enrolled: 78,
    rating: 4.9
  },
  { 
    id: "6", 
    name: "Electrician Certification", 
    institution: "ITI Center", 
    type: "Certification", 
    duration: "1 year", 
    fee: "₹8,000", 
    certified: true,
    instructor: "Mr. Ram Singh",
    enrolled: 56,
    rating: 4.3
  }
];

export const ebooks = [
  { id: "eb1", name: "Learn Hindi (Beginner)", format: "PDF", pages: 120, free: true, downloads: 1250 },
  { id: "eb2", name: "Mathematics Class 10", format: "PDF", pages: 350, free: true, downloads: 2100 },
  { id: "eb3", name: "Computer Basics Guide", format: "PDF", pages: 80, free: false, price: "₹150", downloads: 890 },
  { id: "eb4", name: "Organic Farming Manual", format: "PDF", pages: 200, free: true, downloads: 1560 },
  { id: "eb5", name: "English Grammar Guide", format: "PDF", pages: 180, free: true, downloads: 1890 },
  { id: "eb6", name: "Digital Marketing Tips", format: "PDF", pages: 95, free: false, price: "₹200", downloads: 450 }
];

// ===== GROCERY =====
export const products = [
  { id: "1", name: "Basmati Rice 5kg", price: 320, category: "Grains", image: "Rice", offer: "", stock: 45, brand: "India Gate" },
  { id: "2", name: "Wheat Flour 10kg", price: 400, category: "Grains", image: "Flour", offer: "10% OFF", stock: 38, brand: "Aashirvaad" },
  { id: "3", name: "Mustard Oil 1L", price: 180, category: "Grains", image: "Oil", offer: "", stock: 62, brand: "Safola" },
  { id: "4", name: "Face Cream 100ml", price: 150, category: "Beauty", image: "Cream", offer: "", stock: 85, brand: "Nivea" },
  { id: "5", name: "Shampoo 500ml", price: 220, category: "Beauty", image: "Shampoo", offer: "15% OFF", stock: 71, brand: "Dove" },
  { id: "6", name: "Milk 1L", price: 60, category: "Dairy", image: "Milk", offer: "", stock: 120, brand: "Amul" },
  { id: "7", name: "Paneer 200g", price: 80, category: "Dairy", image: "Paneer", offer: "", stock: 95, brand: "Amul" },
  { id: "8", name: "Curd 500g", price: 40, category: "Dairy", image: "Curd", offer: "", stock: 108, brand: "Mother Dairy" },
  { id: "9", name: "Biscuit Family Pack", price: 45, category: "Snacks", image: "Biscuit", offer: "Buy 2 Get 1", stock: 156, brand: "Parle-G" },
  { id: "10", name: "Namkeen 400g", price: 90, category: "Snacks", image: "Snack", offer: "", stock: 67, brand: "Haldiram" },
  { id: "11", name: "Sugar 2kg", price: 90, category: "Grains", image: "Sugar", offer: "", stock: 89, brand: "Madhur" },
  { id: "12", name: "Fresh Vegetables Pack", price: 150, category: "Vegetables", image: "Vegetables", offer: "20% OFF", stock: 35, brand: "Local Farm" },
  { id: "13", name: "Tea Powder 250g", price: 120, category: "Beverages", image: "Tea", offer: "", stock: 78, brand: "Tata Tea" },
  { id: "14", name: "Coffee Powder 100g", price: 180, category: "Beverages", image: "Coffee", offer: "", stock: 45, brand: "Nescafé" },
  { id: "15", name: "Salt 1kg", price: 25, category: "Grains", image: "Salt", offer: "", stock: 200, brand: "Tata Salt" },
];

export const groceryStores = [
  { 
    id: "gs1", 
    name: "SVCDA Village Store", 
    location: "Village Center, Nandigram", 
    phone: "+91-33-2345-6789",
    rating: 4.3,
    delivery: true,
    owner: "Mr. Ram Prasad"
  },
  { 
    id: "gs2", 
    name: "Central Grocery Mart", 
    location: "Town Market, Patna", 
    phone: "+91-612-3456-7890",
    rating: 4.5,
    delivery: true,
    owner: "Mr. Amit Kumar"
  },
  { 
    id: "gs3", 
    name: "Rural Supermarket", 
    location: "Block HQ, Ranchi", 
    phone: "+91-651-2345-6789",
    rating: 4.1,
    delivery: false,
    owner: "Mrs. Sunita Devi"
  }
];

export const subscriptionPlans = [
  { 
    id: "sub1", 
    name: "Daily Essentials", 
    items: "Milk 1L, Bread 400g, Eggs 6pcs, Newspaper",
    frequency: "Daily",
    price: "₹1,500"
  },
  { 
    id: "sub2", 
    name: "Weekly Family Pack", 
    items: "Rice 5kg, Flour 5kg, Oil 2L, Vegetables 5kg",
    frequency: "Weekly",
    price: "₹2,800"
  },
  { 
    id: "sub3", 
    name: "Monthly Mega Pack", 
    items: "Complete grocery package for family of 4",
    frequency: "Monthly",
    price: "₹8,500"
  }
];

// ===== HEALTH =====
export const doctors = [
  { 
    id: "d1", 
    name: "Dr. Rajesh Kumar Sharma", 
    specialty: "General Physician", 
    hospital: "SVCDA District Hospital", 
    fee: "₹500", 
    available: true, 
    consultType: "Both",
    experience: "12 years",
    rating: 4.7,
    phone: "+91-33-2345-6789"
  },
  { 
    id: "d2", 
    name: "Dr. Sunita Devi", 
    specialty: "Gynecologist", 
    hospital: "Women Health Center", 
    fee: "₹800", 
    available: true, 
    consultType: "Both",
    experience: "8 years",
    rating: 4.8,
    phone: "+91-612-3456-7890"
  },
  { 
    id: "d3", 
    name: "Dr. Amit Patel", 
    specialty: "Pediatrician", 
    hospital: "Children Hospital", 
    fee: "₹600", 
    available: false, 
    consultType: "Offline",
    experience: "15 years",
    rating: 4.9,
    phone: "+91-651-2345-6789"
  },
  { 
    id: "d4", 
    name: "Dr. Meena Kumari", 
    specialty: "Dentist", 
    hospital: "Dental Care Center", 
    fee: "₹400", 
    available: true, 
    consultType: "Both",
    experience: "6 years",
    rating: 4.5,
    phone: "+91-534-2345-6789"
  }
];

export const hospitals = [
  { 
    id: "h1", 
    name: "SVCDA District Hospital", 
    type: "Government", 
    location: "District HQ, Patna", 
    emergency: true, 
    beds: 250, 
    phone: "+91-612-2345-6789",
    established: "1990"
  },
  { 
    id: "h2", 
    name: "City Medical Center", 
    type: "Private", 
    location: "Town Center, Ranchi", 
    emergency: true, 
    beds: 180, 
    phone: "+91-651-3456-7890",
    established: "2005"
  },
  { 
    id: "h3", 
    name: "Women Health Center", 
    type: "Private", 
    location: "Village Center, Nandigram", 
    emergency: false, 
    beds: 80, 
    phone: "+91-33-4567-8901",
    established: "2012"
  }
];

export const medicines = [
  { id: "m1", name: "Paracetamol 500mg", category: "Fever", price: 45, prescription: false, image: "Medicine", stock: 200 },
  { id: "m2", name: "Amoxicillin 500mg", category: "Antibiotic", price: 120, prescription: true, image: "Medicine", stock: 150 },
  { id: "m3", name: "Cough Syrup 100ml", category: "Cough & Cold", price: 85, prescription: false, image: "Syrup", stock: 180 },
  { id: "m4", name: "Vitamin D3 1000IU", category: "Supplements", price: 150, prescription: false, image: "Vitamin", stock: 120 },
  { id: "m5", name: "Blood Pressure Medicine", category: "BP", price: 200, prescription: true, image: "Medicine", stock: 90 },
  { id: "m6", name: "Diabetes Medicine", category: "Diabetes", price: 250, prescription: true, image: "Medicine", stock: 75 }
];

export const healthTips = [
  { 
    id: "ht1", 
    title: "Stay Hydrated", 
    content: "Drink at least 8 glasses of water daily for better health and wellness.", 
    type: "General Health"
  },
  { 
    id: "ht2", 
    title: "Exercise Regularly", 
    content: "30 minutes of daily exercise can improve your overall health and fitness levels significantly.", 
    type: "Fitness"
  },
  { 
    id: "ht3", 
    title: "Eat Balanced Diet", 
    content: "Include fruits, vegetables, and whole grains in your daily meals for optimal nutrition.", 
    type: "Nutrition"
  },
  { 
    id: "ht4", 
    title: "Mental Health Matters", 
    content: "Practice meditation and mindfulness for better mental health and stress management.", 
    type: "Mental Health"
  }
];

// ===== BUSINESS =====
export const businesses = [
  { 
    id: "b1", 
    name: "Rural Handloom Center", 
    type: "Textiles",
    location: "Village Nandigram", 
    contact: "+91-33-2345-6789"
  },
  { 
    id: "b2", 
    name: "Organic Farm Store", 
    type: "Agriculture",
    location: "Town Center, Patna", 
    contact: "+91-612-3456-7890"
  },
  { 
    id: "b3", 
    name: "Tech Repair Hub", 
    type: "Technology",
    location: "Block HQ, Ranchi", 
    contact: "+91-651-2345-6789"
  }
];

export const businessEvents = [
  {
    id: "be1",
    name: "SVCDA Business Meet 2024",
    type: "Conference",
    description: "Annual business networking and collaboration event for local entrepreneurs",
    date: "2024-02-15",
    location: "SVCDA Community Center, Patna"
  },
  {
    id: "be2",
    name: "Rural Entrepreneurship Workshop",
    type: "Workshop",
    description: "Workshop on starting and growing businesses in rural areas",
    date: "2024-01-20",
    location: "District Hall, Ranchi"
  },
  {
    id: "be3",
    name: "Digital Marketing for Local Businesses",
    type: "Seminar",
    description: "Learn digital marketing strategies to grow your local business",
    date: "2024-01-25",
    location: "Town Center, Nandigram"
  }
];

export const fundingSchemes = [
  {
    id: "fs1",
    name: "Mudra Loan Scheme",
    type: "Government",
    description: "Financial assistance for micro and small enterprises",
    amount: "Up to ₹10 Lakhs"
  },
  {
    id: "fs2",
    name: "Women Entrepreneurship Fund",
    type: "Government",
    description: "Special funding scheme for women entrepreneurs",
    amount: "Up to ₹5 Lakhs"
  },
  {
    id: "fs3",
    name: "Agriculture Startup Grant",
    type: "Government",
    description: "Grant for agriculture-based startups and innovations",
    amount: "Up to ₹20 Lakhs"
  }
];

// ===== ELECTRONICS =====
export const electronics = [
  { 
    id: "e1", 
    name: "Smartphone 4G", 
    category: "Mobile", 
    price: 8500, 
    image: "Phone", 
    brand: "Xiaomi",
    stock: 25,
    warranty: "1 year"
  },
  { 
    id: "e2", 
    name: "LED TV 32 inch", 
    category: "Television", 
    price: 12000, 
    image: "TV", 
    brand: "Samsung",
    stock: 15,
    warranty: "2 years"
  },
  { 
    id: "e3", 
    name: "Laptop Basic", 
    category: "Computer", 
    price: 25000, 
    image: "Laptop", 
    brand: "HP",
    stock: 10,
    warranty: "1 year"
  },
  { 
    id: "e4", 
    name: "Refrigerator 180L", 
    category: "Home Appliance", 
    price: 15000, 
    image: "Refrigerator", 
    brand: "Whirlpool",
    stock: 8,
    warranty: "2 years"
  }
];

export const repairServices = [
  { 
    id: "r1", 
    type: "Mobile Repair", 
    description: "Professional mobile phone repair services for all brands", 
    price: "₹300-₹1000",
    icon: "Phone"
  },
  { 
    id: "r2", 
    type: "TV Repair", 
    description: "Expert television repair and maintenance services", 
    price: "₹500-₹2000",
    icon: "TV"
  },
  { 
    id: "r3", 
    type: "Laptop Repair", 
    description: "Complete laptop repair and upgrade solutions", 
    price: "₹800-₹3000",
    icon: "Laptop"
  }
];

// ===== EMPLOYMENT =====
export const jobs = [
  { 
    id: "j1", 
    title: "Computer Teacher", 
    company: "SVCDA School", 
    location: "Village Nandigram", 
    type: "Full-time", 
    salary: "₹15,000-₹20,000",
    experience: "2+ years",
    posted: "2 days ago"
  },
  { 
    id: "j2", 
    title: "Field Officer", 
    company: "Agriculture Department", 
    location: "District HQ", 
    type: "Full-time", 
    salary: "₹25,000-₹30,000",
    experience: "3+ years",
    posted: "5 days ago"
  },
  { 
    id: "j3", 
    title: "Data Entry Operator", 
    company: "SVCDA Office", 
    location: "Town Center", 
    type: "Part-time", 
    salary: "₹8,000-₹12,000",
    experience: "1+ year",
    posted: "1 week ago"
  }
];

export const awarenessPrograms = [
  { 
    id: "ap1", 
    title: "Digital Literacy Campaign", 
    description: "Learn basic computer skills and internet usage", 
    date: "2024-01-15",
    location: "SVCDA Community Center",
    organizer: "Skill India"
  },
  { 
    id: "ap2", 
    title: "Health Awareness Camp", 
    description: "Free health checkup and awareness program", 
    date: "2024-01-20",
    location: "District Hospital",
    organizer: "Health Department"
  }
];

// ===== SERVICES =====
export const services = [
  { 
    id: "sv1", 
    name: "Ram Lal", 
    trade: "Plumbing", 
    experience: "10 years", 
    rate: "₹300-₹800/day",
    rating: 4.4,
    available: true
  },
  { 
    id: "sv2", 
    name: "Amit Kumar", 
    trade: "Electrical Work", 
    experience: "8 years", 
    rate: "₹400-₹1000/day",
    rating: 4.6,
    available: true
  },
  { 
    id: "sv3", 
    name: "Sunita Devi", 
    trade: "House Cleaning", 
    experience: "5 years", 
    rate: "₹500-₹1500/day",
    rating: 4.7,
    available: false
  },
  { 
    id: "sv4", 
    name: "Mahesh Singh", 
    trade: "Carpentry", 
    experience: "12 years", 
    rate: "₹600-₹1200/day",
    rating: 4.5,
    available: true
  }
];

// ===== TRAINING =====
export const trainingPrograms = [
  { 
    id: "tp1", 
    name: "Digital Marketing Training", 
    type: "Online",
    duration: "3 months", 
    description: "Complete digital marketing course with practical projects",
    fee: "₹5,000"
  },
  { 
    id: "tp2", 
    name: "Tailoring Course", 
    type: "Offline",
    duration: "6 months", 
    description: "Professional tailoring and fashion design course",
    fee: "₹3,000"
  },
  { 
    id: "tp3", 
    name: "Computer Basics", 
    type: "Offline",
    duration: "2 months", 
    description: "Basic computer operations and internet skills",
    fee: "₹2,000"
  },
  { 
    id: "tp4", 
    name: "Spoken English", 
    type: "Online",
    duration: "1 month", 
    description: "Improve English communication skills",
    fee: "₹1,500"
  }
];

// ===== AGRICULTURE =====
export const farmingTips = [
  { 
    id: "ft1", 
    title: "Organic Farming Techniques", 
    content: "Learn sustainable farming methods without chemicals for better yield and environmental protection.", 
    season: "All Season",
    date: "2024-01-10"
  },
  { 
    id: "ft2", 
    title: "Water Conservation", 
    content: "Efficient water management techniques for better crop yield and resource conservation.", 
    season: "Summer",
    date: "2024-01-08"
  },
  { 
    id: "ft3", 
    title: "Soil Health Management", 
    content: "Maintain soil fertility through crop rotation and organic fertilizers for sustainable agriculture.", 
    season: "Monsoon",
    date: "2024-01-05"
  }
];

export const cropPrices = [
  { 
    crop: "Rice", 
    price: "₹2,500/quintal", 
    trend: "↑ 5%"
  },
  { 
    crop: "Wheat", 
    price: "₹2,200/quintal", 
    trend: "↓ 2%"
  },
  { 
    crop: "Pulses", 
    price: "₹4,500/quintal", 
    trend: "↑ 8%"
  }
];

export const fertilizers = [
  { 
    id: "f1", 
    name: "Urea 50kg", 
    type: "Nitrogen", 
    usage: "For all crops during vegetative growth",
    price: "₹300"
  },
  { 
    id: "f2", 
    name: "DAP 50kg", 
    type: "Phosphorus", 
    usage: "For root development and flowering",
    price: "₹1,200"
  },
  { 
    id: "f3", 
    name: "MOP 50kg", 
    type: "Potassium", 
    usage: "For fruit development and disease resistance",
    price: "₹800"
  }
];

export const machinery = [
  { 
    id: "ma1", 
    name: "Tractor Rental", 
    type: "Heavy Machinery", 
    price: "₹1,500/day", 
    available: true,
    owner: "Mr. Ram Singh"
  },
  { 
    id: "ma2", 
    name: "Water Pump", 
    type: "Irrigation", 
    price: "₹500/day", 
    available: true,
    owner: "Mr. Amit Kumar"
  }
];
