import { Story, Meta } from '@storybook/react'
import BackButton, { BackButtonProps } from '.'

export default {
  title: 'Back Button',
  component: BackButton,
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

export const Default: Story<BackButtonProps> = (args) => <BackButton {...args} />

Default.args = {
  size: 24
}
