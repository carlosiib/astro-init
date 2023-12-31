export default function Button({ tier }: { tier: string }) {
  return (
    <button className="bg-emerald-500 w-full px-2 rounded-sm text-md" onClick={() => alert(`Buy ${tier} tier`)}>Buy</button>
  )
}