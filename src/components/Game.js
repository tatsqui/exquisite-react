import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      finalSubmission: [],
      round: 1,
      revealSection: false,
    }
  }

  addRecentSubmission = (newLine) => {
    const newState = this.state
    newState.finalSubmission.push(newLine)
    newState.round += 1

    this.setState(newState)
    
  }

  mostRecentLine = () => {
    const recentLineIndex = this.state.finalSubmission.length - 1;
    const mostRecentLine = this.state.finalSubmission[recentLineIndex];

    return mostRecentLine;
  }

  showSection = () => {
    let newState = this.state
    newState.revealSection = true;
    
    this.setState(newState);
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    // wave 3: make components hide when final poem is submitted. 

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>
        
        <RecentSubmission 
          recentLine={this.mostRecentLine()}
          showContent={!this.state.revealSection}
        />

        <PlayerSubmissionForm 
          fields={FIELDS} 
          addSubmissionCallback={this.addRecentSubmission}
          round={this.state.round}
          showContent={!this.state.revealSection}
          showSectionCallback={this.showSection}
        />

        <FinalPoem 
          allSubmissions={this.state.finalSubmission} 
          showContent={this.state.revealSection} 
          showSectionCallback={this.showSection}
        />

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

Game.propTypes = {
  addRecentSubmission: PropTypes.func,
  fields: PropTypes.array,
  round: PropTypes.number
}
export default Game;
