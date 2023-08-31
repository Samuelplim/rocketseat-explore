import { CardPlate } from "./CardPlate";

export const ListHorizontal = ({ data }) => {
  const _renderItens = (item) => {
    return <CardPlate item={item} key={item.id} />;
  };

  return (
    <div className="flex overflow-x-auto w-72 space-x-4">
      {data.map(_renderItens)}
    </div>
  );
};
