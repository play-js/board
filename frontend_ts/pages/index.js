import Head from "next/head";
import Link from "next/link";
import { Layout, Button } from "../components";
import fetch from "isomorphic-unfetch";
import { server } from "../config.json";
import dummy from "../dummy.json";

const deletePost = async seq => {
  await fetch(`${server.url}/delete?seq=${seq}`, {
    mode: "no-cors"
  });
  alert("삭제 완료!");
  window.location.reload();
};

const PostLink = ({ post: { id, seq, title, content } }) => (
  <li>
    <Link
      as={`/p/${seq}`}
      href={`/post?title=${title}&id=${id}&content=${content}`}
    >
      <a>{title}</a>
    </Link>
    <div>
      <Link href={{ pathname: "write", query: { id, title, seq, content } }}>
        <Button color="#12b886" half>
          Edit
        </Button>
      </Link>
      <Button color="red" half onClick={() => deletePost(seq)}>
        Delete
      </Button>
    </div>
    <style jsx>
      {`
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
          background-color: white;
          padding: 8px 16px;
        }
        li:hover {
          background-color: #bbb;
        }
        a {
          text-decoration: none;
          color: black;
        }
      `}
    </style>
  </li>
);

const Index = props => (
  <React.Fragment>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+KR"
        rel="stylesheet"
      />
    </Head>
    <Layout>
      <h1>
        Board
        <Link href="/write">
          <Button>Write</Button>
        </Link>
      </h1>
      <ul>
        {props.data.map((post, index) => {
          return post.title ? (
            <PostLink key={index} post={post}>
              <a>{post.title}</a>
            </PostLink>
          ) : null;
        })}
      </ul>
    </Layout>
    <style jsx>
      {`
        h1 {
          display: flex;
          justify-content: space-between;
        }
      `}
    </style>
  </React.Fragment>
);
Index.getInitialProps = async function() {
  const isDummyMode = process.env.DUMMY_MODE;

  if (isDummyMode) {
    return { data: dummy };
  } else {
    try {
      const res = await fetch(`${server.url}select`, {
        mode: "no-cors"
      });
      // console.log(res);
      const data = await res.json();

      return { data };
    } catch (error) {
      console.log("#############");
      console.error(error);
      console.log("#############");
    }
  }
};

export default Index;
