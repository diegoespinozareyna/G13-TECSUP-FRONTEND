const Entrada = ({ nombre = "Persona 1", tipoEntrada = "General", key }) => {
    return (
        <div
            key={key}
            style={{
                width: "200px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: tipoEntrada === "Vip" ? "rgb(252, 177, 1)" : "rgb(227, 223, 214)",
            }}>
            <div
                style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: tipoEntrada === "Vip" ? "rgb(161, 138, 48)" : "black"
                }}
            >
                {nombre}
            </div>
            <div>
                {tipoEntrada}
            </div>
        </div>
    )
}

export default Entrada