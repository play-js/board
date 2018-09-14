import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
    <Layout>
        <div>
            <label>
            Name:
            <br />
            {props.data.name}
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

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://mugle.org/PilotBoard/select/${id}`)//변경
  const data = await res.json()

  console.log(`Fetched data: ${data.name}`)
  console.log(`Fetched data: ${context}, ${context.query}`)

  return { data }
}

export default Post