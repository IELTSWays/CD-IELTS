import React, { useState } from "react";

const index = ({ id }: any) => {

  const [inputText, setInputText] = useState("");

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputText(event.target.value);
  };

  function WordCount(str: string) {
    return str.split(" ").length;
  }

  return (
    <div className="ielts-textarea">
      <textarea id={id} value={inputText} onChange={handleChange} />
      <span> Wordes: {WordCount(inputText) - 1} </span>
    </div>
  );
};

export default index;
