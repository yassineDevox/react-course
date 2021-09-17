const { useEffect, useState } = require("react");

function useInterval(timeout, getValue) {
  const [value, setValue] = useState(getValue);
  useEffect(() => {
    const intervalID = setInterval(
      () => setValue(getValue()),
      timeout
    );
    return function () {
      clearInterval(intervalId);
    }
  }, []);
  return value;
}

const getCurrentDate = () => new Date();

function App() {
  const date = useInterval(1000, getCurrentDate);
  return <p>Nous sommes le {date.toLocaleString("fr-FR")}</p>;
}