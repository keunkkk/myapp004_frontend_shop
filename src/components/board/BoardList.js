import React from "react";
import { useParams } from "react-router-dom";
//redux

// http://localhost:3000/board/list/1
// http://localhost:3000/board/list/:currentPage
// const {currentPage} = useParams();
const BoardList = () => {
  const { currentPage } = useParams();

  return <div>게시판 리스트</div>;
};

export default BoardList;
