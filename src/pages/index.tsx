//import Image from "next/image";
//import {inter} from "next/font/local";

//const Inter = inter({ subsets: ['latin']})



export function topo(){
  return(
    <main>
      <h1> topo da pagina </h1>
    </main>
  )
};

export default function Home() {
  return (

      <main>
      <div>{topo()}</div>
      <h2>noticias aqui</h2>
      <div>testando o git</div>
      <button>clique na noticia</button>
      <div>{rodapé()}</div>
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
