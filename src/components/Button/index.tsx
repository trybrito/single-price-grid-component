import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="bg-primary-bright-yellow rounded-md shadow-button p-3.5 w-full text-xs"
      type="button"
    >
      {children}
    </button>
  );
}
