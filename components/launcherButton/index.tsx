import { ILaunchButtonProps } from "./interfaces";

export default function LaunchButton({ children }: ILaunchButtonProps) {
  return (
    <button className="fixed bottom-24 right-5 rounded-full bg-amber-500 p-3 shadow-2xl hover:bg-red-500">
      {children}
    </button>
  );
}
