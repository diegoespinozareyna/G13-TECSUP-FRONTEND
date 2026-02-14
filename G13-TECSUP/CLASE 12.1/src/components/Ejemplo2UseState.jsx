import { useState } from "react"

const Ejemplo2UseState = () => {
    const [mostrar, setMostrar] = useState(false)
    return (
        <>
            <div className="flex flex-col items-start justify-center h-screen gap-4 p-5">
                <label>{mostrar ? "Contraseña visible" : "Contraseña oculta"}</label>
                <input
                    type={mostrar ? "text" : "password"}
                    className="border-2 border-gray-500 rounded-lg p-2"
                />
                <button
                    className={
                        `
                        ${mostrar ? "bg-blue-500" : "bg-green-500"}
                        text-white py-2 px-4 rounded cursor-pointer
                        `
                    }
                    onClick={() => {
                        setMostrar(prev => !prev)
                    }}
                >
                    {mostrar ? "Ocultar" : "Mostrar"}
                </button>
            </div>
        </>
    )
}

export default Ejemplo2UseState