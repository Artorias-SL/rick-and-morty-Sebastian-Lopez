import search from "../style/searchbar.module.css"
export default function SearchBar(props) {
   return (
      <div className={search.bar}>
         <input type='search'
         name="search"
         id="search"
         placeholder="Ingrese usuario"/>
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
