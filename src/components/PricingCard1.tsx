import { FunctionComponent } from "react";
import styles from "./PricingCard1.module.css";

export type PricingCard1Type = {
  className?: string;
};

const PricingCard1: FunctionComponent<PricingCard1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.pricingCard01, className].join(" ")}>
      <h2 className={styles.title}>
        <p className={styles.saveMore}>Save More</p>
        <p className={styles.withGoodplans}>
          <b>With Goodplans.</b>
        </p>
      </h2>
      <p className={styles.chooseAPlan}>
        Choose a plan and get onboard in minutes. Then get $100 credits for your
        next payment.
      </p>
      <div className={styles.pexelsGodisableJacob871495Parent}>
        <img
          className={styles.pexelsGodisableJacob871495Icon}
          alt=""
          src="/pexelsgodisablejacob871495removebgpreview-1@2x.png"
        />
        <img
          className={styles.arrowRightLine1Icon}
          loading="lazy"
          alt=""
          src="/arrowrightline-1.svg"
        />
      </div>
    </div>
  );
};

export default PricingCard1;
