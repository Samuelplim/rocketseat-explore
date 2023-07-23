import { Link } from "react-router-dom";

export const ListHorizontal = ({ items, title }) => {
  const _renderItens = (items) => {
    return items.map((item) => <Link></Link>);
  };

  return (
    <div style={{ display: "flex", overflowX: "auto" }}>
      <p>{title}</p>
      {_renderItens}
    </div>
  );
};
