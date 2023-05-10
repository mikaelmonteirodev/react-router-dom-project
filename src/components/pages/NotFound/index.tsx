import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <>
            <h1>Pagina não encontrada</h1>
            <Link to={'./'}>Voltar</Link>
        </>
    )
}

