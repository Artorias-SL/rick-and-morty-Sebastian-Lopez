import style from "../style/style.module.css"
export default function Card(props) {
   return (
      <div className={style.card}>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <img  src={props.image} alt="" />
         <h2>Especie: {props.species}</h2>
         <h2>Genero: {props.gender}</h2>
      </div>
   );
}
