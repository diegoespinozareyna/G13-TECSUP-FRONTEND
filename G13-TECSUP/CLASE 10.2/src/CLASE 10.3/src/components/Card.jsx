import './styles.css'

const Card = ({ nombre, imagen, color }) => {
    return (
        <>
            <div className="container">
                <img src={imagen} alt="Imagen Perfil" />
                <h2>{nombre}</h2>
                <p id="parrafo">
                    Desarrollador Frontend & Amante del Café. Creando interfaces limpias.
                </p>
                <button
                    style={{
                        backgroundColor: color,
                    }}
                >Seguir</button>
            </div>
        </>
    )
}

export default Card