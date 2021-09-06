import logo from "./assets/images/1.png"
// import logo2 from "/img/2.png" error

let teacher = { name: "Yassine" }

function helloTeacher() {
  return teacher.name + " 👨‍🏫"
}

function App() {

  const uppercase = (name) => name.toUpperCase();

  let etudiant1 = <span className="text-uppercase text-success">meri</span>;
  let etudiant2 = <span className="text-danger">
    {uppercase("ayman")}
  </span>
  let students =
    <span>{etudiant1} et {etudiant2}</span>





  return (

    // jsx
    <div>
    <div class="text-center mt-4">  {helloTeacher()}</div>
      <div
        className="d-flex justify-content-center align-items-center vh-100">

        <h1 style={{fontFamily:"monospace",fontSize:40}}> Hello {students}  😄 !!</h1>
      </div>

    <img src={logo}/>
    <img src="/img/2.png"/>
    </div>
  );
}

export default App;
