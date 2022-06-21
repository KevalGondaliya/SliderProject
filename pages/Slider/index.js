import SliderItem from "../SliderItem/index";

import { BootstrapButton } from "../../component/Button";
import { sliderItems } from "../../constant/images.constant";
import styles from "./index.module.css";
import { useState } from "react";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.sliderSec}>
      <div className={styles.sliderMain}>
        {sliderItems?.map((data, index) => (
          <div onClick={() => handleActive(index)} className={styles.itemMain}>
            <SliderItem
              image={data.image}
              index={index}
              active={index === activeIndex}
            />
          </div>
        ))}
      </div>
      <BootstrapButton
        variant="contained"
        style={{ width: 200 }}
        onClick={() => setActiveIndex(null)}
      >
        Go
      </BootstrapButton>
    </div>
  );
}
