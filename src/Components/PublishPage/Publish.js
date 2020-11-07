import React from "react";
import { Redirect } from "react-router-dom";
import { Markup } from 'interweave';

import { ques, choice, Stype } from "../CreateSurvey/Survey";

const Publish = (props) => {
  const renderTofirst = () => {
    props.history.push("/");
  };

  var str="";
  var len=0;
  var pre=0;
  for(let i=0;i<ques.length;i++){
    str += "<div><h4>"+String(ques[i])+"</h4><ul>";
    pre=len;
    if(Stype[i]==="single"){
      len=2+len;
    }else{
      len=4+len;
    }
    for(let j=pre;j<len;j++){
      str+="<li>"+String(choice[j])+"</li>";
    }
    str+="</ul></div>";
  }
  console.log(choice)
  console.log(str)
  return (
    <div>
      {/* {str} */}
      <Markup content={str} />
      <button onClick={renderTofirst}>Submit</button>
    </div>
  );
};
export default Publish;
