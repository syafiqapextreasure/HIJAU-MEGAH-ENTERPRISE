export type PageRoute = 
  | 'utama' 
  | 'tentang' 
  | 'servis' 
  | 'landskap' 
  | 'portfolio' 
  | 'homestay';

export type ServiceCategory = 
  | 'konsep'
  | 'bumbung' 
  | 'besi' 
  | 'cat' 
  | 'jalan' 
  | 'dapur' 
  | 'longkang';

export interface ServiceItem {
  id: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  ctaMessage: string;
}

export interface PortfolioItem {
  id: string;
  code: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  caption: string;
  imageSrc: string;
  webpSrc: string;
  status: 'Sedang Berjalan' | 'Siap' | 'Visual Konsep';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HomestayBookingForm {
  name: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  notes: string;
}
