import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./pages/ProductList";
import ProductPages from "./pages/ProductPages";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ProductList,
  },
  {
    path: "/product:id",
    name: "Product",
    component: ProductPages,
  },
  {
    path: "/add",
    name: "AddPage",
    component: AddPage,
  },
  {
    path: "/edit:id",
    name: "EditPage",
    component: EditPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
