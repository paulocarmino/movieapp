import { Story, Meta } from '@storybook/react'
import SearchInput from '.'

export default {
  title: 'SearchInput',
  component: SearchInput,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = () => <SearchInput />
