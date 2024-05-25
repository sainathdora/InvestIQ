import { useState, useEffect } from "react";
function fact(n) {
  if (n == 1) {
    return 1;
  }
  return n * fact(n - 1);
}
export default function PlotGraph({ plotNo }) {
  const [timer, setTimer] = useState(false);
  useEffect(() => {
    if (plotNo > 4) {
      setTimeout(() => {
        setTimer(true);
      }, 40000);
      return;
    }
    setTimeout(() => {
      setTimer(true);
    }, fact(plotNo) * 1000);
  });

  if (plotNo == 2 && timer) {
    return (
      <>
        <iframe
          src="/assets/Plot/plot2.html"
          style={{ width: "80%", height: "1000px", border: "none" }}
        ></iframe>
      </>
    );
  }
  if (plotNo == 3 && timer) {
    return (
      <>
        <iframe
          src="/assets/Plot/plot3.html"
          style={{ width: "80%", height: "1000px", border: "none" }}
        ></iframe>
      </>
    );
  }
  if (plotNo == 4 && timer) {
    return (
      <>
        <iframe
          src="/assets/Plot/4plot.html"
          style={{ width: "80%", height: "1000px", border: "none" }}
        ></iframe>
      </>
    );
  }
  if (plotNo > 4 && timer) {
    return (
      <>
        <div role="alert">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Request TimeOut
          </div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Something Went Wrong</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <section className="mt-3">
        <span class="relative flex h-3 w-3 mx-auto">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500">
            <p className="animate-pulse font-bold">Loading...</p>
          </span>
        </span>
      </section>
    </>
  );
}
