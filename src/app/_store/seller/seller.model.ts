export interface Seller {
  seller_uid: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_image: string;
  address: string;
  industry: string;
  is_paiduser: string;
  subscription_level: string;
  // equipment: Equipment;
  naics: string;
  cage_code: string;
  guarantee: string;
  certifications_standards: string;
  capability: string;
  availability: string;

}

export const INITIAL_SELLER: Seller = {
  seller_uid: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  profile_image: '',
  address: '',
  industry: '',
  is_paiduser: '',
  subscription_level: '',
// equipment: Equipment;
  naics: '',
  cage_code: '',
  guarantee: '',
  certifications_standards: '',
  capability: '',
  availability: '',
}


