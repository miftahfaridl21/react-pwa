import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let deferredPrompt;
    window.addEventListener("beforeinstallprompt", (e) => {
      deferredPrompt = e;
    });
    getData();
  }, []);

  async function getData() {
    let res = await (
      await fetch("https://jsonplaceholder.typicode.com/todos/")
    ).json();
    if (res != undefined) setData(res);
  }

  return (
    <>
      {data.map((item, i) => (
        <p key={i}>
          {i + 1}. {item.title}
        </p>
      ))}
    </>
  );
}

export default App;
