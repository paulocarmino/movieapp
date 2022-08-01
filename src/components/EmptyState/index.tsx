export type EmptyStateProps = {
  error?: boolean
}

const EmptyState = ({ error = false }: EmptyStateProps) => {

  if (error) {
    return (
      <div className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-24 h-24 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <h3 className="mt-2 text-sm font-medium text-gray-100">Erro ao pesquisar!</h3>
        <p className="mt-1 text-sm text-gray-400">Nenhum resultado encontrado para o termo pesquisado.</p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-24 h-24 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
      </svg>

      <h3 className="mt-2 text-sm font-medium text-gray-100">Sem dados!</h3>
      <p className="mt-1 text-sm text-gray-400">Nenhum resultado para mostrar no momento.</p>
    </div>
  )
}
export default EmptyState
