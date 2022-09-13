/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { label, id } = this.props;
    return (
      <input type="button" value={label} id={id} />
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
