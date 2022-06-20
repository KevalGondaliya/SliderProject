import { Typography } from "@mui/material";

import styles from "./index.module.css";

export default function Footer() {
  return (
    <div className={styles.footerMain}>
      <Typography className={styles.typo} variant="p">
        footer
      </Typography>
    </div>
  );
}
