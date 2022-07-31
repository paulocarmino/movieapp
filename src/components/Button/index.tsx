import React from "react"

export type ButtonProps = {
  icon?: JSX.Element | null
} & React.ComponentPropsWithRef<'button'>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
  {
    icon,
    children,
    ...rest
  },
  ref
) => {
  return (
    <button
      ref={ref}
      type="button"
      className="inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none shadow-sm"
      {...rest}
    >
      {!!icon && (
        <div data-testid="icon-button" className="mr-2 -ml-0.5 max-h-4 max-w-4">
          {icon}
        </div>
      )}
      {children}
    </button>
  )
})

export default Button
