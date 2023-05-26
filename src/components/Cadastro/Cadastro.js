import "./Cadastro.css";

import { useState } from "react";

import RetornoHome from "../RetornoHome/RetornoHome";
import CadastroDadosPessoais from "./CadastoDadosPessoais";


export default function Cadastro() {
  

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
 

  
  function handleNomeChange(e) {
    setNome(e.target.value);
  }
  function handleEnderecoChange(e) {
    setEndereco(e.target.value);
  }
  function handleDataNascimentoChange(e) {
    setDataNascimento(e.target.value);
  }
  function handleCpfChange(e) {
    setCpf(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  
  function handleTelefoneChange(e) {
    setTelefone(e.target.value);
  }



  const retornoLog = `
  -=-=-= Dados Pessoais =-=-=-
  Nome do cadastro: ${nome}
  Data Nascimento: ${dataNascimento}
  CPF: ${cpf}
  Telefone: ${telefone}
  Endereço: ${endereco}
  E-mail: ${email}
  

`;

  function showLog() {
    console.log(retornoLog);
  }

  return (
    <section className="cadastro-container">
      <div className="form">

        <div className="cadastro-inputs">
          <CadastroDadosPessoais
            nome={nome}
            data={dataNascimento}
            cpf={cpf}
            email={email}
            telefone={telefone}
            endereco={endereco}
            onNomeChange={handleNomeChange}
            onEnderecoChange={handleEnderecoChange}
            onDataNascimentoChange={handleDataNascimentoChange}
            onCpfChange={handleCpfChange}
            onEmailChange={handleEmailChange}
            onTelefoneChange={handleTelefoneChange}
          />
        
        </div>
        
      </div>
    </section>
  );
}