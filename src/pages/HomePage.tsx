import OK_IMAGE from "../assets/ok.svg";

export function HomePage() {
  return (
    <section className="w-full px-8 space-y-6">
      <h2 className="text-4xl font-extrabold tracking-tight">
        Welcome to the ParfümWiki!
      </h2>

      <p className="max-w-4xl text-lg leading-relaxed">
        This Website was created by two software engineers in their 2nd year of apprenticeship :)
      </p>
      <p className="max-w-4xl text-lg leading-relaxed">
        Here you will find perfumes we own, tuff perfumes, those we find disgusting or don't understand the hype of and perfumes that are the best for each season of the year (in our opinion ofc).
      </p>
      <p className="max-w-4xl text-lg leading-relaxed">
        This website was created out of personal interest, as we are both very interested in perfumes.
      </p>
      <img
        src={OK_IMAGE}
        alt="drawing with a OK sign made"
        className="w-48"
      />
    </section>
  );
}
