import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("../../fakeDB/products.json");
  const products = await loadedProducts.json();
  //if the cart data is in local database then you have to use async await.

  const storedCart = getShoppingCart();
  const savedCart = [];
  // console.log(storedCart);

  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  //if you need to return multiple thins follow this method:
  return savedCart;
};

export default cartProductsLoader;
