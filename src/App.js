import { Route, Routes } from "react-router-dom";
import "./App.css";
import BaseLayout from "./compoents/layout/BaseLayout";
import BoardList from "./compoents/board/BoardList";
import Home from "./compoents/Home";
import BoardWrite from "./compoents/board/BoardWrite";
import BoardView from "./compoents/board/BoardView";
import BoardUpdate from "./compoents/board/BoardUpdate";

function App() {
  return (
    <div className="container">
      <h1>My Shop</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="board/list/:currentPage" element={<BoardList />} />
          <Route path="board/write" element={<BoardWrite />} />
          <Route path="board/write/:num" element={<BoardWrite />} />
          <Route path="board/view/:num" element={<BoardView />} />
          <Route path="/board/update/:num" element={<BoardUpdate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
