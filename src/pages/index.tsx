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
        <Card produto={"Mouse"} valor={49.90} desconto={10}/>
        <Card produto={"Teclado"} valor={69.90} desconto={20}/>
        <Card produto={"Monitor"} valor={349.90} desconto={30}/>
        <Card produto={"CPU"} valor={756.90} desconto={40}/>
       
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
