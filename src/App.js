import React, {useReducer} from 'react'
import Inscription from './components/Inscription'
import Reduce from './reduce/Reducer'
import './style.css';
import Context from './context/Context'

  
 function  App(){
  // dispath qui est ne mm fonction que setinit ie modifie l'initialisation
  const [etat, dispatch] = useReducer(Reduce, '')// recuper les valeur

  // const [appState, setAppState]=useState(Context)// rendre les variables globales à l'aplication

  return(//context Provider envoie l'infos qui sera soit utiliser dans l'app ou alors modifier. c'est un objet qui s'appliquerar a la cle value
    
    <Context.Provider 
    value={{
      etat,
      dispatch
    }}
    >
      <div className='bodyform'>
        <Inscription/>
      </div> 
    </Context.Provider>
  );
  

  
 }
 export default App
