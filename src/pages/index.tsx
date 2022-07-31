import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Head>
        <title>MovieApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>MovieApp!</h1>
      </main>
    </div>
  )
}
