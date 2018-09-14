import Link from "next/link";
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

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

const deleteItem = () => {
  
}

const editItem = () => {
  
}

const tdStyle = {
  padding: '15px',
  border: '1px solid #ddd',
  textAlign: 'left'
}

const ListItem = data => {
  return (
    <tr>
      <td style={tdStyle}>
        <Link as={`/p/${data.id}`} href={`/post?id=${data.id}`}>
          <a>{data.title}</a>
        </Link>
      </td>
      <td style={tdStyle}>{data.name}</td>
      <td style={tdStyle}>
        <button onClick={deleteItem()}>삭제</button>
        <button onClick={editItem()}>수정</button>
      </td>
    </tr>
  )
}

const Index = (props) => (
  <Layout>
    <table>
      <thead>
        <tr>
          <th style={{width: '70%'}}>Title</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((data, index) =>
          <ListItem key={index}
                    id={data.id}
                    name={data.id}
                    title={data.title} />
        )}
      </tbody>
    </table>
    <Link href="/write">
      <button>게시물 작성</button>
    </Link>
    <style jsx>{`
      table {
        border-collapse: collapse;
        width: 100%;
        border: 1px solid #ddd;
      }
      td {
        padding: 15px;
        border: 1px solid #ddd;
        text-align: left;
      }
      th {
        padding: 15px;
        border: 1px solid #ddd;
        text-align: left;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('http://mugle.org/PilotBoard/select')
  const data = await res.json()
  
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    data
  }
}

export default Index;
