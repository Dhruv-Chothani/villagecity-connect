import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { 
  GraduationCap, 
  School, 
  BookOpen, 
  Monitor, 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock,
  Users,
  Award,
  Building,
  Info,
  Search,
  ShoppingCart,
  LogIn
} from "lucide-react";

// Navigation levels
type NavigationLevel = "main" | "schools-colleges" | "stationery" | "skill-courses" | "digital-learning" | "admissions-info" | "nearby-institutions";

// Dummy data
const admissionsData = [
  {
    id: 1,
    school: "Green Valley Public School",
    grade: "1-12",
    deadline: "2024-03-15",
    process: "Online application + Entrance test",
    fees: "₹25,000/year",
    status: "open",
    description: "Quality education with modern facilities"
  },
  {
    id: 2,
    school: "City International College",
    grade: "11-12 + Commerce",
    deadline: "2024-03-20",
    process: "Direct admission based on merit",
    fees: "₹45,000/year",
    status: "open",
    description: "Excellence in commerce and science streams"
  },
  {
    id: 3,
    school: "Rural Development Academy",
    grade: "9-12",
    deadline: "2024-02-28",
    process: "Scholarship test + Interview",
    fees: "₹15,000/year",
    status: "closing",
    description: "Empowering rural students with quality education"
  }
];

const institutionsData = [
  {
    id: 1,
    name: "Green Valley Public School",
    type: "CBSE School",
    location: "Main Road, Village Center",
    distance: "0.5 km",
    rating: 4.5,
    students: 1200,
    grades: "1-12",
    facilities: ["Science Labs", "Sports Ground", "Library", "Computer Lab"],
    contact: "+91 98765 43210",
    email: "admission@greenvalley.edu"
  },
  {
    id: 2,
    name: "City International College",
    type: "Higher Secondary",
    location: "High Street, City Center",
    distance: "2.3 km",
    rating: 4.8,
    students: 800,
    grades: "11-12",
    facilities: ["Advanced Labs", "Library", "Auditorium", "Sports Complex"],
    contact: "+91 98765 43211",
    email: "info@citycollege.edu"
  },
  {
    id: 3,
    name: "Rural Development Academy",
    type: "Government School",
    location: "Village Outskirts",
    distance: "3.1 km",
    rating: 4.2,
    students: 600,
    grades: "9-12",
    facilities: ["Basic Labs", "Library", "Playground"],
    contact: "+91 98765 43212",
    email: "ruralacademy@gov.edu"
  }
];

const stationeryData = [
  { id: 1, name: "Notebooks Set", price: "₹120", category: "Stationery", stock: 50, image: "📒" },
  { id: 2, name: "Pen Set", price: "₹45", category: "Stationery", stock: 100, image: "🖊️" },
  { id: 3, name: "School Bag", price: "₹350", category: "Accessories", stock: 25, image: "🎒" },
  { id: 4, name: "Geometry Box", price: "₹85", category: "Stationery", stock: 75, image: "📐" }
];

const coursesData = [
  {
    id: 1,
    name: "Computer Basics",
    provider: "Digital Learning Center",
    duration: "3 months",
    price: "₹2,000",
    level: "Beginner",
    students: 45,
    rating: 4.6,
    description: "Learn fundamental computer skills"
  },
  {
    id: 2,
    name: "English Speaking",
    provider: "Language Academy",
    duration: "6 weeks",
    price: "₹1,500",
    level: "Intermediate",
    students: 32,
    rating: 4.8,
    description: "Improve your English communication skills"
  }
];

const digitalLearningData = [
  {
    id: 1,
    title: "Mathematics Grade 10",
    type: "Video Course",
    duration: "40 hours",
    price: "₹1,200",
    instructor: "Dr. Sharma",
    rating: 4.7,
    students: 234
  },
  {
    id: 2,
    title: "Science Interactive",
    type: "E-learning Platform",
    duration: "Self-paced",
    price: "Free",
    instructor: "Multiple",
    rating: 4.5,
    students: 567
  }
];

