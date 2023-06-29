import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutComponent from '../features/ui/layout-component';
import Home from '../pages/home';
import Orders from '../pages/orders';
import Products from '../pages/products';
import Customers from '../pages/customers';
import Settings from '../pages/settings';
import Analytics from '../pages/analytics';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutComponent />}>
          <Route index element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
