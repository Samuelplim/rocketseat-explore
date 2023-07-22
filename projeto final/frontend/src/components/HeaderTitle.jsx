import Polygon1 from "../assets/Polygon1.svg";

export const HeaderTitle = ({ heightH1 = "text-4xl", heightImg = "" }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <img alt="food explorer" src={Polygon1} className={heightImg} />
      <h1 className={`text-light-100 font-['Roboto'] font-bold ${heightH1}`}>
        food explore
      </h1>
    </div>
  );
};
