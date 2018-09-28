import Link from "next/link";
import Layout from '../components/Layout'
import Button from '../components/Button'
import fetch from 'isomorphic-unfetch'
import { getPosts, deletePost } from '../api/posts'

const dummy = [
  {
    name: "taesu",
    title: "안녕하세요!",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
  },
  {
    name: "haneul",
    title: "hello!",
    content: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  }
]

const buttonStyle = {
  color: "palevioletred",
  margin: "5px",
  padding: "5px",
  border: "2px solid palevioletred",
  borderRadius: "3px",
  backgroundColor: "transparent",
  cursor: "pointer"
}

const deleteItem = async (seq) => {
  const req = await deletePost(seq)
  window.location.reload();
}

const ListItem = data => {
  const {seq, name, title, content} = data;
  return (
    <tr>
      <td>
        <Link as={`/p/${seq}`} href={`/post?seq=${seq}&id=${name}&title=${title}&content=${content}`}>
          <a>{title}</a>
        </Link>
      </td>
      <td>{name}</td>
      <td>
        <Button onClickCallback={() => {deleteItem(seq)}} text="Delete"/>
        <Link as={`/w/${seq}`} href={`/write?seq=${seq}&id=${name}&title=${title}&content=${content}`}>
          {/* <Button text="Edit"/> */}
          <button style={buttonStyle}>Edit</button>
        </Link>
      </td>
    <style jsx>{`
      th {
        padding: 5px;
        text-align: center;
        border-bottom: 1px solid #ddd;
      }
      tr:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      td {
        padding: 5px;
        text-align: center;
        border-bottom: 1px solid #ddd;
      }
      a {
        text-decoration: none;
        color: palevioletred;
      }
    `}</style>
    </tr>
  )
}

const Index = (props) => (
  <Layout>
    <div>BOARD</div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((data, index) =>
          <ListItem key={index}
                    seq={data.seq}
                    name={data.id}
                    title={data.title}
                    content={data.content} />
        )}
      </tbody>
    </table>
    <Link href="/write">
      {/* <Button text="Write"/> */}
      <button style={buttonStyle}>Write</button>
    </Link>
    <style jsx>{`
      table {
        border-collapse: collapse;
        width: 100%;
        margin: 20px 0;
      }
      div {
        font-size: 30pt;
        text-align: center;
        margin: 20px 0;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await getPosts()
  const data = await res.json()
  
  // console.log(`${JSON.stringify(data)}`)

  return {
    data
  }
}

export default Index;
