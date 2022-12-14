import Head from 'next/head'
import { useRouter } from 'next/router'
import Logo from '@/components/Logo'

export type TemplateProps = {
  children: JSX.Element
}

const Template = ({ children }: TemplateProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center px-3 w-full min-h-screen">
      <Head>
        <title>MovieApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='pt-4 w-full xs:w-[700px] h-screen md:w-[768px] lg:w-[1024px]'>
        <div data-testid="logo" className='mb-4 cursor-pointer' onClick={() => router.push('/')}>
          <Logo />
        </div>

        <div>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Template
