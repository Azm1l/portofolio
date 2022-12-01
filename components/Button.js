import React from "react";

function Button(props) {
  return (
    <button
      className={`py-2 px-4 border border-graybg text-white hover:border-greenbg`}
    >
      {props.text}
    </button>
  );
}

export default Button;
