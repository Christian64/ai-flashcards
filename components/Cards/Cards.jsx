import { roboto } from "@/fonts";

export const ResultCard = ({ front, back }) => {
  return (
    <div className={`${roboto.className} flex flex-col gap-2`}>
      <div>
        <h3 className="text-lg font-bold">Front</h3>
        <p>{front}</p>
      </div>
      <div>
        <h3 className="text-lg font-bold">Back</h3>
        <p>{back}</p>
      </div>
    </div>
  );
};

export const Cards = ({ cards }) => {
  return (
    <div className="mt-5 max-w-[500px]">
      {cards.map((card, i) => (
        <>
          <ResultCard key={i} {...card} />
          <div className="divider"></div>
        </>
      ))}
    </div>
  );
};
