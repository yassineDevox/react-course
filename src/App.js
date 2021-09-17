import { useState } from "react";
import LifeCycle from "./components/LifeCycle";
import LifeCycleF from "./components/LifeCycleF";

function App() {
  const [shows, setShows] = useState(true)
  return (
    <div className="text-center">
      { shows ? <LifeCycle /> : null }
      { shows ? <LifeCycleF /> : null }
      <button className={shows? "btn btn-danger":"btn btn-success"}
        onClick={() => setShows(!shows)}>{!shows? "Wake up 🌝":"Sleep 😴" }</button>
    </div>
  );
}

export default App;
