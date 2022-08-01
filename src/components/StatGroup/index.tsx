
export type StatGroupProps = {
  icon: JSX.Element
  title: string
  value: string
}

const StatGroup = ({ icon, title, value }: StatGroupProps) => (
  <span className="group inline-flex relative z-0 max-h-[38px] rounded-md shadow-sm">
    <div
      className="inline-flex relative focus:z-10 items-center py-2 px-4 text-xs font-medium text-gray-100 rounded-l-md border border-gray-100 focus:outline-none lg:text-sm"
    >
      <div className="mr-2 -ml-1 text-gray-100">
        {icon}
      </div>
      {title}
    </div>
    <div
      className="inline-flex relative focus:z-10 items-center py-2 px-3 -ml-px text-sm font-medium text-gray-100 rounded-r-md border border-gray-100 focus:outline-none"
    >
      {value}
    </div>
  </span>
)

export default StatGroup
