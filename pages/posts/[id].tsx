import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ParsedUrlQuery } from 'querystring';

type PostProps = {
  id: string;
};

// NextPage は Next.js の Pages 向けの型
// NextPage<Props> にて props が入ってくる page であることを明示している
const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ margin: '24px' }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="../../src/app/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{`/posts/${id}に対応するページです`}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ];

  return { paths, fallback: false };
};

interface PostParams extends ParsedUrlQuery {
  id: string;
}
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (
  context,
) => {
  return {
    props: {
      id: context.params!['id'],
    },
  };
};

export default Post;
