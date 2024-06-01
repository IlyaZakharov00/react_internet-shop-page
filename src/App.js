import logo from "./logo.svg";
import "./App.css";
import { ShopItemFunc } from "./components/shopItem/ShopItemFunc";
import ShopItemClass from "./components/shopItem/ShopItemClass";
import styles from "./components/shopItem/shopItem.module.css";
import { ShopItem } from "./components/shopItem/ShopItem";

function App() {
  let itemForFunc = new ShopItem(
    "Tiger of Sweden",
    "Leonard coat",
    "Minimalistic coat in cotton-blend",
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    "399",
    "£",
    "functional"
  );

  let itemForClass = new ShopItem(
    "Gucci",
    "Gucci Glass",
    "VIP Brand",
    "Gucci TOP",
    "10000",
    "€",
    "classes"
  );

  return (
    <div className={styles["container2"]}>
      <div className={styles["container"]}>
        <div className={styles["background-element"]}></div>
        <div className={styles["highlight-window"]}>
          <div className={styles["highlight-overlay"]}></div>
        </div>
        <div className={styles["window"]}>
          <ShopItemFunc info={itemForFunc} />
        </div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["background-element"]}></div>
        <div
          className={[styles["highlight-window"], styles["black"]].join(" ")}
        >
          <div className={styles["highlight-overlay"]}></div>
        </div>
        <div className={styles["window"]}>
          <ShopItemClass info={itemForClass} />
        </div>
      </div>
    </div>
  );
}

export default App;
