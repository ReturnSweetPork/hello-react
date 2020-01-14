import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "호날두" },
    { id: 2, text: "메시" },
    { id: 3, text: "반데이크" },
    { id: 4, text: "손흥민" },
    { id: 5, text: "음바페" }
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(6);

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가하기</button>
      <li>{nameList}</li>;
    </div>
  );
};

export default IterationSample;
