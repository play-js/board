import { Fragment } from "react";
import css from "styled-jsx/css";

function getButtonStyles(color) {
  return css.resolve`
    button {
      background-color: rgb(20, 185, 214);
      background-color: ${color};
      height: 50px;
      width: 200px;
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
      <style jsx>
        {`
          button {
            color: ${color};
          }
        `}
      </style>
    </Fragment>
  );
};
