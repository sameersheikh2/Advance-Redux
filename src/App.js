import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from 'react-redux/es/exports';



function App() {
  const showingCart = useSelector(state=> state.cart.showCart)
  console.log(showingCart)


  return (
      <Layout>
        {!showingCart && <Cart />}
        <Products />
      </Layout>
  );
}

export default App;
