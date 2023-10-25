import Cliente from "@/core/Cliente"
import "./Tabela.css"

export default function Tabela(props){
    const listaClientes = props.Clientes
    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido
    function renderizarCabecalho(){
        return( <tr>
            <th>NOME</th>
            <th>IDADE</th>
            <th>ID</th>
            {exibirAcoes?(<th className="acoes">AÇÕES</th>):false}
            </tr>
        )
    }
    
    function renderizarBotoes(cliente){
        return (
            <td className="botoes">
                {props.clienteSelecionado?(<button onClick={() => props.clienteSelecionado?.(cliente)} className="editar">Edit</button>):false}
                {props.clienteExcluido?(<button onClick={() => props.clienteExcluido?.(cliente)} className="apagar">Del</button>):false}
                
            </td>)
    }

    function renderizarClientes(){
        return (props.Clientes?.map((cliente,i) =>{
                return (<tr className={`${(i%2 === 0? 'bg-purple-200':'bg-purple-100')}`} key={cliente.id}>
                    <th>{cliente.name}</th>
                    <th>{cliente.age}</th>
                    <th>{cliente.id}</th>
                    {exibirAcoes?renderizarBotoes(cliente):false}
                    </tr>)
            })
        )
    }

    return(
        <table className="tabela">
            <thead>{renderizarCabecalho()}</thead>
            <tbody>{renderizarClientes()}</tbody>
            
        </table>
    )
}