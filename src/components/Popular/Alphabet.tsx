import { Link } from "react-router-dom";
import { WORDS_PAGE } from "../../helpers/constants/route";
import { translit } from "../../helpers/convertor/convertor";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { setSearchLetter } from "../../redux/search/slice";
const alphabet = [
	"А",
	"Ә",
	"Б",
	"В",
	"Г",
	"Ғ",
	"Д",
	"Е",
	"Ё",
	"Ж",
	"З",
	"И",
	"Й",
	"К",
	"Қ",
	"Л",
	"М",
	"Н",
	"Ң",
	"О",
	"Ө",
	"П",
	"Р",
	"С",
	"Т",
	"У",
	"Ү",
	"Ў",
	"Ф",
	"Х",
	"Ҳ",
	"Ц",
	"Ч",
	"Ш",
	"Щ",
	"Ы",
	"Э",
	"Ю",
	"Я",
];
const Alphabet = () => {
	const dispatch = useAppDispatch();
	const { y } = useAppSelector((state) => state.scroll);
	const lang = useAppSelector((state) => state.admin.lang);
	const onClickLink = (str: string) => {
		window.scrollTo(0, y);
		dispatch(setSearchLetter(str));
	};
	return (
		<div className="alphabet">
			<ul className="alphabet__list">
				{alphabet.map((item, i) => {
					if (lang && item === "Я") {
						return null;
					}
					if (lang && item === "Щ") {
						return null;
					}
					if (lang && item === "Ё") {
						return null;
					}
					if (lang && item === "Ю") {
						return null;
					}
					return (
						<li className="alphabet__item" key={i}>
							<Link onClick={() => onClickLink(item)} to={WORDS_PAGE}>
								{lang ? translit(item) : item}
								{lang ? translit(item).toLowerCase() : item.toLowerCase()}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Alphabet;
