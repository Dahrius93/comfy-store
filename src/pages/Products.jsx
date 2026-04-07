import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";
export const loader = async ({ request }) => {
  // nel codice commentato un metodo per accedere ai parametri uno ad uno ma
  // noi creiamo un oggetto per accedere a tutto.
  // const params = new URL(request.url).searchParams
  // const search = params.get('search')

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta; // dentro meta troviamo il numero totale di prodotti
  return { products, meta, params };
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
