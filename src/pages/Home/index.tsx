import Button from "../../components/Button";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.card}>
      <div className={styles["top-card-container"]}>
        <h1>Join our community</h1>
        <div>
          <strong>30-day, hassle-free money back guarantee</strong>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews.&nbsp;
          </p>
          <p>
            Perfect for any developers who are serious about honing their
            skills.
          </p>
        </div>
      </div>

      <div className={styles["bottom-card-container"]}>
        <section className={styles["left-column"]}>
          <h2>Monthly Subscription</h2>
          <div>
            <strong>
              &#36;29
              <span>per month</span>
            </strong>
            <p>Full access for less than &#36;1 a day</p>
          </div>
          <Button>Sign Up</Button>
        </section>
        <section className={styles["right-column"]}>
          <h2>Why Us</h2>
          <p>
            Tutorials by industry experts
            <br />
            Peer &amp; expert code review
            <br />
            Coding exercises
            <br />
            Access to our GitHub repos
            <br />
            Community forum
            <br />
            Flashcard decks
            <br />
            New videos every week
          </p>
        </section>
      </div>
    </main>
  );
}
