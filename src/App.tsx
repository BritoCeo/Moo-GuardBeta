import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhone11ProX from "./pages/IPhone11ProX";
import IPhone11ProX1 from "./pages/IPhone11ProX1";
import IPhone11ProX2 from "./pages/IPhone11ProX2";
import IPhone11ProX3 from "./pages/IPhone11ProX3";
import IPhone11ProX4 from "./pages/IPhone11ProX4";
import IPhone11ProX5 from "./pages/IPhone11ProX5";
import IPhone11ProX6 from "./pages/IPhone11ProX6";
import IPhone11ProX7 from "./pages/IPhone11ProX7";
import IPhone11ProX8 from "./pages/IPhone11ProX8";
import IPhone11ProX9 from "./pages/IPhone11ProX9";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-x-14":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-x-25":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-x-13":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-x-16":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-x-17":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-x-18":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-x-19":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-x-20":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-x-23":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhone11ProX />} />
      <Route path="/iphone-11-pro-x-14" element={<IPhone11ProX1 />} />
      <Route path="/iphone-11-pro-x-25" element={<IPhone11ProX2 />} />
      <Route path="/iphone-11-pro-x-13" element={<IPhone11ProX3 />} />
      <Route path="/iphone-11-pro-x-16" element={<IPhone11ProX4 />} />
      <Route path="/iphone-11-pro-x-17" element={<IPhone11ProX5 />} />
      <Route path="/iphone-11-pro-x-18" element={<IPhone11ProX6 />} />
      <Route path="/iphone-11-pro-x-19" element={<IPhone11ProX7 />} />
      <Route path="/iphone-11-pro-x-20" element={<IPhone11ProX8 />} />
      <Route path="/iphone-11-pro-x-23" element={<IPhone11ProX9 />} />
    </Routes>
  );
}
export default App;
