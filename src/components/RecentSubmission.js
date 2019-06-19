import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const {recentLine, showContent} = props;

  if(recentLine && showContent) {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{recentLine}</p>
    </div>
  );
  } else {
    return null;
  }
}

export default RecentSubmission;
