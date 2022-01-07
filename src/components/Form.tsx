import Input from "./Input";
import Cliente from '../core/Cliente';
import { useState } from "react";
import Button from "./Button";

interface FormProps {
  cliente: Cliente,
  clientChange?: (cliente:Cliente) => void,
  canceled?: () => void,
}

export default function Form(props:FormProps) {
  const id = props.cliente?.id;
  const [nome,setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);


  return (
    <div>
      {id &&<Input text="Codigo" valor={id} className="mb-4" readOnly/> }
      <Input 
        text="Nome"
        valor={nome}
        onChange={setNome}
        className="mb-4"
        />
        <Input 
        text="Idade"
        type="number"
        valor={idade}
        onChange={setIdade}
        />
        <div className="flex justify-end mt-7">
        <Button 
          cor="blue" 
          className="mr-2"
          onClick={() => props.clientChange?.(new Cliente(nome,+idade,id))}
        >
            {id ? 'Alterar' : " Salvar"}
        </Button>
        <Button onClick={props.canceled}>
            Cancelar
        </Button>
        </div>
          
    </div>
  )
}