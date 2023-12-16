import styles from "./header.module.scss";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Link from "./link";
import { publicRuntimeConfig } from "../utils/config";
import { NAME } from "../utils/constants";

const Header = () => {
  const scrollPosition = useScrollPosition();
  const visible = !scrollPosition || scrollPosition.y === 0;

  return (
    <header
      className={[styles.header, ...(visible ? [styles.visible] : [])].join(
        " "
      )}
    >
      <h1 className={styles.logo}>
        <Link href="/">
          <img
            src={
              publicRuntimeConfig.basePath + "/images/Logo - EELV Douaisis.svg"
            }
            alt={NAME}
          />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
