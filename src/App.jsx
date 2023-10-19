import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import ReactPdf from "./components/ReactPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ImgGallery from "./page/ImgGallery";
import Land from "./page/Product";
import TopLoadingBar from "./components/TopLoadingBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to="/userDashboard"> User </Link>
      <br />
      <Link to="/product"> Product </Link>

      <br />
      <Link to="/about"> About </Link>

      <br />

      <hr />
    </>
  );
}

export default App;
