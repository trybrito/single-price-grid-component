import { ReactNode } from "react";
import styles from "./styles.module.css";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className={styles["btn-primary"]}
      type="button"
      data-content={children}
    >
      {children}
    </button>
  );
}
