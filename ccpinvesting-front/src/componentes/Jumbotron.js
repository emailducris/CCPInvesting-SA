
const Jumbotron = (props) =>{
    return(
        <div className="jumbotron text-center" id="myPage">
            <h1>CCP Investing</h1>
            <p>Especialista em bolsa de valores</p>
            <form className="form-inline">
            <div className="input-group">
                <input
                type="text"
                className="form-control"
                size="50"
                placeholder="Ações"
                required
                />
                <div className="input-group-btn">
                <button type="button" className="btn btn-danger">
                    Pesquisar
                </button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Jumbotron;
