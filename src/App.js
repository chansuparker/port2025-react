import React from "react";

const App = () => {
    return <div>App</div>;
};

export default App;

// import React from "react"; : 이 부분은 리액트를 사용하기 위해 리액트 라이브러리를 불러오고 있습니다. 이렇게 하면 리액트의 기능과 컴포넌트를 사용할 수 있습니다.
// const App = () => { ... }; : App이라는 이름의 상수(const)를 선언하고, 이는 화살표 함수(arrow function)로 정의된 함수형 컴포넌트입니다. 함수형 컴포넌트는 입력(props)을 받아서 화면에 렌더링할 JSX 요소를 반환하는 역할을 합니다.
// return <div>App</div> : 함수형 컴포넌트에서 반환하는 JSX 요소입니다. JSX는 JavaScript XML의 약자로, 리액트에서 컴포넌트의 모양을 정의하는 데 사용됩니다. 이 경우 <div> 요소로 "App"이라는 텍스트를 감싸고 있습니다.
// export default App; : App 컴포넌트를 다른 파일에서 재사용할 수 있도록 내보내기(export) 설정을 하고 있습니다.
// 