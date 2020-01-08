import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      안녕하세요 제이름은{name}
      <br />
      칠드런은{children}
      <br />
      제가 가장 좋아하는 숫자는 {favoriteNumber}
    </div>
  );
};

export default MyComponent;

MyComponent.defaultProps = {
  name: "기본이름"
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};
