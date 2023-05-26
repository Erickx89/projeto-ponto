import "./Header.css";


export default function Header() {
    return (
        <div className="header-container text-center">
            <header className="d-flex ">
                <ul className="nav px-3 col-12 col-md-auto justify-content-center">
                    <li><a href="/" className="nav-link3 px-2">Home</a></li>
                    <li><a href="/sobre" className="nav-link3 px-2">Sobre</a></li>
                    <li><a href="/Cadastro" className="nav-link3 px-2">Cadastrar Funcionário</a></li>
                </ul>
                <button type="button" className="nav-link3" to='/'>Login</button>
            </header>
        </div>
    )
}








