import { FunctionComponent } from "react";
import styles from "./TemplateByFlowbaseco.module.css";

const TemplateByFlowbaseco: FunctionComponent = () => {
  return (
    <div className={styles.templateByFlowbaseco}>
      <div className={styles.priceGrid}>
        <img className={styles.priceGridIcon} alt="" src="/price-grid@2x.png" />
      </div>
      <main className={styles.priceGridParent}>
        <img
          className={styles.priceGridIcon1}
          alt=""
          src="/price-grid1@2x.png"
        />
        <img
          className={styles.priceGridIcon2}
          alt=""
          src="/price-grid-2@2x.png"
        />
        <img
          className={styles.priceGridIcon3}
          alt=""
          src="/price-grid2@2x.png"
        />
        <img
          className={styles.priceGridIcon4}
          alt=""
          src="/price-grid2@2x.png"
        />
        <div className={styles.flowbase}>
          <div className={styles.flowbaseChild} />
          <img
            className={styles.logoFlowbase1}
            loading="lazy"
            alt=""
            src="/logo-flowbase-1@2x.png"
          />
        </div>
      </main>
    </div>
  );
};

export default TemplateByFlowbaseco;
