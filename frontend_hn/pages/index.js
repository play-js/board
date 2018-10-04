import Link from "next/link";
import Layout from '../components/Layout'
import Button from '../components/Button'
import { getPosts, deletePost } from '../api/posts'

const dummy = [
  {
    "id": "id1",
    "seq": "1",
    "title": "title1",
    "content": "content1"
  },
  {
    "id": "id2",
    "seq": "2",
    "title": "title2",
    "content": "content2"
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
  try {
    const res = await getPosts()
    console.log("res : ", res)
    const data = await res.json()
    
    console.log(`${JSON.stringify(data)}`)

    return {
      data
    }
  } catch (error) {
    console.error(error);
    return {
      data: dummy
    }
  }
}

export default Index;
