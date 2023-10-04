"use client";
import { useState } from "react";
import Image from "next/image";
import CountDisplay from "~/components/CountDisplay";
import Button from "~/components/Button";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <main className="flex flex-col items-center mt-10">
      <CountDisplay value={count} />
      <div className="flex gap-5 p-5">
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
          displayValue={"+1"}
        />
        <Button
          onClick={() => {
            setCount(count - 1);
          }}
          displayValue={"-1"}
        />
      </div>
      <Button
        onClick={() => {
          setCount(0);
        }}
        displayValue="RESET"
      />
    </main>
  );
}
