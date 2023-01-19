import Bennar from "../Componets/Bennar";
import Services from "../Componets/Services"
import Choose from "../Componets/Choose"
import Testimonial from "../Componets/Testimonial/Testimonial"

import styles from "../style";
import History from "./History";
import Contact from "./Contact";

const Home = () => {
  return (

    <div className="bg-white min-h-screen w-full">

      <div
        className={` ${styles.paddingY} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth} `}>
          <Bennar />
        </div>
      </div>

      <div
        className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth} `}>
          <Services />
        </div>
      </div>

      <div
        className={` ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth} `}>
          <Choose />
        </div>
      </div>

      <div
        className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth} `}>
          <Testimonial />
        </div>
      </div>

      
      <div
        className={`${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth} `}>
          <History />
        </div>
      </div>
      <div
        className={`${styles.flexStart} ${styles.paddingX} ${styles.paddingY}`}
      >
        <div className={`${styles.boxWidth} `}>
          <Contact />
        </div>
      </div>

    </div>
  );
};

export default Home;
