import Card from './Card';
import style from "../style/style.module.css"

export default function Cards(props) {
   const { characters } = props;
   return <div className={style.characters}>{characters.map((character)=> Card(character))}</div>;
}
