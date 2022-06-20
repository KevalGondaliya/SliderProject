import Image from "next/image";

import styles from "./index.module.css";

export default function SliderIcon({ image }) {
  return (
    <div className={styles.svgMain}>
      <Image src={image} className={styles.logo} alt="logo" />
    </div>
  );
}
