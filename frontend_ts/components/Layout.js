import React from "react";

const Layout = props => {
  return (
    <React.Fragment>
      <div>{props.children}</div>

      <style jsx>
        {`
          div {
            padding: 20px;
            margin: 20px;
            background-color: #eee;
             {
              /* border: 1px solid #eee; */
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Layout;
