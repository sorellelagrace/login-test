export default function Reduce(etat, action){// dans le reduce, cest l'action qui importe car on lie les differentes actions contrairemmet aux usestate qui n'a que une action a exécuter
if(action.type === "CONNEXION"){
    
  const obj={
      email:action.payload.mail,
      password : action.payload.password//payload recupere l'object qui a été crée
    }


    console.log(window, obj)
  // recuperer les infos de l'utilisateur grace a la function localstorage
  const JsonEncoder = JSON.stringify(obj)//traformer le json en chaine de caractère

  if(localStorage.getItem('appStorage') === null){//recuperer les elements qui se trouve dans appstorage
    localStorage.setItem('appStorage', JsonEncoder)//transforme les elements
  } else {
    localStorage.setItem('appStorage', JsonEncoder)
  }
 
    return "CONNEXION"
}
if(action.type === "DECONNEXION"){
  return "DECONNEXION"
}

}