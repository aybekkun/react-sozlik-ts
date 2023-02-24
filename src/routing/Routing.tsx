import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ABOUT_PAGE, ADMIN_PAGE, LOGIN_PAGE, MAIN_PAGE, WORDS_PAGE } from "../helpers/constants/route";
import AdminLayout from "../layouts/AdminLayout";
import Login from "../layouts/Login";
import Main from "../layouts/Main";
import About from "../pages/About";
import AdminMain from "../pages/Admin";
import AdminCategory from "../pages/Admin/AdminCategory";
import AdminEditWord from "../pages/Admin/AdminEditWord";
import AdminSingleWord from "../pages/Admin/AdminSingleWord";
import AdminWords from "../pages/Admin/AdminWords";
import Home from "../pages/Home";
import Words from "../pages/Words";
import WordsInfo from "../pages/Words/WordsInfo";
import ProtectedRoute from "./ProtectedRoute";

interface IRoutes {
  path: string;
  element: JSX.Element;
  children?: IRoutes[];
}

const routes: IRoutes[] = [
  {
    path: MAIN_PAGE,
    element: <Home />,
  },
  {
    path: WORDS_PAGE,
    element: <Words />,
    children: [{ path: `${WORDS_PAGE}/:id`, element: <WordsInfo /> }],
  },
  {
    path: ABOUT_PAGE,
    element: <About />,
  },
];
const adminRoutes: IRoutes[] = [
  {
    path: ADMIN_PAGE,
    element: <AdminMain />,
  },
  {
    path: "category",
    element: <AdminCategory />,
  },
  {
    path: "words",
    element: <AdminWords />,
  },
  {
    path: "words/:id",
    element: <AdminEditWord />,
  },
  { path: "adwords", element: <AdminSingleWord /> },
];
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={MAIN_PAGE} element={<Main />}>
            {routes.map((route, i) => (
              <Route key={i} path={route.path} element={route.element}>
                {route.children?.map((child, i) => (
                  <Route key={i} path={child.path} element={child.element} />
                ))}
              </Route>
            ))}
          </Route>
          <Route
            path={ADMIN_PAGE}
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {adminRoutes.map((route, i) => (
              <Route key={i} path={route.path} element={route.element}>
                {route.children?.map((child, i) => (
                  <Route key={i} path={child.path} element={child.element} />
                ))}
              </Route>
            ))}
          </Route>
          <Route path={LOGIN_PAGE} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
