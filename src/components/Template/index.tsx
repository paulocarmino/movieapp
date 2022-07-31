import Head from 'next/head'
import Logo from '@/components/Logo'

export type TemplateProps = {
  children: JSX.Element
}

const Template = ({ children }: TemplateProps) => {
  return (
    <div className="flex flex-col justify-center items-center px-3 w-full min-h-screen">
      <Head>
        <title>MovieApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='pt-4 w-full xs:w-[700px] h-screen md:w-[768px] lg:w-[1024px]'>
        <div className='mb-4'>
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
