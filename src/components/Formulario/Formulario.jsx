import "./Formulario.css"
import {useState} from "react"
import Entrada from "../Entrada/Entrada"
import Botao from "../Botao/Botao"
import Cliente from "@/core/Cliente"

export default function Formulario(props){
    const id = props.cliente?.id
    console.log(id)
    const [nome, setNome] = useState(props.cliente?.name ?? '')
    const [idade, setIdade] = useState(props.cliente?.age ?? 0)
    return(
        <div className="formulario">
            {id?(<Entrada texto = "Id" valor = {id}/>):false}
            <Entrada valorMudou = {setNome} texto="Nome" valor={nome} somenteLeitura={false} ></Entrada>
            <Entrada valorMudou = {setIdade} texto="Idade" tipo="number" valor={idade} somenteLeitura={false} />
            <div className="botoes">
                <Botao onClick = {(e) => props.salvo?.(new Cliente(nome,idade,id))} label="Salvar">

                </Botao>
                <Botao onClick = {props.cancelado} label="Cancelar">

                </Botao>
            </div>
        </div>
    )
}