import { Story, Meta } from '@storybook/react'
import MovieBox, { MovieBoxProps } from '.'

export default {
  title: 'MovieBox',
  component: MovieBox,
  argTypes: {
    cover: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    year: {
      type: 'number'
    },
    isFavorited: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: Story<MovieBoxProps> = (args) => <MovieBox {...args} />

Default.args = {
  cover: 'https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg',
  title: 'Capitã Marvel',
  year: 2019,
  isFavorited: false
}
