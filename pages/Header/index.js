import Image from "next/image";
import { Fragment } from "react";
import { Typography } from "@mui/material";

import { images } from "../../constant/images.constant";

import styles from "./index.module.css";

export default function Header() {
  return (
    <Fragment>
      <div className={styles.headerMain}>
        <Image
          src={images.logo}
          className={styles.logo}
          alt="logo"
          width={200}
          height={200}
        />
        <Typography className={styles.typo} variant="h4">
          Next Slider
        </Typography>
        <Typography className={styles.typo} variant="p">
          Lorem Ipsum is simply dummy text.
        </Typography>
      </div>
    </Fragment>
  );
}
