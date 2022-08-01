import { Story, Meta } from '@storybook/react'
import MovieBox, { MovieBoxProps } from '.'

export default {
  title: 'MovieBox',
  component: MovieBox,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    movie: {
      type: undefined
    }
  }
} as Meta

export const Default: Story<MovieBoxProps> = (args) => <MovieBox {...args} />

Default.args = {
  movie: {
    id: 438148,
    poster_path: 'https://image.tmdb.org/t/p/w200//wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
    title: 'Minions: The Rise of Gru',
    release_date: '2019-09-02',
    isFavorited: false
  }
}

export const Favorited: Story<MovieBoxProps> = (args) => <MovieBox {...args} />

Favorited.args = {
  movie: {
    id: 438148,
    poster_path: 'https://image.tmdb.org/t/p/w200//wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
    title: 'Minions: The Rise of Gru',
    release_date: '2019-09-02',
    isFavorited: true
  }
}

export const WhitoutPoster: Story<MovieBoxProps> = (args) => <MovieBox {...args} />

WhitoutPoster.args = {
  movie: {
    id: 438148,
    poster_path: undefined,
    title: 'Minions: The Rise of Gru',
    release_date: '2019-09-02',
    isFavorited: false
  }
}
