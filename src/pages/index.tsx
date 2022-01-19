import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";

const clientes = [
  new Cliente('Ana', 34, '1'),
  new Cliente('Pedro', 45, '2'),
  new Cliente('Jose', 25, '3'),
  new Cliente('Maria', 36, '4'),
  new Cliente('Joao', 18, '5'),
]

export default function Home() {
  const [visivel, setVisivel] = useState<'table' | "form">('table');
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
    setCliente(cliente)
    setVisivel('form')
  };

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  };

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('table')
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
