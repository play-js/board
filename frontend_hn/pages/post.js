import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import { getPost } from '../api/posts'
import { withRouter } from "next/router";

const Post = (props) => (
    <Layout>
        <div>
            <label>
            Name:
            <br />
            {props.data.id}
            </label>
        </div>
        <div>
            <label>
            Title:
            <br />
            {props.data.title}
            </label>
        </div>
        <div>
            <label>
            Text:
            <br />
            {props.data.content}
            </label>
        </div>
    </Layout>
)

Post.getInitialProps = async (context) => {
  const { seq } = context.query
  const res = await getPost(seq)
  const data = await res.json()

  console.log(`${JSON.stringify(data)}`)

  return { data }
}

export default withRouter(Post)