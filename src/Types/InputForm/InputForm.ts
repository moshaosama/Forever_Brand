import React from "react";

export interface inputForm {
  Type: string;
  Label: string;
  Name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
