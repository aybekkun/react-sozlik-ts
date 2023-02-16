import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ABOUT_PAGE, MAIN_PAGE, WORDS_PAGE } from "../helpers/constants/route";
import Main from "../layouts/Main";
import About from "../pages/About";
import Home from "../pages/Home";
import Words from "../pages/Words";
import WordsInfo from "../pages/Words/WordsInfo";

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
       
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
