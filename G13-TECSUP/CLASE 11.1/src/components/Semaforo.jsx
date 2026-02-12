const Semaforo = ({ color }) => {

    return (
        <>
            <div
                style={{
                    width: "50px",
                    // height: "50px",
                    backgroundColor: "#222",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    padding: "5px"
                }}
            >

                {/* circulo rojo */}
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "red",
                        borderRadius: "100%",
                        opacity: color === "red" ? "1" : "0.3"
                    }}
                >
                </div>
                {/* circulo rojo */}

                {/* circulo amarillo */}
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "yellow",
                        borderRadius: "100%",
                        opacity: color === "yellow" ? "1" : "0.3"
                    }}
                >
                </div>
                {/* circulo amarillo */}

                {/* circulo verde */}
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgb(44, 253, 44)",
                        borderRadius: "100%",
                        opacity: color === "green" ? "1" : "0.3"
                    }}
                >
                </div>
                {/* circulo verde */}

            </div>
        </>
    )
}

export default Semaforo