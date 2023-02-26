import { useEffect } from "react";
import useAppDispatch from "./hooks/useAppDispatch.hook";
import { setLang } from "./redux/admin/slice";
import { fetchCategories } from "./redux/search/asyncActions";
import Routing from "./routing/Routing";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(setLang());
  }, []);
  // useEffect(() => {
  //   dispatch(userCheck());
  // }, []);
  return <Routing />;
}

export default App;
