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
  jobs as defaultJobs,
  services as defaultServices,
  trainingPrograms as defaultTraining,
  farmingTips as defaultFarmingTips,
  cropPrices as defaultCropPrices,
  fertilizers as defaultFertilizers,
  machinery as defaultMachinery,
  schools as defaultSchools,
  stationery as defaultStationery,
  courses as defaultCourses,
  ebooks as defaultEbooks,
  awarenessPrograms as defaultAwareness,
} from "@/lib/realisticData";
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

// Performance-optimized localStorage helpers
function loadLS<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveLS(key: string, data: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn(`Failed to save ${key} to localStorage:`, error);
  }
}

// Optimized localStorage hook with debouncing
function useLSState<T>(key: string, fallback: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [state, setState] = useState<T>(() => loadLS(key, fallback));
  
  const setOptimizedState = useCallback((value: T | ((prev: T) => T)) => {
    setState(prevState => {
      const newValue = typeof value === 'function' ? (value as (prev: T) => T)(prevState) : value;
      saveLS(key, newValue);
      return newValue;
    });
  }, [key]);
  
  return [state, setOptimizedState];
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

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Grocery
  const [groceryProducts, setGroceryProducts] = useLSState<GroceryItem[]>("groceryProducts", defaultProducts);
  const [groceryStores, setGroceryStores] = useLSState<GroceryStore[]>("groceryStores", defaultStores);
  const [subscriptionPlans, setSubscriptionPlans] = useLSState<SubscriptionPlan[]>("subscriptionPlans", defaultSubscriptions);

  // Education
  const [schools, setSchools] = useLSState<School[]>("schools", defaultSchools);
  const [stationery, setStationery] = useLSState<Stationery[]>("stationery", defaultStationery);
  const [eduCourses, setEduCourses] = useLSState<EduCourse[]>("eduCourses", defaultCourses);
  const [ebooks, setEbooks] = useLSState<Ebook[]>("ebooks", defaultEbooks);

  // Health
  const [doctors, setDoctors] = useLSState<Doctor[]>("doctors", defaultDoctors);
  const [hospitals, setHospitals] = useLSState<Hospital[]>("hospitals", defaultHospitals);
  const [medicines, setMedicines] = useLSState<Medicine[]>("medicines", defaultMedicines);
  const [healthTips, setHealthTips] = useLSState<HealthTip[]>("healthTips", defaultHealthTips);

  // Business
  const [businesses, setBusinesses] = useLSState<Business[]>("businesses", defaultBusinesses);
  const [businessEvents, setBusinessEvents] = useLSState<BusinessEvent[]>("businessEvents", defaultEvents);
  const [fundingSchemes, setFundingSchemes] = useLSState<FundingScheme[]>("fundingSchemes", defaultFunding);

  // Electronics
  const [electronics, setElectronics] = useLSState<ElectronicsItem[]>("electronics", defaultElectronics);
  const [repairServices, setRepairServices] = useLSState<RepairService[]>("repairServices", defaultRepairServices);

  // Agriculture
  const [farmingTips, setFarmingTips] = useLSState<FarmingTip[]>("farmingTips", defaultFarmingTips);
  const [cropPrices, setCropPrices] = useLSState<CropPrice[]>("cropPrices", defaultCropPrices);
  const [fertilizers, setFertilizers] = useLSState<Fertilizer[]>("fertilizers", defaultFertilizers);
  const [machinery, setMachinery] = useLSState<Machinery[]>("machinery", defaultMachinery);

  // Services
  const [serviceWorkers, setServiceWorkers] = useLSState<ServiceWorker[]>("serviceWorkers", defaultServices);

  // Training
  const [trainingPrograms, setTrainingPrograms] = useLSState<TrainingProgram[]>("trainingPrograms", defaultTraining);

  // Employment
  const [jobs, setJobs] = useLSState<EmploymentOpportunity[]>("jobs", defaultJobs);
  const [awarenessPrograms, setAwarenessPrograms] = useLSState<AwarenessProgram[]>("awarenessPrograms", defaultAwareness);

  // User Submissions
  const [submissions, setSubmissions] = useLSState<UserSubmission[]>("submissions", []);

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
