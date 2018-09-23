import Link from "next/link";
import Layout from "../components/Layout";
import Button from "../components/Button";
import fetch from "isomorphic-unfetch";

const PostLink = props => {
  // console.log(props.post);

  return (
    <li>
      <Link href={`/post?title=${props.title}?post=${props.post}`}>
        <a>{props.post.title}</a>
      </Link>
      <div>
        <Button onClick={() => console.log(123123)}>수정</Button>
        <Button color="red">삭제</Button>
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
};

const Index = props => (
  <Layout>
    <h1>게시판</h1>
    <ul>
      {props.data.map((post, index) => {
        return post.title ? (
          <PostLink key={index} post={post} title={post.title}>
            <a>{post.title}</a>
          </PostLink>
        ) : null;
      })}
    </ul>
    <Link href="/write">
      <Button>게시물 작성</Button>
    </Link>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://mugle.org/PilotBoard/select");
  const data = await res.json();

  return { data };
};

export default Index;
