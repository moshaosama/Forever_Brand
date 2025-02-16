export interface inputForm {
  Type: string;
  Label: string;
  Name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
