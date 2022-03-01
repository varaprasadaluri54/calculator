import { useState } from "react";
import Button from "./Button";
import CalculatorTitle from "./calculatorTitle";
import OutputScreen from "./outputScreen";

export default function Calculator() {
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");

  function handleClick(event) {
    const value = event.target.value;
    // console.log(value);
    switch (value) {
      case "=": {
        if (ques !== "") {
          var answer = "";
          try {
            answer = eval(ques);
            // console.log(ques);
          } catch (error) {
            setAns("Math error");
          }
          if (answer === "") {
            setAns("Math error");
          } else {
            setAns(answer);
            setQues("");
            // console.log(ans);
          }
        }
        break;
      }
      case "Clear": {
        setQues("");
        setAns("");
        break;
      }
      case "Delete": {
        var str = ques;
        str = str.substr(0, str.length - 1);
        setQues(str);
        break;
      }
      default: {
        let exp = ques + value;
        setQues(exp);
        break;
      }
    }
  }

  return (
    <div className="frame">
      <CalculatorTitle value="Calculator" />
      <div class="mainCalc">
        <OutputScreen question={ques} answe={ans} />
        <div className="button-row">
          <Button label={"Clear"} handleClick={handleClick} />
          <Button label={"Delete"} handleClick={handleClick} />
          <Button label={"."} handleClick={handleClick} />
          <Button label={"/"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"7"} handleClick={handleClick} />
          <Button label={"8"} handleClick={handleClick} />
          <Button label={"9"} handleClick={handleClick} />
          <Button label={"*"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"4"} handleClick={handleClick} />
          <Button label={"5"} handleClick={handleClick} />
          <Button label={"6"} handleClick={handleClick} />
          <Button label={"-"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"1"} handleClick={handleClick} />
          <Button label={"2"} handleClick={handleClick} />
          <Button label={"3"} handleClick={handleClick} />
          <Button label={"+"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"0"} handleClick={handleClick} />
          <Button label={"="} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
