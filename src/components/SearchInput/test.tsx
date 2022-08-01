import { render, screen } from '@testing-library/react'

import SearchInput from '.'

describe('<SearchInput />', () => {
  it('deve exibir o component corretamente', () => {
    const { container } = render(<SearchInput />)

    expect(screen.getByPlaceholderText('Search movies...')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
