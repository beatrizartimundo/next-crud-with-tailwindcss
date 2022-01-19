/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";



export default function Home() {
  const repo: ClienteRepositorio = new ColecaoCliente()

  const [visivel, setVisivel] = useState<'table' | "form">('table');
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos,[])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('table')
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    console.log('selecionado')
    setCliente(cliente)
    setVisivel('form')
  };

  async function clienteExcluido(cliente: Cliente) {
    console.log('excluido')
    await repo.excluir(cliente)
    obterTodos()
  };

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente() {
    console.log(cliente,'novo cliente')
    setCliente(Cliente.vazio());
    setVisivel('form');
  }

  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-purple-500  to-violet-900
      text-white
      `}>
      <Layout title="Cadastro simples">
        {visivel === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button
                cor="green"
                className="mb-4"
                onClick={() => novoCliente()}
              >
                Novo Cliente
              </Button>
            </div>

            <Table
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (

          <Form cliente={cliente}
            canceled={() => setVisivel('table')}
            clientChange={salvarCliente}
          />
        )}
      </Layout>
    </div>

  )
}
