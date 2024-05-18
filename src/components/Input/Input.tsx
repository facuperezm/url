import EnterIcon from "../enter";
import URLIcon from "../url";

interface InputProps {
  url: string;
  setUrl: (url: string) => void;
  handleShorten: (e: React.FormEvent<HTMLFormElement>) => void;
}

function Input({ url, setUrl, handleShorten }: InputProps) {
  return (
    <form onSubmit={handleShorten}>
      <URLIcon />
      <input
        autoComplete="off"
        required
        placeholder="https://www.google.com"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">
        <EnterIcon />
      </button>
    </form>
  );
}

export default Input;
