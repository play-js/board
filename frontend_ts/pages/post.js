import { withRouter } from "next/router";
import { Layout } from "../components";

const Page = withRouter(props => {
  const { title, content, id } = props.router.query;

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>{id}</h2>
      <hr />
      <p>{content}</p>
      <style jsx>
        {`
          h1 {
            text-align: center;
          }
          h2 {
            color: #aaa;
            text-align: right;
          }
        `}
      </style>
    </Layout>
  );
});

export default Page;
