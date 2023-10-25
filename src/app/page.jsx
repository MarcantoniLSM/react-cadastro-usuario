"use client"
import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Botao from "@/components/Botao/Botao"
import Formulario from "@/components/Formulario/Formulario"
import Layout from "@/components/Layout/Layout"
import Tabela from "@/components/Tabela/Tabela"
import Cliente from "@/core/Cliente"
import { useEffect, useState } from "react"

export default function Home() {

  const repo = new ColecaoCliente()
  const [visivel, setVisivel] = useState('tabela')
  const [clientes,setClientes] = useState([])
  const [cliente,setCliente] = useState(Cliente.vazio())

  useEffect(obterTodos,[])

  function obterTodos(){
    repo.obterTodos().then(clientes =>{
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente){
    setCliente(cliente)
    setVisivel('formulario')
  }

  async function clienteExcluido(cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  function cancelado(){
    obterTodos()
  }

  async function salvo(cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('formulario')
  }

  return (
    <div>
      <Layout Title = "Cadastro Usuário">
        {visivel === 'tabela'?(
          <>
            <Botao onClick ={novoCliente} className="mb-4" label = "Novo Cliente"></Botao>
            <Tabela clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} Clientes={clientes}></Tabela>  
          </>)
            :(<Formulario cancelado = {cancelado} salvo = {salvo} cliente = {cliente}/>)}
        
        
      </Layout>
  
    </div>
  )  
}
