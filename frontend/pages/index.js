import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <Link href="/write">
      <button>게시물 작성</button>
    </Link>
  </Layout>
);
//
export default Index;
