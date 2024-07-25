import { useState } from "react";

export const FormList = ({ setData }) => {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  return (
    <div id="todo-form">
      <label>Name</label>
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <label>Job title</label>
      <input
        placeholder="Job title"
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <button
        onClick={() => {
          if (name.trim() !== "" && jobTitle.trim() !== "")
            setData((prev) => [...prev, { name, jobTitle }]);
        }}
      >
        Add
      </button>
    </div>
  );
};
