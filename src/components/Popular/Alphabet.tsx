import { useMemo } from "react";
import { Link } from "react-router-dom";
import { kirilAlphabet, latinAlphabet } from "../../helpers/constants/alphabet";
import { WORDS_PAGE } from "../../helpers/constants/route";
import { translit } from "../../helpers/convertor/convertor";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { setSearchLetter } from "../../redux/search/slice";

const Alphabet = () => {
	const dispatch = useAppDispatch();
	const { y } = useAppSelector((state) => state.scroll);
	const lang = useAppSelector((state) => state.admin.lang);
	const alphabet = useMemo(() => (lang ? latinAlphabet : kirilAlphabet), [lang]);
	const onClickLink = (str: string) => {
		window.scrollTo(0, y);
		dispatch(setSearchLetter(str));
	};
	return (
		<div className="alphabet">
			<ul className="alphabet__list">
				{alphabet.map((item, i) => {
					return (
						<li className="alphabet__item" key={i}>
							<Link onClick={() => onClickLink(item)} to={WORDS_PAGE}>
								{item}
								{item.toLowerCase()}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Alphabet;
