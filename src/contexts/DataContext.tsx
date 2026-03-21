import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import {
  products as defaultProducts,
  groceryStores as defaultStores,
  subscriptionPlans as defaultSubscriptions,
  doctors as defaultDoctors,
  hospitals as defaultHospitals,
  medicines as defaultMedicines,
  healthTips as defaultHealthTips,
  businesses as defaultBusinesses,
  businessEvents as defaultEvents,
  fundingSchemes as defaultFunding,
  electronics as defaultElectronics,
  repairServices as defaultRepairServices,
  farmingTips as defaultFarmingTips,
  cropPrices as defaultCropPrices,
  fertilizers as defaultFertilizers,
  machinery as defaultMachinery,
  services as defaultServices,
  trainingPrograms as defaultTraining,
  jobs as defaultJobs,
  awarenessPrograms as defaultAwareness,
  schools as defaultSchools,
  stationery as defaultStationery,
  courses as defaultCourses,
  ebooks as defaultEbooks,
} from "@/lib/dummyData";
import {
  GroceryItem,
  GroceryStore,
  SubscriptionPlan,
  School,
  Stationery,
  EduCourse,
  Ebook,
  Doctor,
  Hospital,
  Medicine,
  HealthTip,
  Business,
  BusinessEvent,
  FundingScheme,
  ElectronicsItem,
  RepairService,
  FarmingTip,
  CropPrice,
  Fertilizer,
  Machinery,
  ServiceWorker,
  TrainingProgram,
  EmploymentOpportunity,
  AwarenessProgram,
} from "@/types";

// ---- Submission types ----
export interface UserSubmission {
  id: string;
  type: "order" | "booking" | "enquiry" | "application" | "registration";
  sector: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  details: Record<string, unknown>;
  status: "pending" | "confirmed" | "rejected" | "completed";
  createdAt: string;
}

// Helper to read localStorage with fallback
function loadLS<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveLS(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ---- Context type ----
interface DataContextType {
  // Grocery
  groceryProducts: GroceryItem[];
  setGroceryProducts: (items: GroceryItem[]) => void;
  groceryStores: GroceryStore[];
  setGroceryStores: (items: GroceryStore[]) => void;
  subscriptionPlans: SubscriptionPlan[];
  setSubscriptionPlans: (items: SubscriptionPlan[]) => void;

  // Education
  schools: School[];
  setSchools: (items: School[]) => void;
  stationery: Stationery[];
  setStationery: (items: Stationery[]) => void;
  eduCourses: EduCourse[];
  setEduCourses: (items: EduCourse[]) => void;
  ebooks: Ebook[];
  setEbooks: (items: Ebook[]) => void;

  // Health
  doctors: Doctor[];
  setDoctors: (items: Doctor[]) => void;
  hospitals: Hospital[];
  setHospitals: (items: Hospital[]) => void;
  medicines: Medicine[];
  setMedicines: (items: Medicine[]) => void;
  healthTips: HealthTip[];
  setHealthTips: (items: HealthTip[]) => void;

  // Business
  businesses: Business[];
  setBusinesses: (items: Business[]) => void;
  businessEvents: BusinessEvent[];
  setBusinessEvents: (items: BusinessEvent[]) => void;
  fundingSchemes: FundingScheme[];
  setFundingSchemes: (items: FundingScheme[]) => void;

  // Electronics
  electronics: ElectronicsItem[];
  setElectronics: (items: ElectronicsItem[]) => void;
  repairServices: RepairService[];
  setRepairServices: (items: RepairService[]) => void;

  // Agriculture
  farmingTips: FarmingTip[];
  setFarmingTips: (items: FarmingTip[]) => void;
  cropPrices: CropPrice[];
  setCropPrices: (items: CropPrice[]) => void;
  fertilizers: Fertilizer[];
  setFertilizers: (items: Fertilizer[]) => void;
  machinery: Machinery[];
  setMachinery: (items: Machinery[]) => void;

  // Services
  serviceWorkers: ServiceWorker[];
  setServiceWorkers: (items: ServiceWorker[]) => void;

  // Training
  trainingPrograms: TrainingProgram[];
  setTrainingPrograms: (items: TrainingProgram[]) => void;

  // Employment
  jobs: EmploymentOpportunity[];
  setJobs: (items: EmploymentOpportunity[]) => void;
  awarenessPrograms: AwarenessProgram[];
  setAwarenessPrograms: (items: AwarenessProgram[]) => void;

  // User Submissions
  submissions: UserSubmission[];
  addSubmission: (sub: Omit<UserSubmission, "id" | "createdAt" | "status">) => void;
  updateSubmissionStatus: (id: string, status: UserSubmission["status"]) => void;
  deleteSubmission: (id: string) => void;
}

const DataContext = createContext<DataContextType | null>(null);

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used within DataProvider");
  return ctx;
};

