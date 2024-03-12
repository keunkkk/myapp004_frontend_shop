import { Route, Routes } from "react-router-dom";
import "./App.css";
import BaseLayout from "./components/layout/BaseLayout";
import BoardList from "./components/board/BoardList";

function App() {
  return (
    <div className="container">
      <h1>My Shop</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="board/list/:currentPage" element={<BoardList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
