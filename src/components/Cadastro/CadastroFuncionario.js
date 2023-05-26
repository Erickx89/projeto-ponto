import "./Cadastro.css";

export default function CadastroDadosPessoais({
    nome,
    dataNascimento,
    cpf,
    rg,
    endereco,
    email,
    telefone,

    onNomeChange,
    onDataNascimentoChange,
    onCpfChange,
    onRgChange,
    onEnderecoChange,
    onEmailChange,
    onTelefoneChange,
}) {
    return (
        <div className="cadastro-dados-pessoais">
            <h4 className="dados-pessoais-titulo"> Dados Pessoais </h4>
            <input
                placeholder="Nome Completo"
                className="dados-input"
                type="text"
                value={nome}
                onChange={onNomeChange}
            />
            <input
                placeholder="Data Nascimento"
                className="dados-input"
                type="date"
                required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                value={dataNascimento}
                onChange={onDataNascimentoChange}
            />
            <input
                placeholder="Digite o CPF"
                className="dados-input"

                type="text"
                value={cpf}
                onChange={onCpfChange}
            />
            <input
                placeholder="Digite o RG"
                className="dados-input"

                type="text"
                value={rg}
                onChange={onRgChange}
            />
            <input
                placeholder="Digite o endereço"
                className="dados-input"
                type="text"
                value={endereco}
                onChange={onEnderecoChange}
            />
            <input
                className="dados-input"
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={onEmailChange}
            />

            <input
                className="dados-input"
                placeholder="Telefone"
                type="tel"
                value={telefone}
                onChange={onTelefoneChange}
            />
            <div className="button-container">
                <button className="cadastro-submit text-center" >
                    Finalizar!
                </button>

            </div>
        </div>
    );
}