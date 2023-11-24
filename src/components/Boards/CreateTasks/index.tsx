export function CreateText() {
    console.log("teste")
    return (
        <div className="row">
            <div className="col-12">
                <label htmlFor=""> Titulo
                    <input type="text" />
                </label>
                <label htmlFor=""> Descricao
                    <input type="text" />
                </label>
                <label htmlFor=""> DataEntrega
                    <input type="text" />
                </label>
                <label htmlFor="">DataCriacao
                    <input type="text" />
                </label>
            </div>
        </div>
    )
}