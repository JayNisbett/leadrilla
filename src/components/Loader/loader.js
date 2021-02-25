import React, { Component } from 'react'
import MDSpinner from 'react-md-spinner'
import { MEDIUM } from '../../constants/screen_sizes'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const COLORS = {
  color1: '#e2e2e2',
  color2: '#999999',
  color3: '#707070',
  color4: '#333333'
}

export default class Loader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      spinnerSize: this.props.size || 28,
      colors: this.props.colors || COLORS
    }
  }

  componentDidMount() {
    this.checkWindowWidth()
    window.addEventListener('resize', this.checkWindowWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWindowWidth)
  }

  // Resizes loader for different size screens screens
  checkWindowWidth = () => {
    if (!this.props.size) {
      this.setState({
        spinnerSize: window.innerWidth >= MEDIUM ? 56 : 28
      })
    }
  }

  render() {
    if (this.props.loading) {
      return (
        <span
          bp={classnames('12 text-center', this.props.bp)}
          className={classnames({ 'lr-loader': true, inline: this.props.inline })}
        >
          <MDSpinner size={this.state.spinnerSize} {...this.state.colors} />
        </span>
      )
    } else {
      return this.props.children || null
    }
  }
}

Loader.defaultProps = {
  loading: false
}

Loader.propTypes = {
  loading: PropTypes.bool
}
