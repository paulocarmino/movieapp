import { Story, Meta } from '@storybook/react'
import { MdOutlinePoll } from 'react-icons/md'

import StatGroup, { StatGroupProps } from '.'

export default {
  title: 'StatGroup',
  component: StatGroup,
  argTypes: {
    title: {
      type: 'string'
    },
    value: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta


export const Default: Story<StatGroupProps> = (args) => <StatGroup {...args} icon={<MdOutlinePoll size={20} />} />

Default.args = {
  title: "Vote Average",
  value: "7.9"
}