// Generic localStorage-synced state
function useLSState<T>(key: string, fallback: T): [T, (v: T) => void] {
  const [state, setState] = useState<T>(() => loadLS(key, fallback));

  const setAndSave = useCallback((val: T) => {
    setState(val);
    saveLS(key, val);
  }, [key]);

  return [state, setAndSave];
}

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Grocery
  const [groceryProducts, setGroceryProducts] = useLSState("vcda_grocery", defaultProducts);
  const [groceryStores, setGroceryStores] = useLSState("vcda_grocery_stores", defaultStores);
  const [subscriptionPlans, setSubscriptionPlans] = useLSState("vcda_subscriptions", defaultSubscriptions);

  // Education
  const [schools, setSchools] = useLSState("vcda_schools", defaultSchools);
  const [stationery, setStationery] = useLSState("vcda_stationery", defaultStationery);
  const [eduCourses, setEduCourses] = useLSState("vcda_courses", defaultCourses);
  const [ebooks, setEbooks] = useLSState("vcda_ebooks", defaultEbooks);

  // Health
  const [doctors, setDoctors] = useLSState("vcda_doctors", defaultDoctors);
  const [hospitals, setHospitals] = useLSState("vcda_hospitals", defaultHospitals);
  const [medicines, setMedicines] = useLSState("vcda_medicines", defaultMedicines);
  const [healthTips, setHealthTips] = useLSState("vcda_healthtips", defaultHealthTips);

  // Business
  const [businesses, setBusinesses] = useLSState("vcda_businesses", defaultBusinesses);
  const [businessEvents, setBusinessEvents] = useLSState("vcda_events", defaultEvents);
  const [fundingSchemes, setFundingSchemes] = useLSState("vcda_funding", defaultFunding);

  // Electronics
  const [electronics, setElectronics] = useLSState("vcda_electronics", defaultElectronics);
  const [repairServices, setRepairServices] = useLSState("vcda_repair", defaultRepairServices);

  // Agriculture
  const [farmingTips, setFarmingTips] = useLSState("vcda_farmingtips", defaultFarmingTips);
  const [cropPrices, setCropPrices] = useLSState("vcda_cropprices", defaultCropPrices);
  const [fertilizers, setFertilizers] = useLSState("vcda_fertilizers", defaultFertilizers);
  const [machinery, setMachinery] = useLSState("vcda_machinery", defaultMachinery);

  // Services
  const [serviceWorkers, setServiceWorkers] = useLSState("vcda_services", defaultServices);

  // Training
  const [trainingPrograms, setTrainingPrograms] = useLSState("vcda_training", defaultTraining);

  // Employment
  const [jobs, setJobs] = useLSState("vcda_jobs", defaultJobs);
  const [awarenessPrograms, setAwarenessPrograms] = useLSState("vcda_awareness", defaultAwareness);

  // User Submissions
  const [submissions, setSubmissions] = useLSState<UserSubmission[]>("vcda_submissions", []);

  const addSubmission = useCallback((sub: Omit<UserSubmission, "id" | "createdAt" | "status">) => {
    const newSub: UserSubmission = {
      ...sub,
      id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setSubmissions([newSub, ...submissions]);
  }, [submissions, setSubmissions]);

  const updateSubmissionStatus = useCallback((id: string, status: UserSubmission["status"]) => {
    setSubmissions(submissions.map(s => s.id === id ? { ...s, status } : s));
  }, [submissions, setSubmissions]);

  const deleteSubmission = useCallback((id: string) => {
    setSubmissions(submissions.filter(s => s.id !== id));
  }, [submissions, setSubmissions]);

  return (
    <DataContext.Provider value={{
      groceryProducts, setGroceryProducts,
      groceryStores, setGroceryStores,
      subscriptionPlans, setSubscriptionPlans,
      schools, setSchools,
      stationery, setStationery,
      eduCourses, setEduCourses,
      ebooks, setEbooks,
      doctors, setDoctors,
      hospitals, setHospitals,
      medicines, setMedicines,
      healthTips, setHealthTips,
      businesses, setBusinesses,
      businessEvents, setBusinessEvents,
      fundingSchemes, setFundingSchemes,
      electronics, setElectronics,
      repairServices, setRepairServices,
      farmingTips, setFarmingTips,
      cropPrices, setCropPrices,
      fertilizers, setFertilizers,
      machinery, setMachinery,
      serviceWorkers, setServiceWorkers,
      trainingPrograms, setTrainingPrograms,
      jobs, setJobs,
      awarenessPrograms, setAwarenessPrograms,
      submissions, addSubmission, updateSubmissionStatus, deleteSubmission,
    }}>
      {children}
    </DataContext.Provider>
  );
};
