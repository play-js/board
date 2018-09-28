const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  color: "palevioletred"
}

const Layout = (props) => (
  <div style={layoutStyle}>
    {props.children}
  </div>
)

export default Layout