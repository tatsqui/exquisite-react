import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    const getFields = {}
    props.fields.forEach(field => {
      if (field.key) {
        getFields[field.key] = '';
      }
    })
    this.state = getFields
  }

  resetForm = () => {
    console.log('resetting form...')
    let newState = this.state
    Object.keys(this.state).forEach(key => { newState[key] = '' })
    
    this.setState(newState)
  }

  handleSubmitButton = (event) => {
    event.preventDefault();

    let newState = this.state
   
    let words = Object.values(newState)
    let completeSentence = `The ${words.slice(0, 4).join(' ')} the ${words.slice(4, words.length).join(' ')}.`
    console.log(completeSentence)

    this.props.addSubmissionCallback(completeSentence)
    this.resetForm();
  }

  onValueChange = (event) => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  turnFieldPink = (value) => {
    if (value.length < 1) {
      return 'PlayerSubmissionFormt__input--invalid';
    }
  }

  render() {

    
    const inputFields = this.props.fields.map( (field, i) => {
      if (field.key) {
        return <input 
          key={i} 
          name={field.key} 
          value={this.state[field.key]} 
          onChange={this.onValueChange} // could use a closure instead?...
          className={this.turnFieldPink(this.state[field.key])}
          placeholder={field.placeholder} type="text" />
      } else {
        return field
      }
    });
   
    if (this.props.showContent) {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.round}</h3>

        <form onSubmit={this.handleSubmitButton} className="PlayerSubmissionForm__form" >
          <div className="PlayerSubmissionForm__poem-inputs">
          {inputFields}
          </div>
          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
    } else {
      return null;
    }
  }
}

PlayerSubmissionForm.propTypes = {
  fields: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.shape({
      adj1: PropTypes.string.isRequired,
      adj2: PropTypes.string.isRequired,
      adv: PropTypes.string.isRequired,
      verb: PropTypes.string.isRequired,
      noun1: PropTypes.string.isRequired,
      noun2: PropTypes.string.isRequired,
    }))
  ])
}
export default PlayerSubmissionForm;
