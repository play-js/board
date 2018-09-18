import { withRouter } from "next/router";
import Layout from "../components/Layout";

const Page = withRouter(props => {
  console.log(props.router.query.post);
  return (
    <Layout>
      <h1>{props.router.query.title}</h1>
      {/* <h1>{props.router.query.post.title}</h1> */}
      {/* <p>{props.router.query.post.content}</p> */}
    </Layout>
  );
});

export default Page;
