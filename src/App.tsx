import React from "react";
import axios from "axios";
import Input from "./components/Input/Input";
import Skeleton from "./components/Skeleton/Skeleton";

function App() {
  const [url, setUrl] = React.useState("");
  const [shortenedUrl, setShortenedUrl] = React.useState("");

  function handleShorten(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/shortenurl/create", { url: url })
      .then((response) => {
        const newUrl = response.data.redirectionUrl;
        setShortenedUrl(newUrl);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <main>
      <header>
        <h1>URL shortener</h1>
      </header>
      <article>
        <Input url={url} setUrl={setUrl} handleShorten={handleShorten} />
        <div className="result">
          <p className="title">Shortened URL:</p>
          {shortenedUrl ? (
            <a
              className="title"
              href={shortenedUrl}
              target="_blank"
              rel="noreferrer"
            >
              {shortenedUrl}
              {shortenedUrl}
              {shortenedUrl}
              {shortenedUrl}
            </a>
          ) : (
            <Skeleton />
          )}
        </div>
      </article>
    </main>
  );
}

export default App;
