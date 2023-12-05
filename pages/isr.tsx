import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ParsedUrlQuery } from 'querystring';

type ISRProps = {
  message: string;
};

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>ISR</title>
        <link rel="icon" href="/src/app/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページです</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp} に getStaticProps 実行された`;
  console.log(message);
  return {
    props: {
      message,
    },
    revalidate: 10,
  };
};

export default ISR;
