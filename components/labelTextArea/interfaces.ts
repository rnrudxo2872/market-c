import { UseFormRegisterReturn } from "react-hook-form";

export interface ITextAreaWithLabelProps {
  id: string;
  register: UseFormRegisterReturn;
  labelText: string;
  rows?: number;
}
