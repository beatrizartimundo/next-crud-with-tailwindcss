import Botao from "../components/Botao";
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

function clienteSelecionado(cliente:Cliente) {
  console.log(cliente.nome)
};

function clienteExcluido(cliente:Cliente) {
  console.log(cliente.nome)
};

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-purple-500  to-violet-900
      text-white
      `}>
      <Layout title="Cadastro simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        
        <Table 
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Table>
      </Layout>
    </div>

  )
}
