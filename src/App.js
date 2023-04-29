import { useState, useEffect  } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';



function App() {

   const { pathname }= useLocation();

   const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const EMAIL = 'eduardo@example.com';
  const PASSWORD = 'henry2023';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
  !access && navigate('/');
}, [access]);    


   const [characters , setCharacters] = useState([])
   const onSearch = (id) => {
      if (characters.find((char) => char.id === parseInt(id))) {
      return alert(" Personaje repetido ")   
      }
      
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      
   }
   const random = () => {
      return Math.floor(Math.random() * 826);
  }
  const randomID = ()=>{
   axios(`https://rickandmortyapi.com/api/character/${random()}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } 
   });
   
  }

   const funOnClose = (id) => { 
      setCharacters(characters.filter((element) => element.id !== Number(id)))
   }  
   

   return (
      <div >
          { pathname !== "/" && <Nav onSearch={onSearch} setAccess ={setAccess} randomID={randomID} /> }
         
         <Routes>
            <Route path='/' element={<Form login={login}/> } />
            <Route path='/home' element={<Cards characters={characters} onClose={funOnClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path= '/detail/:id' element={<Detail />}/>
            <Route path='/favorites' element={<Favorites/>}/>
            
         </Routes>
      
         
      </div>
   );
}

export default App;

//