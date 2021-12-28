import Cliente from "../core/Cliente";
import { deleteIcon, editIcon } from "./Icones";

interface TableProps {
  clientes: Cliente[],
  clienteSelecionado?: (cliente:Cliente) => void,
  clienteExcluido?: (cliente:Cliente) => void,
}

export default function Table(props: TableProps) {

  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Codigo</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes && <th className="text-left p-4">Acoes</th>}
      </tr>
    )
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, index) => {
      return (
        <tr key={cliente.id} className={` ${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {exibirAcoes && renderizarAcoes(cliente)}
        </tr>
      )
    })
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ?
        <button 
          className={`
          flex justify-center items-center 
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50
          `}
          onClick={() => props.clienteSelecionado?.(cliente)}
        >
          {editIcon}
        </button>
        :false  
      }
        {props.clienteExcluido ?
        <button 
          className={`
          flex justify-center items-center 
          text-red-500 rounded-full p-2 m-1
          hover:bg-purple-50
          `}
          onClick={() => props.clienteSelecionado?.(cliente)}
        >
          {deleteIcon}
        </button>
        : false
      }
        
      </td>
    )
  }
  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
        {renderizarCabecalho()}
      </thead>
      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  )
}