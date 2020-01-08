import React from "react";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요 제이름은{name}
      <br />
      칠드런은{children}
    </div>
  );
};

export default MyComponent;

MyComponent.defaultProps = {
  name: "기본이름"
};
