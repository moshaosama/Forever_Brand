export interface productType {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
}
[];

export interface cartType {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subCategory: string;
  sizes: string;
  date: string;
  bestseller: boolean;
}
[];

export interface productItemProps {
  StartSLice: number;
  EndSlice: number;
}
