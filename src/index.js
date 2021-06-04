import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./dist/index.css";
import QuotesDisplay from "./components/Quotes";

class App extends React.Component {
  state = { QuotesData: [] };

  GetQuotesData = async () => {
    const response = await axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    let randnumber = Math.floor(Math.random() * response.data.quotes.length);
    const QuotesData = response.data.quotes[randnumber];
    this.setState({ QuotesData: QuotesData });
  };

  componentDidMount() {
    this.GetQuotesData();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container" id="quote-box">
          <QuotesDisplay data={this.state.QuotesData} />
          <div className="divider">
            <div className="circle"></div>
          </div>

          <div className="btn-group">
            <button
              className="btn-awesome btn-13"
              id="new-quote"
              onClick={this.GetQuotesData}
            >
              New Quote
            </button>
          </div>

          <div className="button-group">
            <span>
              <i className="fas fa-share-alt"></i>
              &nbsp;Share!
            </span>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="btn-share"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="twitter.com/intent/tweet"
              target="_blank"
              rel="noreferrer"
              className="btn-share"
              id="tweet-quote"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
