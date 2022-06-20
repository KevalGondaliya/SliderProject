import { Fragment } from "react";
import { Button } from "@mui/material";

import SliderIcon from "../SliderIcon/index";
import GlassIcon from "../../assest/icons/glasses.svg";
import GlassIcon1 from "../../assest/icons/glasses-1.svg";
import GlassIcon2 from "../../assest/icons/glasses-2.svg";

import styles from "./index.module.css";

export default function Slider() {
  return (
    <Fragment>
      <div className={styles.sliderSec}>
        <div className={styles.sliderMain}>
          <SliderIcon image={GlassIcon} />
          <SliderIcon image={GlassIcon1} />
          <SliderIcon image={GlassIcon2} />
          <SliderIcon image={GlassIcon} />
          <SliderIcon image={GlassIcon1} />
        </div>
        <Button mt={1} variant="contained">
          Go
        </Button>
      </div>
    </Fragment>
  );
}
