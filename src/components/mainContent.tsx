import { type ReactNode } from "react";
import styles from "./mainContent.module.scss";

export default function MainContent({ children }: { children: ReactNode }) {
  return <main className={styles.content}>{children}</main>;
}
