import SearchBar from "./SearchBar";
import style from "../style/style.module.css"
export default function Nav(props){
   return( <header className={style.header}>
        <div className={style.header_tittle}>
            <h1>Rick and Morty</h1>
            <h3>Sebastian Lopez</h3>
        </div>
        <SearchBar
          onSearch={props.onSearch} />
      </header>
);} 