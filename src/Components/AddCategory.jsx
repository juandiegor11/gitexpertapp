import { useState } from "react";
import ReactDOM from 'react-dom/client';

export const AddCategory = ({ onCategories }) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length <= 1) return;
    onCategories(input.trim());
    setInput("");
  };

 

  return (
    <form
      id="searchForm"
      className="header-searchForm"
      onSubmit={(event) => {
        onSubmit(event);
      }}
    >
      <input
        type="text"
        id="searchinput"
        placeholder="Add category"
        value={input}
        onChange={onInputChange}
      />
      <button type='submit'>🔍</button>
    </form>
  );
};

