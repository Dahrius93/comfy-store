import { Hero } from "../components";

import { customFetch } from "../utils";

const url = "/products?featured=true";

// loader è la funzione richiamata prima di visualizzare il componente
// definito su app.js
// customFetch è axios definito con baseUrl su ../utils
// destrutturo per essere chiaro cosa restituisce questo loader
export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Landing;
