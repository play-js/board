import Link from "next/link";
import Layout from "../components/Layout";
import Button from "../components/Button";
import fetch from "isomorphic-unfetch";

const deletePost = async seq => {
  await fetch(`http://mugle.org/PilotBoard/delete?seq=${seq}`);
};

const PostLink = ({ post: { id, seq, title, content } }) => (
  <li>
    <Link href={`/post?title=${title}&id=${id}&content=${content}`}>
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
);

Index.getInitialProps = async function() {
  const res = await fetch("http://mugle.org/PilotBoard/select");
  const data = await res.json();

  return { data };
};

export default Index;
