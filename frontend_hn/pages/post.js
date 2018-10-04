import Layout from '../components/Layout.js'
import Button from '../components/Button'
import { withRouter } from "next/router"

const Wrap = (props) => (
    <div style={props.styles}>
      {props.children}
      <style jsx>{`
        div {
            display: flex;
            justify-content: space-around;
            padding: 5px;
            background-color: rgba(0, 0, 0, 0.1);
        }
        `}</style>
    </div>
  )

const Post = (props) => (
    <Layout>
        <Wrap styles={{fontSize: 30}}>
            <div>
            {props.data.title}
            </div>
        </Wrap>
        <Wrap>
            <div>
            {props.data.id}
            </div>
        </Wrap>
        <Wrap>
            <div>
            {props.data.content}
            </div>
        </Wrap>
        <Button text="Home" onClickCallback={(data) => { window.location.replace("/"); }}/>
    </Layout>
)

Post.getInitialProps = async (context) => {
//   const { seq } = context.query
//   const res = await getPost(seq)
//   const data = await res.json()
//   console.log(`${JSON.stringify(data)}`)
const data = context.query;

  return { data }
}

export default withRouter(Post)