import React, { Children, Component } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from './ThemeContext'

export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    theme: {}
  }

  render() {
    return (
      <ThemeContext.Provider value={this.props.theme}>
        {Children.only(this.props.children)}
      </ThemeContext.Provider>
    )
  }
}
