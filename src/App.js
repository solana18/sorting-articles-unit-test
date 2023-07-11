import React, { useEffect, useState } from "react";
import "./App.css";
import Articles from "./components/Articles";

function App({ articles }) {
  const [resultArticles, setResultArticles] = useState([...articles]);
  useEffect(() => {
    setResultArticles([
      ...resultArticles.sort(
        (a, b) => parseInt(b.upvotes) - parseInt(a.upvotes)
      ),
    ]);
  }, []);
  const handleMostUpvote = () => {
    setResultArticles([
      ...resultArticles.sort(
        (a, b) => parseInt(b.upvotes) - parseInt(a.upvotes)
      ),
    ]);
  };
  const handleMostRecent = () => {
    setResultArticles([
      ...resultArticles.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      }),
    ]);
  };
  return (
    <>
      <div className="navbar navbar-expand-sm bg-dark navbar-dark ">
      <div className="container-fluid justify-content-center">
      <ul className="navbar-nav justify-content-between">
          <label className="text-light navbar-brand">
              Sort By
          </label>
          <div className="d-flex">
              <button
                  data-testid="most-upvoted-link"
                  className="btn btn-primary mx-2"
                  onClick={handleMostUpvote}
              >
                  Most Upvoted
              </button>
              <button
                  data-testid="most-recent-link"
                  className="btn btn-primary mx-2"
                  onClick={handleMostRecent}
              >
                  Most Recent
              </button>
          </div>
      </ul>
        </div>
      </div>
      <div className="container pt-5 mt-5">
        <Articles articles={resultArticles} />
      </div>
    </>
  );
}

export default App;
