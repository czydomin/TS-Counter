import React from "react";
type ButtonProps = {
  onClick: () => void;
  displayValue: string;
};

export default function Button({ onClick, displayValue }: ButtonProps) {
  return (
    <div>
      <button onClick={onClick} className="border border-1 w-20 h-10">
        {displayValue}
      </button>
    </div>
  );
}
