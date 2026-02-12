const EstadoDeCarga = ({ carga = "100%", barra = "100", color = "rgb(44, 253, 44)", title = "Mi carga" }) => {
    return (
        <div>
            <h3
                style={{
                    color: color
                }}
            >
                {`${title}: ${carga}`}
            </h3>

            <div
                style={{
                    marginTop: "10px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    width: "130px",
                    height: "30px",
                    padding: "2px",
                }}
            >
                <div
                    style={{
                        backgroundColor: color,
                        width: `${barra}%`, // 100%
                        height: "100%",
                        borderRadius: "10px",
                    }}
                >
                </div>
            </div>

            <span
                style={{
                    color: color,
                }}
            >
                {carga}
            </span>
        </div>
    )
}

export default EstadoDeCarga