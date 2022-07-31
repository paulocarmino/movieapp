import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-white">
          <div className="flex flex-col justify-center items-center min-h-screen text-center layout">
            <Image
              src="/vercel.svg"
              width={48}
              height={48}
              className="text-5xl"
              alt="Vercel Logo"
            />
            <h1 className="mt-4 text-4xl font-bold">Next.js + Tailwind CSS + TypeScript Starter</h1>

            <p className="mt-2 text-sm text-gray-800">
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, PrismaJS and
              NextAuth, pre-configured with Husky.
            </p>
            <p className="group inline-flex gap-[0.25em] items-center mt-2 text-sm font-semibold text-gray-700">
              <a href="https://github.com/paulocarmino/boilerplate-nextjs">
                See the repository
              </a>
              <svg
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative transition-transform duration-200 group-hover:translate-x-0 motion-safe:-translate-x-1"
              >
                <path
                  fill="currentColor"
                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                />
                <path
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 motion-safe:-translate-x-1 origin-left"
                />
              </svg>
            </p>

            <footer className="absolute bottom-2 text-gray-700">
              © {new Date().getFullYear()} By{' '}
              <a href="https://paulocarmino.com?ref=boilerplate-nextjs">Paulo Carmino</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}
