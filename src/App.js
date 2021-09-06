const STUDENTS = [
  { name: 'Meri', isPresent: true },
  { name: 'Issac', isPresent: false },
  { name: 'Ayman', isPresent: true },
]

function App() {
  return (

    // jsx

    <div
      className="d-flex justify-content-center align-items-center vh-100">
      <h1 style={{ fontFamily: "monospace", fontSize: 40 }}> Hello GoMyCode 😄 !!</h1>
      <ul>
        {STUDENTS.map((s,i) => (
        
            <li key={i} 
              className={s.isPresent && "text-uppercase"}>
              {s.isPresent ? s.name:<span className="text-danger">{s.name}</span>} 
              {s.isPresent==false && (<span>😠</span>) }  
            </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
