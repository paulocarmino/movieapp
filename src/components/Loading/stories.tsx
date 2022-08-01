import { Story, Meta } from '@storybook/react'
import Loading from '.'

export default {
  title: 'Loading',
  component: Loading,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = () => <Loading />
