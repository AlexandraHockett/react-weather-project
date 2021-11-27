import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/alexandra-hockett/"
            target="_blank"
            rel="noreferrer"
          >
            Alexandra Hockett{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/AlexandraHockett/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
