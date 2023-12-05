import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

type TopProps = {
  message: string;
};

const Top: NextPage<TopProps> = (props) => {
  return (
    <>
      <Link href="/ssr">Go to SSR</Link>
      <span>hello world</span>
      <p>{props.message}</p>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (constext) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp} に getStaticProps 実行された`;
  console.log(message);
  return {
    props: {
      message,
    },
    revalidate: 30,
  };
};

export default Top;
