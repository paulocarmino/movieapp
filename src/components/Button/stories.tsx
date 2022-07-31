import { Story, Meta } from '@storybook/react'
import { AiOutlineHeart } from 'react-icons/ai'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: {},
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args}></Button>

Default.args = {
  children: 'Pesquisar'
}


export const WithIcon: Story = (args) => <Button icon={<AiOutlineHeart />} {...args}></Button>

WithIcon.args = {
  children: 'Add aos favoritos'
}
