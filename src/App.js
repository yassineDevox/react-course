import srcImage from './assets/images/imageSrc.png'

const STUDENTS = [
  { name: 'Meri', isPresent: true },
  { name: 'Issac', isPresent: false },
  { name: 'Ayman', isPresent: true },
]

function App() {
  return (
    <>
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Yassine here</h1>
          <br />
          <img src={srcImage} alt="" />
          <br />
          <img src="/imageInPublic.jpg"  alt=""/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="d-flex justify-content-center align-items-center vh-100">
        <h1 style={{ fontFamily: "monospace", fontSize: 40 }}> Hello GoMyCode 😄 !!</h1>

      </div>
      <ul>
        {STUDENTS.map((s, i) => (

          <li key={i}
            className={s.isPresent ? "text-uppercase":""}>
            {s.isPresent ? s.name : <span className="text-danger">{s.name}</span>}
            {s.isPresent === false && (<span>😠</span>)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
