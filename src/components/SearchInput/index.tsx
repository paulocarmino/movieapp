import React from 'react'
import { TbSearch } from 'react-icons/tb'

const SearchInput = React.forwardRef<HTMLInputElement>(({ ...rest }, ref) => {
  return (
    <div className="flex items-center w-full">
      <div className="w-full">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <TbSearch className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            ref={ref}
            id="search"
            name="search"
            className="block py-2 pr-3 pl-10 w-full text-sm placeholder:text-gray-500 text-gray-900 focus:text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none sm:text-sm"
            placeholder="Search movies..."
            type="search"
            {...rest}
          />
        </div>
      </div>
    </div>
  )
})

export default SearchInput
