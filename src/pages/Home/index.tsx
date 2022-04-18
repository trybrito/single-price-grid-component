import Button from "../../components/Button";

export default function Home() {
  return (
    <main className="shadow-card w-140">
      <div className="bg-neutral-white p-8 rounded-t-lg">
        <h1 className="text-primary-cyan font-bold text-main-title mb-2">
          Join our community
        </h1>
        <p className="text-neutral-grayish-blue text-subtitle">
          <strong className="text-primary-bright-yellow text-base leading-10">
            30-day, hassle-free money back guarantee
          </strong>
          <br />
          Gain access to our full library of tutorials along with expert code
          reviews.
          <br />
          Perfect for any developers who are serious about honing their skills.
        </p>
      </div>

      <div className="flex">
        <section className="w-full bg-primary-cyan p-8 rounded-bl-lg">
          <h2 className="mb-3">Monthly Subscription</h2>
          <p className="text-neutral-light-gray text-subtitle mb-5 opacity-80">
            <strong className="flex items-center text-2xl">
              &#36;29
              <span className="text-base text-neutral-white font-normal ml-2 opacity-50">
                per month
              </span>
            </strong>
            Full access for less than &#36;1 a day
          </p>
          <Button>Sign Up</Button>
        </section>
        <section className="w-full bg-primary-light-cyan rounded-br-lg p-8">
          <h2 className="mb-3">Why Us</h2>
          <p className="text-neutral-light-gray text-xs opacity-80">
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

      {/* 

      

      

      

      

      

     

      

       */}
    </main>
  );
}
