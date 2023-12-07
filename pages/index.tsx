import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import styles from '../src/app/page.module.css';
import styled from 'styled-components';

const H1 = styled.h1`
  color: red;
`;

type TopProps = {
  message: string;
};

const Top: NextPage<TopProps> = (props) => {
  return (
    <>
      <div className={styles.container}>
        y
        <main className={styles.main}>
          <H1>
            Welcome to <a href="https://nextjs.org">Next.js!1</a>
          </H1>
          <Link href="/ssr">Go to SSR</Link>
          <p>{props.message}</p>
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
