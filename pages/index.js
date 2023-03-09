import { Row, Col } from "react-bootstrap";
import useSWR from 'swr'

import { getAllPosts } from "lib/api";
import { usePosts } from "hooks/use-posts";

import GridItem from "components/grid-item";
import Layout from "components/layout";
import Intro from "components/intro";

export default function Home({ posts }) {
  const { data, isError, isLoading } = usePosts();

  if (isError) return <div>Алдаа гарлаа</div>;
  if (!data) return <div>Ачаалж байна...</div>;

  return (
    <Layout>
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />

      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Row className="mb-5">
        {posts.map((post) => (
          <Col md="4">
            <GridItem post={post} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};