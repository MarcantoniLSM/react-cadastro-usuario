import "./Entrada.css"

export default function Entrada(props){
    return(
        <div className="entrada">
            <label>{props.texto}</label>
            <input onChange = {e => props.valorMudou?.(e.target.value)} className="nome" type={props.tipo ?? 'text'} value={props.valor} readOnly={props.somenteLeitura}>
            </input>
        </div>
    )
}