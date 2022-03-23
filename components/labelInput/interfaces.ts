import { TInput } from "@components/types";
import { UseFormRegisterReturn } from "react-hook-form";

export interface IInputWithLabelProps {
  type: TInput;
  id: string;
  register: UseFormRegisterReturn;
  labelText: string;
}
