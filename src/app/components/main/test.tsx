import { render, screen } from '@testing-library/react'
import Main from '.'

describe(`<Main />`, () => {
  it(`should render`, () => {
    // renderiza o componente
    const { container } = render(<Main />)

    // busca o elemento e verifica a existencia dele
    expect(
      screen.getByRole(`heading`, { name: /react aula/i })
    ).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
