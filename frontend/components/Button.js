import { Fragment } from "react";
import css from "styled-jsx/css";

function getButtonStyles(color) {
  return css.resolve`
    button {
      flex: 1;
      background-color: ${color ? color : "rgb(20, 185, 214)"};
      height: 40px;
      min-width: 200px;
      font-size: 20px;
      outline: none;
      border: none;
      color: white;
      font-family: 'Noto Sans KR', 'Nanum Myeongjo', sans-serif;
      cursor: pointer;
    }
  `;
}

export default props => {
  const { onClick, children, color } = props;
  const { className, styles } = getButtonStyles(color);

  return (
    <Fragment>
      <button className={className} onClick={onClick}>
        {children}
      </button>
      {styles}
    </Fragment>
  );
};
