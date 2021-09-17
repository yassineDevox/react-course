import { useState } from "react";
import LifeCycle from "./components/LifeCycle";

function App() {
  const [shows, setShows] = useState(true)
  return (
    <div className="text-center">
      { shows ? <LifeCycle /> : null }
      <button className={shows? "btn btn-danger":"btn btn-success"}
        onClick={() => setShows(!shows)}>{!shows? "Wake up 🌝":"Sleep 😴" }</button>
    </div>
  );
}

export default App;
