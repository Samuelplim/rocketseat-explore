import { Link } from "react-router-dom";
import { CardPlate } from "./CardPlate";

export const ListHorizontal = ({ items }) => {
  const _renderItens = (items) => {
    return items.map((item) => <CardPlate item={item} />);
  };

  return (
    <div style={{ display: "flex", overflowX: "auto" }}>{_renderItens}</div>
  );
};
