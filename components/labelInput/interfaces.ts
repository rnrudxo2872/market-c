import { UseFormRegisterReturn } from "react-hook-form";

export interface IInputWithLabelProps {
  type: "text" | "phone" | "email";
  id: string;
  register: UseFormRegisterReturn;
  labelText: string;
}
