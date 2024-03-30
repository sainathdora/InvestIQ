// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import DummyData from "../../../public/dummy/dummy.json";
let data = [
  {
    id: 1,
    name: "TCS",
  },
  {
    id: 2,
    name: "Bajaj",
  },
  {
    id: 3,
    name: "Reliance",
  },
  {
    id: 4,
    name: "Adani Power",
  },
];
export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ name: "John Doe" });
  } else {
    console.log(DummyData);
    res.status(200).json(DummyData);
  }
}
