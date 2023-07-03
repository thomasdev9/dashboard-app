import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutComponent from '../features/ui/layout-component';
import Home from '../pages/home';
import Orders from '../pages/orders';
import Products from '../pages/products';
import Customers from '../pages/customers';
import AddProduct from '../pages/add-product';
import Settings from '../pages/settings';
import AddCustomer from '../pages/add-customer';
import AddOrder from '../pages/add-order';
import NotFound from '../pages/not-found';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutComponent />}>
          <Route index element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/add-order" element={<AddOrder />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
