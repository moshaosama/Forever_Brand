export interface CheckBoxFormProps {
  Name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckBoxComProps {
  Lists: any;
  Type: string;
}

export const CheckBoxCaegories = [
  {
    Name: "Men",
  },
  {
    Name: "Women",
  },
  {
    Name: "Kids",
  },
];

export const CheckBoxType = [
  {
    Name: "Topwear",
  },
  {
    Name: "Bottomwear",
  },
  {
    Name: "Winterwear",
  },
];
