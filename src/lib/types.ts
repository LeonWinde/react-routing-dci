export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}
export interface ImageFetchResponse {
  success: boolean;
  total_photos: number;
  message: string;
  offset: number;
  limit: number;
  photos: Photo[];
}

export interface Photo {
  url: string;
  title: string;
  user: number;
  id: number;
  description: string;
}