import Button from "../Button"

export type IsErrorProps = {
  action?: () => void
}

const IsError = ({ action = () => { } }: IsErrorProps) => {
  return (
    <div className='my-10 text-center'>
      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-24 h-24 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      <h3 className="mt-2 text-sm font-medium text-gray-100">Error while searching!</h3>
      <p className="mt-1 text-sm text-gray-400">No results found for you search term.</p>

      <div className='flex justify-center items-center my-4 h-8'>
        <Button data-testid="action-button" onClick={() => action()}>Try again</Button>
      </div>
    </div>
  )
}
export default IsError
