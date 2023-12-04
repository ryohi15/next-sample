import { GetStaticProps, NextPage, NextPageContext } from "next";

import Head from "next/head";

type SSGProps = {
  message: string
}

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props
  return (
    <div>
      <Head>
        <title>SSG</title>
        <link rel="icon" href="../src/app/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページです
        </p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<SSGProps> =async (constext) => {
  const timestamp = new Date().toLocaleDateString()
  const message = `${timestamp} に getStaticProps 実行された`
  console.log(message);
  return {
    props: {
      message
    }
  }
}

export default SSG