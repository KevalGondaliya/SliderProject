import Image from "next/image";
import { Fragment } from "react";
import { Typography } from "@mui/material";

import logoImg from "../../assest/logo.png";

import styles from "./index.module.css";

export default function Header() {
  return (
    <Fragment>
      <div className={styles.headerMain}>
        <Image src={logoImg} className={styles.logo} alt="logo" />
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
