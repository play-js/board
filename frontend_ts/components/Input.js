export default props => {
  const { chilren } = props;
  return (
    <div>
      <input {...props}>{chilren}</input>
      <style jsx>
        {`
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            min-width: 200px;
            flex: 1;
          }
          input {
            outline: none;
            border: none;
            flex: 1;
            align-self: stretch;
            font-size: 16px;
            padding: 8px 16px;
          }
        `}
      </style>
    </div>
  );
};
