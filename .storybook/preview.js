import { addDecorator } from '@storybook/react'

addDecorator((story) => {
  console.log('Wont work')
  return story()
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}