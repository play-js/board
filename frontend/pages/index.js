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
        <Button>수정</Button>
      </Link>
      <Button color="red" onClick={() => deletePost(seq)}>
        삭제
      </Button>
    </div>
    <style jsx>
      {`
        li {
          display: flex;
          justify-content: space-between;
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
      <h1>게시판</h1>
      <ul>
        {props.data.map((post, index) => {
          return post.title ? (
            <PostLink key={index} post={post}>
              <a>{post.title}</a>
            </PostLink>
          ) : null;
        })}
      </ul>
      <Link href="/write">
        <Button>게시물 작성</Button>
      </Link>
    </Layout>
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
