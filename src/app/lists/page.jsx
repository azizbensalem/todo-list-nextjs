"use client";
import { useState } from "react";

import "./style.css";
import { FormList } from "@/components/lists/FormList/FormList";
import { ItemList } from "@/components/lists/ItemList/ItemList";
import { Button } from "@/components/lists/Button/Button";

export default function Lists() {
  const [data, setData] = useState([
    {
      name: "Mohamed Aziz Ben Salem",
      jobTitle: "Software engineer",
    },
    {
      name: "Mohamed Harbaoui",
      jobTitle: "Software engineer",
    },
  ]);
  return (
    <main>
      <FormList setData={setData} />
      {data.map((item, index) => (
        <div id="todo-list" key={index}>
          <ItemList item={item} />
          <Button
            className="delete-button"
            onClick={() => {
              if (confirm("Are you sure to delete this item ?"))
                setData(data.filter((oneItem, oneIndex) => index !== oneIndex));
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </main>
  );
}
