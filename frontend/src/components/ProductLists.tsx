import { products } from "../data/products";
import { Item } from "./Item";

export function ProductLists() {
  return (
    <div className="p-4 gap-4 flex flex-col w-full">
      <h1 className="text-3xl font-semibold">Components test</h1>
      <div className="grid grid-cols-5 gap-3">
        {products.map((item) => {
          return <Item item={item} />;
        })}
      </div>
    </div>
  );
}
