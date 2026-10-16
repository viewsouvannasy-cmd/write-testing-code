import { useState } from "react";
import { average } from "../utils/average";

export function Home() {
  const [input, setInput] = useState("");

  const [results, setResults] = useState<number | null>(null);
  const [isError, setIsError] = useState("");

  function handleCalculate() {
    const array = input.split(",").map((item) => Number(item.trim()));
    try {
      setResults(average(array));
      console.log(array);
      setIsError("");
    } catch (error) {
      setResults(null);
      setIsError((error as Error).message);
    }
  }
  return (
    <div>
      <div className="flex gap-2 p-4">
        <input
          className="border px-2 py-1"
          placeholder="example 10, 20, 30"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="border px-3 py-1" onClick={handleCalculate}>
          average
        </button>
      </div>
      {isError.length === 0 && <p className="p-4">this Average: {results}</p>}
      {isError.length > 0 && <p className="p-4 text-red-600">{isError}</p>}
    </div>
  );
}
