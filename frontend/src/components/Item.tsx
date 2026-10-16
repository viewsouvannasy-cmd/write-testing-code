interface ItemProps {
  item: {
    name: string;
    price: string;
    rating: string;
  };
}

export function Item({ item }: ItemProps) {
  return (
    <div className="shadow-olive-500 flex justify-between flex-col gap-2 shadow p-3">
      <p className="text-2xl font-semibold">{item.name}</p>
      <div className="w-full flex items-center justify-between">
        <span>Price: {item.price}$</span>
        <span>{item.rating}</span>
      </div>
    </div>
  );
}
