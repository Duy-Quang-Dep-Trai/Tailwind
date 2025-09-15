// import { Routes, Route } from "react-router-dom";
// import Layout from "./page/Layout.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./page/Home/Home.jsx";

export default function App() {
  return (
    <div className="bg-[#020D07] min-h-screen flex flex-col">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
// // import Home from "./page/Home.jsx";
// // import About from "./page/About/About.jsx";
// // import ProductPages from "./page/Product/ProductPages.jsx";
// // import History from "./page/History/History.jsx";
// // import Contact from "./page/Contact/Contact.jsx";

// export function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         {/* <Route index element={<Home />} /> */}
//         {/* <Route path="product" element={<ProductPages />} />
//         <Route path="about" element={<About />} />
//         <Route path="history" element={<History />} />
//         <Route path="contact" element={<Contact />} /> */}
//       </Route>
//     </Routes>
//   );
// }
