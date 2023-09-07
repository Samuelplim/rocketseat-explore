import { CardPlate } from "./CardPlate";

export const ListHorizontal = ({ data }) => {
  const _renderItens = (item) => {
    return <CardPlate item={item} key={item.id} />;
  };

  return (
    <div className="flex gap-4 overflow-y-auto">{data.map(_renderItens)}</div>
  );
};
