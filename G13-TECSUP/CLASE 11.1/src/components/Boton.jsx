import Swal from "sweetalert2"

const Boton = ({ nombre = "OK", colorLetra = "white", colorFondo = "rgb(54, 138, 255)", bordeRedondeado = "10px", titleSwal = "Titulo 1", iconSwal = "success", children = "OK" }) => {

    const styleBoton = {
        // border: "1px solid black",
        borderRadius: bordeRedondeado,
        minWidth: "80px",
        textAlign: "center",
        padding: "5px",

        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",

        backgroundColor: colorFondo,
        color: colorLetra,

        cursor: "pointer",
    }

    const handleClick = () => {
        console.log("Click desde el boton")
        // alert("Mensaje del boton")
        Swal.fire({
            title: titleSwal,
            text: "Este es un mensaje de alerta",
            icon: iconSwal,
            draggable: true,
        })
    }

    return (
        <>
            <div
                onClick={() => {
                    handleClick()
                }}
                style={styleBoton}
            >
                {children}
            </div>
        </>
    )
}

export default Boton