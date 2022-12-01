import React from "react";

function Table(props) {
  return (
    <div class="grid grid-cols-1 divide-y border border-white text-white font-fira">
      <div className="px-2 py-2">{props.title}</div>
      <div className="px-2 py-2 text-graybg">{props.desc}</div>
    </div>
  );
}

export default Table;
