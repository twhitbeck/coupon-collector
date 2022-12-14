import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("/test")
      .then((response) => response.text())
      .then(console.log);
  }, []);

  return (
    <>
      <header className="bg-emerald-50 p-6 shadow shadow-emerald-800/50">
        <h1 className="text-2xl text-emerald-700">Coupon Collector</h1>
      </header>

      <main className="m-6">
        <p>This is the stuff</p>
      </main>
    </>
  );
}
