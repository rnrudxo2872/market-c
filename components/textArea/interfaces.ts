import { UseFormRegisterReturn } from "react-hook-form";

export interface ITextAreaProps {
  id: string;
  register: UseFormRegisterReturn;
  rows?: number;
}
