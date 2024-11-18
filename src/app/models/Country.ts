import { Package } from "./Package";

export interface Country {
  countryCode: string;
  countryName: string;
  packages: Package[];
  available: boolean;
}
