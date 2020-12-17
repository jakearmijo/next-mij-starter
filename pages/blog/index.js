import Head from "next/head";
import Link from "next/link";
function Home() {
  return (
    <>
      <Head>
        <title>Jake's Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>Welcome to my bl0g Human Reader!</div>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </>
  );
}
export default Home;
