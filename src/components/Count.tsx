import { useState } from "react"

export default function Count() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </>
  )
}