export interface GroceryItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  offer?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  hospital: string;
  fee: string;
  available: boolean;
  consultType: string;
}

export interface Hospital {
  id: string;
  name: string;
  type: string;
  location: string;
  emergency: boolean;
  beds: number;
  phone: string;
}

export interface Medicine {
  id: string;
  name: string;
  category: string;
  price: number;
  prescription: boolean;
  image: string;
}

export interface HealthTip {
  id: string;
  title: string;
  content: string;
  type: string;
}

export interface HealthService {
  id: string;
  name: string;
  type: string;
  description: string;
  phone: string;
  address: string;
  hours: string;
  image?: string;
}

export interface Business {
  id: string;
  name: string;
  type: string;
  location: string;
  contact: string;
}

export interface ElectronicsItem {
  id: string;
  name: string;
  price: number;
  category: string;
  brand: string;
  image: string;
}

export interface EmploymentOpportunity {
  id: string;
  title: string;
  company: string;
  type: string;
  salary: string;
  location: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  phone: string;
  address: string;
  rating?: number;
  image?: string;
}

export interface TrainingProgram {
  id: string;
  name: string;
  type: string;
  duration: string;
  description: string;
}

export interface ServiceWorker {
  id: string;
  name: string;
  trade: string;
  experience: string;
  rate: string;
  rating: number;
  available: boolean;
}

export interface AgriculturalProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  farmer: string;
  phone: string;
  location: string;
  image?: string;
}

export interface CropPrice {
  crop: string;
  price: string;
  trend: string;
}

export interface FarmingTip {
  id: string;
  title: string;
  content: string;
  season: string;
  date: string;
}

export interface Fertilizer {
  id: string;
  name: string;
  type: string;
  usage: string;
  price: string;
}

export interface Machinery {
  id: string;
  name: string;
  type: string;
  price: string;
  available: boolean;
}

export interface BusinessEvent {
  id: string;
  name: string;
  type: string;
  description: string;
  date: string;
  location: string;
}

export interface FundingScheme {
  id: string;
  name: string;
  type: string;
  description: string;
  amount: string;
}

export interface RepairService {
  id: string;
  type: string;
  description: string;
  price: string;
  icon: string;
}

export interface AwarenessProgram {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

export interface GroceryStore {
  id: string;
  name: string;
  location: string;
  phone: string;
  rating: number;
  delivery: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  items: string;
  frequency: string;
  price: string;
}

export interface School {
  id: string;
  name: string;
  type: string;
  location: string;
  classes: string;
  admissionOpen: boolean;
}

export interface Stationery {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export interface EduCourse {
  id: string;
  name: string;
  institution: string;
  type: string;
  duration: string;
  fee: string;
}

export interface Ebook {
  id: string;
  name: string;
  format: string;
  pages: number;
  free: boolean;
}
