import { Link } from "react-router-dom";

export const CardPlate = ({ item }) => {
  return (
    <div>
      <img src={() => require(item.uri)} alt="Foto da comida" />
      <p>{item.title}</p>
      <p>{item.price}</p>
    </div>
  );
};
