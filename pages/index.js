import styles from "../styles/Home.module.css";

import Header from "./Header/index";
import Slider from "./Slider/index";
import Footer from "./Footer/index";

export default function Home() {
  return (
    <div className={styles.mainBackground}>
      <div className={styles.mainHeaderSec}>
        <Header />
      </div>
      <Slider />
      <Footer />
    </div>
  );
}
