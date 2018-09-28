const buttonStyle = {
  color: "palevioletred",
  margin: "5px",
  padding: "5px",
  border: "2px solid palevioletred",
  borderRadius: "3px",
  backgroundColor: "transparent",
  cursor: "pointer"
}

const Button = (props) => (
  <button style={buttonStyle} onClick={props.onClickCallback}>
    {props.text}
  </button>
)

export default Button