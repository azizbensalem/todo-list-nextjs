"use client";
export const ItemList = ({ item }) => {
  return (
    <>
      <p>
        Name : <span>{item.name}</span>
      </p>
      <p>
        Job title : <span>{item.jobTitle}</span>
      </p>
    </>
  );
};
