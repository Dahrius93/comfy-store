import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";
export const loader = async ({ request }) => {
  const response = await customFetch(url);

  const products = response.data.data;
  const meta = response.data.meta; // dentro meta troviamo il numero totale di prodotti
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
