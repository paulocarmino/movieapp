import { Story, Meta } from '@storybook/react'
import Badge from '.'

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Badge {...args}>Example</Badge>

Default.args = {
  children: 'Example'
}
