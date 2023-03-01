export interface IDefaultProvideProps{
  children: React.ReactNode;
}

export interface IProducts{
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export interface ICartContextProvider{
  renderProducts: () => Promise<void>
  modal: boolean;
  setModal:React.Dispatch<React.SetStateAction<boolean>>;
  products: IProducts[];
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>
  addProduct: IProducts[];
  setAddProduct: React.Dispatch<React.SetStateAction<IProducts[]>>;
  addToCart: (product: IProducts) => void;
  removeItem: (item: IProducts) => void;
  removeAllItem: () => any;
  setAllProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  allProducts: IProducts[];
}