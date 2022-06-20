import Image from "next/image";
import styles from "./index.module.css";

export default function SliderItem({ image }) {
  return (
    <button className={styles.svgMain} variant="contained">
      <Image
        src={image}
        alt="logo"
        width={70}
        height={70}
        // layout="fill"
      />
    </button>
  );
}
