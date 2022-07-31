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
      className="inline-flex items-center py-2 px-3 text-sm leading-4 text-gray-400 hover:bg-gray-800 rounded-md border border-gray-400 focus:outline-none shadow-sm"
      {...rest}
    >
      {!!icon && (
        <div data-testid="icon-button" className="mr-2 -ml-0.5 max-h-5 max-w-5">
          {icon}
        </div>
      )}
      {children}
    </button>
  )
})

export default Button
