import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import URLIcon from "./components/url";
import Skeleton from "./components/Skeleton/Skeleton";
import EnterIcon from "./components/enter";

const formSchema = z.object({
  url: z.string().url({
    message: "Please enter a valid URL",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

function App() {
  const [shortenedUrl, setShortenedUrl] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: FormSchema) {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/shortenurl/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: values.url }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to shorten URL: ${response.status}`);
      }

      const data = await response.json();
      const newUrl = data.redirectionUrl;
      setShortenedUrl(newUrl);
    } catch (error) {
      // to prevent sending the error to the console
      // we can implement a monitoring service to send the error to the server
      console.error(error);
      // however, we can display a generic error message to the user
      setErrorMessage(
        "There was an error processing your request. Please try again later."
      );
    }
  }

  return (
    <main>
      <header>
        <h1>URL shortener</h1>
      </header>
      <article>
        <form onSubmit={handleSubmit(onSubmit)}>
          <URLIcon />
          <input
            autoComplete="off"
            required
            placeholder="https://www.google.com"
            id="url"
            {...register("url")}
          />

          <button type="submit">
            <EnterIcon />
          </button>
        </form>

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
            </a>
          ) : (
            <Skeleton />
          )}
          {errors.url?.message && (
            <p className="error-message">{errors.url?.message}</p>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </article>
    </main>
  );
}

export default App;
