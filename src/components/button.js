/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { label, id, handleChange } = this.props;
    return (
      <input type="button" id={id} value={label} onClick={handleChange} />
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
