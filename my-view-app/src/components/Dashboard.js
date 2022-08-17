import { connect } from "react-redux";
import React from "react";
// import tweets from '../../../../../cd0547-react-chirper-app-master/src/reducers/tweets';
const mapStateToProps = ({ tweets }) => ({
  tweetIds: Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp
  ),
});
function Dashboard(props) {
  console.log(props);

  return (
    <div>
      {" "}
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {props.tweetIds.map((id) => (
          <li key={id}>
            <h2>TweetId:{id}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connect(mapStateToProps)(Dashboard);
