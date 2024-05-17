import React from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = React.useState("");
  const [shortenedUrl, setShortenedUrl] = React.useState("");

  function handleShorten(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/shortenurl/create", { url: url })
      .then((response) => {
        console.log(response);

        console.log(response.data.shortenedUrl);
        setShortenedUrl(response.data.shortenedUrl);
      })
      .catch((error) => console.log("error", error));
    // console.log({ data, url, shortenedUrl });
  }
  return (
    <>
      <div>
        <h1>URL shortener</h1>
        <p>Shortened URL: {shortenedUrl}</p>
        <form onSubmit={handleShorten}>
          <input
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">Shorten</button>
        </form>
      </div>
    </>
  );
}

export default App;
