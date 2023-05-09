import { screen } from '@testing-library/react'

import { TestWithThemeProvider, theme } from 'theming'
import Typography from './Typography'

describe('<Typography>', () => {
  it('should render Typography correctly', () => {
    const { container } = TestWithThemeProvider(<Typography type="text">text</Typography>)
    expect(container).toBeTruthy()
  })

  // the following piece of unit test is commented out intentionally
  // due to the following: https://stackoverflow.com/a/54250578
  /* it('should render Typography with correct semantic HTML element, depending on "type" prop value', () => {
    const dummyText = 'Lorem ipsum dolor sit amet'
    const { container: textContainer } = TestWithThemeProvider(
      <Typography type="text">{dummyText}</Typography>,
    )
    const textElement = textContainer.querySelector('span')

    const { container: paragraphContainer } = TestWithThemeProvider(
      <Typography type="paragraph">{dummyText}</Typography>,
    )
    const paragraphElement = paragraphContainer.querySelector('p')

    const { container: headingContainer } = TestWithThemeProvider(
      <Typography type="h3">{dummyText}</Typography>,
    )
    const h3Element = headingContainer.querySelector('h3')

    expect(textElement).toBeInTheDocument()
    expect(paragraphElement).toBeInTheDocument()
    expect(h3Element).toBeInTheDocument()
  }) */

  it('should render Typography content correctly', () => {
    const dummyText = 'Lorem ipsum dolor sit amet'
    TestWithThemeProvider(<Typography type="text">{dummyText}</Typography>)
    const typographyElement = screen.getByText(dummyText)
    expect(typographyElement).toBeInTheDocument()
  })

  it('should render disabled content correctly and override "color" prop even if it is specified', () => {
    const dummyText = 'Lorem ipsum dolor sit amet'
    TestWithThemeProvider(
      <Typography type="paragraph" isDisabled color="blue500">
        {dummyText}
      </Typography>,
    )
    const typographyElement = screen.getByText(dummyText)
    expect(typographyElement).toHaveStyleRule('cursor', 'not-allowed')
    expect(typographyElement).toHaveStyleRule('color', theme.colors.gray300)
  })
})
