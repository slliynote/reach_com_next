
interface cardprops{
    produto: string,
    valor: number,
    desconto: number
}


export default function Card(props:cardprops) {
    return (
<div>
     <div> Produto:{props.produto}</div>
     <div> valor:{props.valor}</div>
     <div> Desconto:{props.valor - props.desconto}</div>
     <div> Preço Venda:{props.produto}</div>
     <div> valor:{props.valor}</div>
     <div> Desconto:{props.valor - props.desconto}</div>
</div>
    )
};