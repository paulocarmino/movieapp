import Link from "next/link"
import Badge from "../Badge"

const suggestions = [
  { name: 'Minions', href: '/?search=Minions' },
  { name: 'Captain Marvel', href: '/?search=Captain%20Marvel' },
  { name: 'Rambo', href: '/?search=Rambo' },
  { name: 'Mission Impossible', href: '/?search=Mission%20Impossible' },
  { name: 'Spiderman', href: '/?search=Spiderman' }
]

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-24 h-24 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
      </svg>

      <h3 className="mt-2 text-base font-bold text-gray-100">Do a search!</h3>
      <p className="mt-1 text-sm text-gray-400">Search for a movie above, or try any of the suggestions below:</p>

      <div className="mt-6 w-full text-center lg:max-w-[500px]">
        {suggestions.map((suggestion, index) => (
          <Badge key={index}>
            <Link href={suggestion.href}>
              {suggestion.name}
            </Link>
          </Badge>
        ))}
      </div>
    </div>
  )
}
export default EmptyState
