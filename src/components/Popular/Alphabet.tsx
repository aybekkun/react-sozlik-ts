
import { Link } from "react-router-dom";
import { WORDS_PAGE } from "../../helpers/constants/route";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { setSearchLetter } from "../../redux/search/slice";
const alphabet = [
  "A",
  "Á",
  "B",
  "C",
  "Ch",
  "D",
  "E",
  "F",
  "G",
  "Ǵ",
  "H",
  "I",
  "Í",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ń",
  "O",
  "Ó",
  "P",
  "Q",
  "R",
  "S",
  "Sh",
  "T",
  "U",
  "Ú",
  "V",
  "W",
  "X",
  "R",
  "Y",
  "Z",
  "#",
];
const Alphabet = () => {
  const dispatch = useAppDispatch();
  const { y } = useAppSelector((state) => state.scroll);

  const onClickLink = (str: string) => {
    window.scrollTo(0, y);
    dispatch(setSearchLetter(str));
  };

  return (
    <div className="alphabet">
      <ul className="alphabet__list">
        {alphabet.map((item, i) => (
          <li className="alphabet__item" key={i}>
            <Link onClick={()=>onClickLink(item)} to={WORDS_PAGE}>
              {item}
              {item.toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alphabet;
