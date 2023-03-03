import './App.css'
import { useState } from 'react' 
import style from "./style/style.module.css"
import bakcgroumd from "./img/rick-and-morty-wallpaper.jpg"
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
function App () {
  const {characters,setCharacters}=useState([]);
  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 };
 const onSearch= (data)=>{
  setCharacters({...characters,example});
  
 }
  return (
    <div className='App' style={{backgroundImage:`url(${bakcgroumd})`,backgroundAttachment:"fixed"}}>
      <Nav onSearch={onSearch}/>
      <div className={style.card_container}>
        <h3>Personajes</h3>
        <div>
          <Cards characters={characters}/>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default App
