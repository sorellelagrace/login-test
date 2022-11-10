export default function Reduce(etat, action){// dans le reduce, cest l'action qui importe car on lie les differentes actions contrairemmet aux usestate qui n'a que une action a exécuter
if(action.type === "Bonjour"){
    return "Bonjour"
}
if(action.type === "Bonsoir"){
  return "Bonsoir"
}

}