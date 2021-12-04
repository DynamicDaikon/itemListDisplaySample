export class Item {
  id: number;
  price: number;
  name: string;
  img_path: string;

  constructor(
    id: number,
    price: number,
    name: string,
    img_path: string) {
      this.id = id;
      this.price = price;
      this.name = name;
      this.img_path = img_path;
  }
}
