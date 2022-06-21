import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

export default function SliderItem({ image, active, handleOnClick }) {
  return (
    <button
      className={`${styles.svgMain} ${active ? styles.activeIndex : ""}`}
      variant="contained"
      onClick={handleOnClick}
    >
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
