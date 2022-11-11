import React, {useReducer, useState, useEffect} from 'react'
import Inscription from './components/Inscription'
import Accueil from './Accueil'
import Reduce from './reduce/Reducer'
import './style.css';
import Context from './context/Context'

  
 function  App(){
  // dispath qui est ne mm fonction que setinit ie modifie l'initialisation
  const [etat, dispatch] = useReducer(Reduce, 'DECONNEXION')//  deconnexion c'est l'etat initial, deconnexion est la valeur qui modifie  l'etat qui est l'etat
  const[AppState, setAppState]= useState(etat)
     useEffect(()=>{
       setAppState(etat);
     }, [etat]);

  const  Navigation = () =>{
    if (AppState === 'DECONNEXION'){
      return <Inscription/>;
    }
    if (AppState === 'CONNEXION'){
      return <Accueil/>;
  }
}
  


  // const [appState, setAppState]=useState(Context)// rendre les variables globales à l'aplication

  return(//context Provider envoie l'infos qui sera soit utiliser dans l'app ou alors modifier. c'est un objet qui s'appliquerar a la cle value
    
    <Context.Provider 
    value={{
      etat,
      dispatch
    }}
    >
      <div className='bodyform'>
       {Navigation()}
      </div> 
    </Context.Provider>
  );
  

  
 }
 export default App
