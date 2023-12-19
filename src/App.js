import "./App.css";
import gptlogo from './assets/chatgpt.svg'
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="uppersideTop">
            <img src={gptlogo} alt="" className="logo" />
            <span className="brand">Chat GPT</span>
            <button className="midbtn">
              <img src="" alt="" className="addbtn" />
              New Chat
            </button>
            <div className="uppersideBottom"></div>
            <button className="quary">
              <img src="" alt="" />
              What is programing ?
            </button>
            <button className="quary">
              <img src="" alt="" />
              What is programing ?
            </button>
          </div>
        </div>
        <div className="lowerside"></div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
