import { Fragment } from "react";
import css from "styled-jsx/css";

function getButtonStyles(props) {
  const { fullWidth, color, half } = props;

  return css.resolve`
    button {
      flex: ${fullWidth ? 1 : 0};
      background-color: ${color ? color : "rgb(20, 185, 214)"};
      height: 40px;
      min-width: ${half ? "100px" : "200px"};
      font-size: 20px;
      font-weight: 600;
      outline: none;
      border: none;
      border-radius: 4px;
      color: white;
      font-family: 'Noto Sans KR', 'Nanum Myeongjo', sans-serif;
      cursor: pointer;
    }
  `;
}

export default props => {
  const { onClick, children } = props;
  const { className, styles } = getButtonStyles(props);

  return (
    <Fragment>
      <button className={className} onClick={onClick}>
        {children}
      </button>
      {styles}
    </Fragment>
  );
};
