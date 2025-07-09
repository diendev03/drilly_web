// Định nghĩa router chính
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Home</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
