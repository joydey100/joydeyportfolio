import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import SingleProjectPage from "./pages/SingleProjectPage/SingleProjectPage";
import About from "./pages/About/About";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

// Some Theme Changes
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Rubik"].join(","),
  },
  palette: {
    primary: {
      main: "#00CF5D",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/:id" element={<SingleProjectPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
