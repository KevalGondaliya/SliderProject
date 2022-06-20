import SliderItem from "../SliderItem/index";
import Button from "@mui/material/Button";

import { BootstrapButton } from "../../component/Button";
import { images } from "../../constant/images.constant";
import styles from "./index.module.css";

export default function Slider() {
  return (
    <div className={styles.sliderSec}>
      <div className={styles.sliderMain}>
        <SliderItem image={images.glasses} />
        <SliderItem image={images.glasses1} />
        <SliderItem image={images.glasses2} />
        <SliderItem image={images.glasses} />
        <SliderItem image={images.glasses1} />
        <SliderItem image={images.glasses2} />
        <SliderItem image={images.glasses} />
        <SliderItem image={images.glasses1} />
        <SliderItem image={images.glasses2} />
        <SliderItem image={images.glasses} />
        <SliderItem image={images.glasses1} />
        <SliderItem image={images.glasses2} />
      </div>
      <Button variant="contained" style={{width: 200}}>Go</Button>
    </div>
  );
}
