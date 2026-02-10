import "./css/styles.css"

const Nombre = ({ nombreAlumno }) => {
    return (
        <h3 className="nombre">{`Mi nombre es ${nombreAlumno}`}</h3>
    )
}

export default Nombre