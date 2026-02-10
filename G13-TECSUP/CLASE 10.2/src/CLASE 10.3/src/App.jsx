import Card from "./components/Card"


function App() {

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Card
        nombre="Carlos Dev"
        imagen="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
        color="#6c5ce7"
      />
    </div>
  )
}

export default App
