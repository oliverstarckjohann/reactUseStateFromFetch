import "./App.css";
import { useEffect, useState } from "react";
import getQuotes from "./components/Fetchquotes";
import styled from "styled-components";

function App() {
  const [quote, setQuote] = useState({});
  //update State initial
  useEffect(() => {
    getQuotes()
      //set the keys text and date in the Object of the state
      .then((data) => setQuote({ text: data.value, date: data.appeared_at }))
      .catch((error) => console.log(error));
  }, []);
  //update State on Click
  function updateQuote() {
    getQuotes()
      .then((data) => setQuote({ text: data.value, date: data.appeared_at }))
      .catch((error) => console.log(error));
  }
  //Change the Date Display to readable
  let dateString = quote.date;
  let date = dateString.slice(0, 10);

  return (
    <Contentbox>
      <h1>Donalds Quotes</h1>
      <Quotebox>
        <p>On the day:</p> {date}
      </Quotebox>
      <br />
      <Quotebox>
        <p>He said:</p> {quote.text}
      </Quotebox>
      <br />
      <ButtonStyled onClick={updateQuote}>New Quote</ButtonStyled>
    </Contentbox>
  );
}

const Contentbox = styled.div`
  font-size: 1.2em;
  text-align: center;
  color: #636566;
  border: solid #636566 2px;
  border-radius: 10px;
`;

const Quotebox = styled.section`
  font-size: 1.5em;
  text-align: left;
  color: #636566;
  margin-left: 20px;
  p {
    font-size: 0.8em;
    font-weight: bold;
    color: #516564;
  }
`;

const ButtonStyled = styled.button`
  font-size: 1.5em;
  text-align: center;
  background-color: #636566;
  color: #24cac0;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export default App;
