
import styles from "./Planet.module.scss";
import mars from "../../assets/images/mars.png";

const Planet = () => {

    return (
  <div className={styles.planet}>
    <img src={mars} alt=""/>
  </div>
    );
};

export default Planet;