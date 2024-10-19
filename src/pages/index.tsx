//import Image from "next/image";
//import {inter} from "next/font/local";

//const Inter = inter({ subsets: ['latin']})


import { Topo } from "@/components/Topo"
import Card from "@/components/Card"



export default function Home() {
  return (

      <main>
        <Topo/>
      <h2>noticias aqui</h2>
      <div>testando o git</div>
      <button>clique na noticia</button>
      <div>{rodapé()}</div>
      <div>
        <Card produto={"Mouse"} valor={"R$49.90"}/>
        <Card produto={"Mouse"} valor={"R$49.90"}/>
        <Card produto={"Mouse"} valor={"R$49.90"}/>
       
      </div>
     </main>
  )
};

export function rodapé(){
  return(
    <main>
      <h1> final da pagina</h1>
    </main>
  )
};
