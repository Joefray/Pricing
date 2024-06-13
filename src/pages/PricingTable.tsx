import { FunctionComponent } from "react";
import PricingCard1 from "../components/PricingCard1";
import PricingCard from "../components/PricingCard";
import styles from "./PricingTable.module.css";

const PricingTable: FunctionComponent = () => {
  return (
    <div className={styles.pricingTable2}>
      <PricingCard1 />
      <div className={styles.shadowParent}>
        <div className={styles.shadow} />
        <PricingCard />
      </div>
      <div className={styles.shadow1} />
      <div className={styles.shadowGroup}>
        <div className={styles.shadow2} />
        <div className={styles.pricingCard3}>
          <div className={styles.pricingCard3Inner}>
            <div className={styles.frameParent}>
              <div className={styles.iconParent}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <h2 className={styles.title}>Monthly Pass</h2>
              </div>
              <div className={styles.whatYoullGetParent}>
                <a className={styles.whatYoullGet}>What You’ll Get</a>
                <div className={styles.benefits}>
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
                  <div className={styles.benefitItems}>
                    <div className={styles.bxsCheckCircle21Container}>
                      <img
                        className={styles.bxsCheckCircle212}
                        alt=""
                        src="/bxscheckcircle-2-1.svg"
                      />
                      <div className={styles.dedicatedDesk}>Dedicated Desk</div>
                    </div>
                    <div className={styles.frameDiv}>
                      <img
                        className={styles.bxsCheckCircle213}
                        alt=""
                        src="/bxscheckcircle-2-1.svg"
                      />
                      <div className={styles.freeBusinessAddress}>
                        Free Business Address
                      </div>
                    </div>
                    <div className={styles.bxsCheckCircle21Parent1}>
                      <img
                        className={styles.bxsCheckCircle214}
                        alt=""
                        src="/bxscheckcircle-2-1.svg"
                      />
                      <div className={styles.freeLunch1x}>
                        Free Lunch 1x a day
                      </div>
                    </div>
                  </div>
                  <div className={styles.divider} />
                </div>
              </div>
              <div className={styles.pricing}>
                <b>$380</b>
                <span className={styles.month}>/month</span>
              </div>
            </div>
          </div>
          <div className={styles.primaryButton}>
            <b className={styles.buttonLabel}>Choose</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
