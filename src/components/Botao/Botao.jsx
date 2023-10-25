import "./Botao.css"

export default function Botao(props){
    return(
        <div className="paiBotao">
            <button onClick={props.onClick} className="botao">
                {props.label}
            </button>
        </div>
    )
}