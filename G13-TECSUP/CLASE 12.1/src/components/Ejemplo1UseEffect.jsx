import { useEffect, useState } from "react"

const Ejemplo1UseEffect = () => {
    const [contador, setContador] = useState(0)
    useEffect(() => {
        console.log("El contador se encuentra en:", contador)
        document.title = `Clicks: ${contador} - React Hooks`
    }, [contador])
    return (
        <>
            <div className="flex flex-col items-start justify-center h-screen gap-4 p-5">
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 text-center max-w-sm w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Control del Título
                        </h2>
                        <div className="text-6xl font-black text-indigo-600 mb-6">
                            {contador}
                        </div>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => setContador(c => c - 1)}
                                className="px-6 py-2 bg-red-100 text-red-600 font-semibold rounded-lg hover:bg-red-200 transition-colors"
                            >
                                -1
                            </button>

                            <button
                                onClick={() => setContador(c => c + 1)}
                                className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
                            >
                                +1
                            </button>
                        </div>
                        <p className="mt-6 text-sm text-gray-400">
                            Mira la pestaña de tu navegador ⬆️
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ejemplo1UseEffect