const Education = () => {
  const [currentLevel, setCurrentLevel] = useState<NavigationLevel>("main");
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, user } = useAuth();

  // Check if user is authenticated for cart/purchase actions
  const requireAuth = (action: string, itemName: string) => {
    if (!isAuthenticated) {
      toast.error("Login Required", {
        description: `Please login to ${action} ${itemName}`,
        duration: 5000,
        action: {
          label: "Login",
          onClick: () => {
            window.location.href = "/login";
          },
        },
      });
      return false;
    }
    return true;
  };

  // Navigation handlers
  const navigateTo = (level: NavigationLevel) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentLevel(level);
      setLoading(false);
    }, 300);
  };

  const goBack = () => {
    setLoading(true);
    setTimeout(() => {
      switch (currentLevel) {
        case "schools-colleges":
        case "stationery":
        case "skill-courses":
        case "digital-learning":
          setCurrentLevel("main");
          break;
        case "admissions-info":
        case "nearby-institutions":
          setCurrentLevel("schools-colleges");
          break;
        default:
          setCurrentLevel("main");
      }
      setLoading(false);
    }, 300);
  };

  // Get breadcrumb navigation
  const getBreadcrumb = () => {
    switch (currentLevel) {
      case "schools-colleges":
        return ["Education", "Schools & Colleges"];
      case "stationery":
        return ["Education", "Stationery"];
      case "skill-courses":
        return ["Education", "Skill Courses"];
      case "digital-learning":
        return ["Education", "Digital Learning"];
      case "admissions-info":
        return ["Education", "Schools & Colleges", "Admissions Info"];
      case "nearby-institutions":
        return ["Education", "Schools & Colleges", "Nearby Institutions"];
      default:
        return ["Education"];
    }
  };

  // Main level component
  const MainLevel = () => (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Education Sector</h1>
        <p className="text-lg text-muted-foreground mb-8">Choose your educational needs</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card 
          className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-sector-education/20"
          onClick={() => navigateTo("schools-colleges")}
        >
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sector-education text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                <School className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Schools & Colleges</h3>
                <p className="text-muted-foreground">Educational institutions</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Find schools, colleges, admissions info, and nearby institutions
            </p>
            <div className="flex items-center gap-2 text-sector-education font-medium">
              <span>Explore</span>
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </div>
          </CardContent>
        </Card>

        <Card 
          className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-sector-education/20"
          onClick={() => navigateTo("stationery")}
        >
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sector-education text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                <BookOpen className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Stationery</h3>
                <p className="text-muted-foreground">Educational supplies</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Notebooks, pens, school bags, and all stationery items
            </p>
            <div className="flex items-center gap-2 text-sector-education font-medium">
              <span>Explore</span>
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </div>
          </CardContent>
        </Card>

        <Card 
          className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-sector-education/20"
          onClick={() => navigateTo("skill-courses")}
        >
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sector-education text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Skill Courses</h3>
                <p className="text-muted-foreground">Professional training</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Computer skills, language courses, and professional development
            </p>
            <div className="flex items-center gap-2 text-sector-education font-medium">
              <span>Explore</span>
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </div>
          </CardContent>
        </Card>

        <Card 
          className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-sector-education/20"
          onClick={() => navigateTo("digital-learning")}
        >
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sector-education text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                <Monitor className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Digital Learning</h3>
                <p className="text-muted-foreground">Online education</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              E-books, online courses, and digital learning resources
            </p>
            <div className="flex items-center gap-2 text-sector-education font-medium">
              <span>Explore</span>
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Schools & Colleges level component
  const SchoolsCollegesLevel = () => (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Schools & Colleges</h2>
        <p className="text-muted-foreground mb-6">Choose what you're looking for</p>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card 
            className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => navigateTo("admissions-info")}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-education/10 text-sector-education">
                  <Info className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Admissions Info</h3>
                  <p className="text-sm text-muted-foreground">Current admission details and deadlines</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => navigateTo("nearby-institutions")}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sector-education/10 text-sector-education">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Nearby Institutions</h3>
                  <p className="text-sm text-muted-foreground">Find schools and colleges near you</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  // Admissions Info component
  const AdmissionsInfoComponent = () => (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Admissions Information</h2>
        <p className="text-muted-foreground">Current admission opportunities and deadlines</p>
        {!isAuthenticated && (
          <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center gap-2 text-amber-800">
              <LogIn className="h-5 w-5" />
              <span className="font-medium">Login required to submit applications</span>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4">
        {admissionsData.map((item) => (
          <Card key={item.id} className="transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{item.school}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <Badge variant={item.status === "open" ? "default" : "secondary"}>
                  {item.status === "open" ? "Admissions Open" : "Closing Soon"}
                </Badge>
              </div>

              <div className="grid gap-3 md:grid-cols-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>Grades: {item.grade}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Deadline: {item.deadline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span>{item.fees}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Info className="h-4 w-4 text-muted-foreground" />
                  <span>{item.process}</span>
                </div>
              </div>

              <Button 
                className="w-full"
                onClick={() => {
                  if (requireAuth("apply to", item.school)) {
                    toast.success(`Application started for ${item.school}`);
                  }
                }}
                disabled={!isAuthenticated}
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                {isAuthenticated ? "Apply Now" : "Login to Apply"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // Nearby Institutions component
  const NearbyInstitutionsComponent = () => (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Nearby Institutions</h2>
        <p className="text-muted-foreground">Educational institutions in your area</p>
        {!isAuthenticated && (
          <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center gap-2 text-amber-800">
              <LogIn className="h-5 w-5" />
              <span className="font-medium">Login required to contact institutions</span>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4">
        {institutionsData.map((item) => (
          <Card key={item.id} className="transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.type}</p>
                </div>
                <Badge variant="outline">⭐ {item.rating}</Badge>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{item.location} ({item.distance})</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{item.students} students • Grades {item.grades}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{item.contact}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{item.email}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Facilities:</p>
                <div className="flex flex-wrap gap-1">
                  {item.facilities.map((facility, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {facility}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  className="flex-1"
                  onClick={() => {
                    if (requireAuth("contact", item.name)) {
                      toast.success(`Contact request sent to ${item.name}`);
                    }
                  }}
                  disabled={!isAuthenticated}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {isAuthenticated ? "Contact" : "Login to Contact"}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => toast.success(`Directions to ${item.name}`)}
                >
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // Stationery component
  const StationeryComponent = () => (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Stationery Items</h2>
        <p className="text-muted-foreground">Educational supplies and accessories</p>
        {!isAuthenticated && (
          <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center gap-2 text-amber-800">
              <LogIn className="h-5 w-5" />
              <span className="font-medium">Login required to purchase items</span>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stationeryData.map((item) => (
          <Card key={item.id} className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">{item.image}</div>
              <h3 className="font-bold mb-2">{item.name}</h3>
              <Badge variant="secondary" className="mb-2">{item.category}</Badge>
              <p className="text-2xl font-bold text-sector-education mb-2">{item.price}</p>
              <p className="text-sm text-muted-foreground mb-4">Stock: {item.stock}</p>
              <Button 
                className="w-full"
                onClick={() => {
                  if (requireAuth("add to cart", item.name)) {
                    toast.success(`${item.name} added to cart!`);
                  }
                }}
                disabled={!isAuthenticated}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {isAuthenticated ? "Add to Cart" : "Login to Buy"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // Skill Courses component
  const SkillCoursesComponent = () => (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Skill Courses</h2>
        <p className="text-muted-foreground">Professional development and skill training</p>
        {!isAuthenticated && (
          <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center gap-2 text-amber-800">
              <LogIn className="h-5 w-5" />
              <span className="font-medium">Login required to enroll in courses</span>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {coursesData.map((course) => (
          <Card key={course.id} className="transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{course.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
              
              <div className="grid gap-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Provider:</span>
                  <span className="font-medium">{course.provider}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Level:</span>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Students:</span>
                  <span className="font-medium">{course.students}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rating:</span>
                  <span className="font-medium">⭐ {course.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span className="font-bold text-sector-education">{course.price}</span>
                </div>
              </div>

              <Button 
                className="w-full"
                onClick={() => {
                  if (requireAuth("enroll in", course.name)) {
                    toast.success(`Enrolled in ${course.name}!`);
                  }
                }}
                disabled={!isAuthenticated}
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                {isAuthenticated ? "Enroll Now" : "Login to Enroll"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // Digital Learning component
  const DigitalLearningComponent = () => (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Digital Learning</h2>
        <p className="text-muted-foreground">Online courses and e-learning resources</p>
        {!isAuthenticated && (
          <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center gap-2 text-amber-800">
              <LogIn className="h-5 w-5" />
              <span className="font-medium">Login required to access courses</span>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {digitalLearningData.map((item) => (
          <Card key={item.id} className="transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <Badge variant="outline" className="mb-4">{item.type}</Badge>
              
              <div className="grid gap-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Instructor:</span>
                  <span className="font-medium">{item.instructor}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">{item.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Students:</span>
                  <span className="font-medium">{item.students}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rating:</span>
                  <span className="font-medium">⭐ {item.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span className={`font-bold ${item.price === "Free" ? "text-green-600" : "text-sector-education"}`}>
                    {item.price}
                  </span>
                </div>
              </div>

              <Button 
                className="w-full"
                onClick={() => {
                  if (requireAuth("start", item.title)) {
                    toast.success(`Started ${item.title}!`);
                  }
                }}
                disabled={!isAuthenticated}
              >
                <Monitor className="h-4 w-4 mr-2" />
                {isAuthenticated ? "Start Learning" : "Login to Access"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // Render current level
  const renderCurrentLevel = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sector-education"></div>
        </div>
      );
    }

    switch (currentLevel) {
      case "main":
        return <MainLevel />;
      case "schools-colleges":
        return <SchoolsCollegesLevel />;
      case "admissions-info":
        return <AdmissionsInfoComponent />;
      case "nearby-institutions":
        return <NearbyInstitutionsComponent />;
      case "stationery":
        return <StationeryComponent />;
      case "skill-courses":
        return <SkillCoursesComponent />;
      case "digital-learning":
        return <DigitalLearningComponent />;
      default:
        return <MainLevel />;
    }
  };

  return (
    <div className="container py-8">
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          {getBreadcrumb().map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ArrowLeft className="h-3 w-3" />}
              <span className={index === getBreadcrumb().length - 1 ? "text-foreground font-medium" : ""}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Back Button */}
        {currentLevel !== "main" && (
          <Button 
            variant="outline" 
            onClick={goBack}
            className="mb-4"
            disabled={loading}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        )}
      </div>

      {/* Current Level Content */}
      {renderCurrentLevel()}
    </div>
  );
};

export default Education;
