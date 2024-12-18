export interface Package {
  code: string;
  name: string;
  isFlexible: boolean;
  tags: string[];
  shortDescription: string[];
  longDescription: string[];
  location: string[];
  inclusions: string[];
  exclusions: string[];
  days: number;
  travelDates: string[];
  price: number;
  salePrice: number;
}
