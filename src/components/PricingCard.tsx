import { FunctionComponent } from "react";
import styles from "./PricingCard.module.css";

export type PricingCardType = {
  className?: string;
};

const PricingCard: FunctionComponent<PricingCardType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.pricingCard2, className].join(" ")}>
      <div className={styles.pricingCard2Inner}>
        <div className={styles.iconParent}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
          <h2 className={styles.title}>Day Pass</h2>
        </div>
      </div>
      <div className={styles.pricingCard2Child}>
        <div className={styles.whatYoullGetParent}>
          <a className={styles.whatYoullGet}>What You’ll Get</a>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.bxsCheckCircle21Parent}>
                <img
                  className={styles.bxsCheckCircle21}
                  alt=""
                  src="/bxscheckcircle-2-1.svg"
                />
                <p className={styles.hoursUsageOf}>
                  8 hours usage of our coworking space
                </p>
              </div>
              <div className={styles.bxsCheckCircle21Group}>
                <img
                  className={styles.bxsCheckCircle211}
                  alt=""
                  src="/bxscheckcircle-2-1.svg"
                />
                <div className={styles.accessToAll}>
                  Access to All our rooms
                </div>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.pricing}>
              <b>$20</b>
              <span className={styles.day}>/day</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.primaryButton}>
        <b className={styles.buttonLabel}>Choose</b>
      </div>
    </div>
  );
};

export default PricingCard;
