import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const controller = new AbortController();
//https://jsonplaceholder.typicode.com/users
  useEffect(() => {
    fetch('data.json', {
      signal: controller.signal
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch');
        }
      })
      .then((data) => setData(data))
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.log("Error:", err);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>{item.name} <br />
        {item.id}
        </div>
      ))}
    </>
  );
}

export default App;
