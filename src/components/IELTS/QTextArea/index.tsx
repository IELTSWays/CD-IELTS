import React, { useState } from "react";

const index = ({ id }: any) => {

  const [inputText, setInputText] = useState("");

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputText(event.target.value);
  };

  function WordCount(str: string) {
    return str.split(/\s+/)
      .filter(Boolean).length;
  }

  return (
    <div className={`ielts-textarea ${inputText.split(/\s+/).filter(Boolean).length > 10 && 'error'}`}>
      <textarea id={id} value={inputText} onChange={handleChange} />
      <span> Words: {WordCount(inputText)} </span>
    </div>
  );
};

export default index;
