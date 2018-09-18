import { Fragment } from "react";

export default props => {
  const { onClick, children, color = "blue" } = props;
  return (
    <Fragment>
      <button onClick={onClick}>{children}</button>
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
