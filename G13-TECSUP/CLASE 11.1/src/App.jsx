import Boton from "./components/Boton"
import Entrada from "./components/Entrada"
import EstadoDeCarga from "./components/EstadoDeCarga"
import Semaforo from "./components/Semaforo"

function App() {

  const entradas = [
    {
      nombre: "Jose Peralta",
      tipo: "Vip",
    },
    {
      nombre: "Carlos Aguirre",
      tipo: "General",
    },
    {
      nombre: "Juan Perez",
      tipo: "Vip",
    },
    {
      nombre: "Luis Diaz",
      tipo: "General"
    }
  ]

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "10px",
      }}
    >
      <>
        {/* <EstadoDeCarga />

      <EstadoDeCarga carga="47%" barra="47" color="rgb(220, 203, 48)" title="Mi Laptop" />

      <EstadoDeCarga carga="10%" barra="10" color="rgb(209, 46, 46)" title="Mi telefono" />

      <EstadoDeCarga carga="60%" barra="60" color="rgb(239, 109, 44)" title="Mi tablet" /> */}
        {/* 
      <Boton nombre="Aceptar" titleSwal="Acción Éxitosa" />

      <Boton nombre="CERRAR SESIÓN" colorFondo="rgb(246, 78, 40)" colorLetra="white" titleSwal="Error al dar click" iconSwal="error" />

      <Boton children="Hola" bordeRedondeado="40px" colorFondo="green" />

      <Boton colorFondo="rgb(36, 245, 17)">
        NUEVO
      </Boton> */}
      </>

      {
        entradas.map((item, index) => {
          return (
            <Entrada key={index} nombre={item.nombre} tipoEntrada={item.tipo} />
          )
        })
      }



    </div>
  )
}

export default App
