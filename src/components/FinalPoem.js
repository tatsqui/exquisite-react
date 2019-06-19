import React from 'react';
import PropTypes from 'prop-types'
import './FinalPoem.css';

const FinalPoem = (props) => {
  const {allSubmissions, revealContent, showSectionCallback} = props


  const handleButtonClicked = (event) => {
    event.preventDefault();
    console.log('hitting the button')

    showSectionCallback();
  }
  
  const generateFinalPoem = (lines) => {
    return lines.map( (line) => {
      return ( <p>{line}</p> )
    })
  }

  if (revealContent) {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
        </section>
        <section>
          {generateFinalPoem(allSubmissions)}
        </section>
      </div>
    )
    } else {
    return ( 
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" onClick={handleButtonClicked} value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    )
    }
}

FinalPoem.propTypes = {
  //...proptypes go here!
}
export default FinalPoem;
