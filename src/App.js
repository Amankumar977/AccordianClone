import React, { useState } from "react";
import "./App.css";
import Data from "./Component/Data";
import SingleQuestion from "./Component/SingleQuestion";
const App = () => {
  const [questions, setQuestions] = useState(Data);
  return (
    <main>
      <div className="conatiner">
        <div className="innerCont ">
          <div className="innerCont1">
            <h2>Questions And Answers About Login</h2>
          </div>
          <div className="innerCont2">
            <section>
              {questions.map((questions) => {
                return <SingleQuestion key={questions.id} {...questions} />;
              })}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
export default App;
