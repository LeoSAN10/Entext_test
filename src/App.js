import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./Routes/routes";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { MainPage } from "./Pages/MainPage/MainPage"
import {ImagePage} from "./Pages/ImagePage/ImagePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
        <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
        <Route path={`${ROUTES.IMAGE_PAGE}/:imageId`} element={<ImagePage />} />
      </Routes>
    </div>
  );
}

export default App;
