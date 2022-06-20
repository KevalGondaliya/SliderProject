import { Button } from "@mui/material";
import SliderItem from "../SliderItem/index";
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
      <Button className={styles.goBtn} mt={1} variant="contained">
        Go
      </Button>
    </div>
  );
}
