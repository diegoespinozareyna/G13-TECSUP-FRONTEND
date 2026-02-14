import { useState } from "react"

const EjemplosUseState = () => {
    const [cuenta, setCuenta] = useState(0)
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <p>Cuenta es de: {cuenta}</p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        setCuenta(x => x + 1)
                    }}
                >
                    Aumentar
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        setCuenta(prev => prev - 1)
                    }}
                >
                    Disminuir
                </button>
            </div>
        </>
    )
}

export default EjemplosUseState