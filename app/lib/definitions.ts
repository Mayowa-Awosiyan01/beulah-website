export type FoodItem = {
  id: string;
  name: string;
  altName: string;
  price: number;
  image_url: string;
  stock: number;
  category: string; //in the future might change to an enum with the options being the categories ie Frozen, canned, snack etc
};
