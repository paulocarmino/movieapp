import { Story, Meta } from '@storybook/react'
import IsError from '.'

export default {
  title: 'IsError',
  component: IsError,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = () => <IsError />
