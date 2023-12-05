import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>SSR</title>
        <link rel="icon" href="/src/app/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは SSR によってアクセス時にサーバーで描画されたページです
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (c) => {
  const ts = new Date().toLocaleString();
  const message = `${ts} にこのページのgetServerSidePropsが実行された`;
  console.log(message);
  return {
    props: {
      message,
    },
  };
};

export default SSR;
