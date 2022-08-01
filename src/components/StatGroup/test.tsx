import { render, screen } from '@testing-library/react'
import { MdOutlinePoll } from 'react-icons/md'

import StatGroup from '.'

describe('<StatGroup />', () => {
  it('should render the heading', () => {
    const { container } = render(<StatGroup title="Popularity" value="82.3%" icon={<MdOutlinePoll size={20} />} />)

    expect(screen.getByText('Popularity')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
