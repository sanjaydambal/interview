import React from "react";
function Code1() {
 const names = ["Brian", "Paul", "Krug", "Halley"];
  const listItems = names.map((name,index) => <li key={index} >{name}</li>);
  return <ul>{listItems}</ul>;
}
export default Code1;
