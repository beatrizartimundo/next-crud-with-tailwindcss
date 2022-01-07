import { useState } from "react";
import Botao from "../components/Button";
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

function clienteSelecionado(cliente: Cliente) {
  console.log(cliente.nome)
};

function clienteExcluido(cliente: Cliente) {
  console.log(cliente.nome)
};

function salvarCliente(cliente:Cliente) {
  console.log(cliente)
}


export default function Home() {

  const [visivel, setVisivel] = useState<'table' | "form">('table');
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
              <Botao cor="green" className="mb-4" onClick={() => setVisivel('form')}>Novo Cliente</Botao>
            </div>

            <Table
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Table>
          </>
        ) : (

          <Form cliente={clientes[0]}
            canceled={() => setVisivel('table')}
            clientChange={salvarCliente}
          />
        )}
      </Layout>
    </div>

  )
}
