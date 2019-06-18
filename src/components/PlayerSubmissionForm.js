import React, { Component } from 'react';
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

  handleSubmitButton = (event) => {
    event.preventDefault();

  }

  onValueChange = (event) => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  render() {
    const inputFields = this.props.fields.map( (field, i) => {
      if (field.key) {
        return <input key={i} name={field.key} value={this.state[field.key]} onChange={this.onValueChange} placeholder="adjective" type="text" />
      } else {
        return field
      }
    });
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{}</h3>

        <form className="PlayerSubmissionForm__form" >
          <div className="PlayerSubmissionForm__poem-inputs">
          {inputFields}
          </div>
          <div className="PlayerSubmissionForm__submit">
            <input type="submit" onSubmit={this.handleSubmitButton} value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
