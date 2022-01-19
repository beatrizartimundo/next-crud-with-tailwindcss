/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useClientes from "../hooks/useClientes";



export default function Home() {

  const { 
    selecionarCliente,
    novoCliente,
    excluirCliente,
    cliente,
    salvarCliente,
    clientes,
    tabelaVisivel,
    exibirTabela,
   } = useClientes()


  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-purple-500  to-violet-900
      text-white
      `}>
      <Layout title="Cadastro simples">
        {tabelaVisivel  ? (
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
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (

          <Form cliente={cliente}
            canceled={() => exibirTabela}
            clientChange={salvarCliente}
          />
        )}
      </Layout>
    </div>

  )
}
