export type BadgeProps = {
  children: JSX.Element | string
}

const Badge = ({ children }: BadgeProps) => (
  <span className="inline-flex items-center py-0.5 px-2.5 mx-1 text-xs font-medium text-gray-800 bg-gray-100 hover:bg-gray-300 rounded-full">
    {children}
  </span>
)

export default Badge
