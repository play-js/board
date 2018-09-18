import Link from "next/link";
import Layout from "../components/Layout";

function getPosts() {
  return [
    {
      id: "test123",
      title: "타이틀이다ㅏㅏㅏ1",
      content: "하이루~"
    },
    {
      id: "대건",
      title: "타이틀이다ㅏㅏㅏ2",
      content: "하이루"
    },
    {},
    {},
    {},
    {
      id: "james",
      title: "타이틀이다ㅏㅏㅏ3",
      content: "hello"
    }
  ];
}

const PostLink = props => {
  console.log(props.post);

  return (
    <li>
      <Link href={`/post?title=${props.title}?post=${props.post}`}>
        <a>{props.post.title}</a>
      </Link>
    </li>
  );
};

const Index = () => (
  <Layout>
    <h1>게시판</h1>
    <ul>
      {getPosts().map((post, index) => {
        console.log(post);
        return post.title ? (
          <PostLink key={index} post={post} title={post.title}>
            <a>{post.title}</a>
          </PostLink>
        ) : null;
      })}
    </ul>
    <Link href="/write">
      <button>게시물 작성</button>
    </Link>
  </Layout>
);
//
export default Index;
