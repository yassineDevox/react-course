import Welcome from "./components/Welcome";

function App() {
  const alertMyInput = name => alert(name);
  return (
    <>
    <Welcome functionHello={alertMyInput} >
     <span className="text-center"> et welcom tout le monde 😄 !  </span>
    </Welcome>
    <Welcome name="Meri"/>
    <Welcome name="Ayman"/>
    <Welcome name={10}/>
    </>
  );
}

export default App;
