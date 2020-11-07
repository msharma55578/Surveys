import React, { useState, Fragment } from "react";
import { Link,Redirect } from 'react-router-dom';

const Stype=[]
const ques=[]
const choice=[]
const Survey = (props) => {
  const [surveyType, setSurveyType] = useState("defaultValue");
  const [options, setOptions] = useState([{ value: ``, id: Date.now() }]);
  const [question,setquestion]=useState('');
  const [redirect, setRedirect]=useState(false);

  let isfirst=false
  const onAddition = () => {
    if (surveyType === "single" && options.length == 2) return;
    if (surveyType === "multi" && options.length === 4) return;
    setOptions([...options, { value: "", id: Date.now() }]);
  };
  const onAddItem = (text, id) => {
    const optionCopy = [...options];
    const updateOption = optionCopy.map((option) => {
      if (option.id === id) {
        return { ...option, value: text };
      } else {
        return option;
      }
    });
  };
  const onAddAnswer = (text, id) => {
    const optionCopy = [...options];
    const updateOptions = optionCopy.map((option) => {
      if (option.id === id) {
        return { ...option, value: text };
      } else {
        return option;
      }
    });
    setOptions(updateOptions);
  };

  const onRemoveItem = (id) => {
    const updatedOption = options.filter((option) => option.id !== id);
    setOptions(updatedOption);
  };

const Saving=()=>{

  Stype.push(surveyType)
  ques.push(question)
  
  options.map((i)=>(
    choice.push(i.value)
  ))
  
  console.log("surTy "+ques)
  
  //clear all fields
  setSurveyType("defaultValue");
  setquestion("");
  setOptions([{ value: "", id: Date.now() }]);
}
const redirectToPage=()=>{

  Stype.push(surveyType)
  ques.push(question)
  options.map((i)=>(
    choice.push(i.value)
  ))
};

  return (
    <Fragment>
      <div className="question-type-container">
        <select
          name="survey"
          value={surveyType}
          onChange={(evt) => {
            setquestion("");
            setSurveyType(evt.target.value);
            setOptions([{ value: "", id: Date.now() }]);
          }}
        >
          <option value="defaultValue">Select question type</option>
          <option value="multi">Multi-select</option>
          <option value="single">Single select</option>
        </select>
      </div>
      {surveyType !== "defaultValue" ? (
        <div className="survey-container">
          <input
            type="text"
            placeholder="Enter your question here"
            className="question-container"
            value={question}
            onChange={(evt) => {
              setquestion(evt.target.value);
            }}
          />
          <p>Options</p>
          {options.map((option) => (
            <div className="answer-container" key={option.id}>
              <input
                type="text"
                placeholder="Type answer here"
                value={props.option}
                onChange={(evt) => {
                  onAddAnswer(evt.target.value,option.id);
                }}
              />
              {(surveyType === "multi")&&(options.length!==4)?<p onClick={onAddition}>➕</p>:null}
              {(surveyType === "single")&&(options.length!==2)?<p onClick={onAddition}>➕</p>:null}
              {(options.length>1)?<p onClick={() => onRemoveItem(option.id) }>➖</p>:null}
              
            </div>
          ))}
          {(surveyType === "multi" && options.length >= 4) ||
          (surveyType === "single" && options.length === 2) ? (
            <span>
              <button onClick={Saving} className="add question">Add question</button>

              <Link to="/publish">
                <button onClick={redirectToPage} className="publish">publish</button>
              </Link>
              
            </span>
          ) : null}

        </div>
      ) : null}
    
    </Fragment>
  );
};
export default Survey;
export {ques,choice,Stype};