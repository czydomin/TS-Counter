import React from "react";

export default function CountDisplay({ value }: { value: number }) {
  return (
    <div>
      <p className="text-5xl">{value}</p>
    </div>
  );
}
