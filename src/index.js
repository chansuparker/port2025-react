import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);
//const root = ReactDOM.createRoot(document.getElementById("root")); : createRoot() 메서드를 사용하여 렌더링할 Root(최상위) 컨테이너를 생성합니다. 여기서 document.getElementById("root")는 HTML 파일에서 id가 "root"인 요소를 선택하는 것으로, 리액트 애플리케이션이 이 요소 내부에 렌더링될 것입니다.
