import axios from "axios"
import { useEffect, useState } from "react"

const Ejemplo2UseEffect = () => {

    const [usuarios, setUsuarios] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const axiosUsuarios = async () => {

            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log("la respuesta es:", response.data)

                setUsuarios(response.data)

            }
            catch (error) {
                console.log("Ha ocurrido un error:", error)
            }
            finally {
                setCargando(false)
            }
        }
        axiosUsuarios()
    }, [])

    return (
        <>
            <div className="min-h-screen bg-slate-50 p-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                    Directorio de Usuarios
                </h1>

                {cargando ? (
                    // Estado de Carga
                    <div className="text-center text-xl text-slate-500 animate-pulse">
                        Cargando datos...
                    </div>
                ) : (
                    // Grid de Tarjetas
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {usuarios.map((user) => (
                            <div
                                key={user.id}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                                        {user.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-800">{user.name}</h3>
                                        <p className="text-sm text-slate-500">@{user.username}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 text-sm text-slate-600">
                                    <p>📧 {user.email}</p>
                                    <p>🌍 {user.website}</p>
                                    <p>🏢 {user.company.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Ejemplo2UseEffect