export default function PlotGraph({ plotNo }) {
  if (plotNo == 2) {
    return (
      <>
        <iframe
          src="/assets/Plot/plot2.html"
          style={{ width: "80%", height: "1000px", border: "none" }}
        ></iframe>
      </>
    );
  }
  return (
    <>
      <iframe src="4Plot" frameborder="0"></iframe>
    </>
  );
}
