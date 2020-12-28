import React from "react";
import { Card } from "react-bootstrap";
import "./launches-card.css";

function LaunchCard({ details }) {
  const {
    flight_number,
    mission_name,
    mission_id,
    launch_year,
    launch_success,
    links,
    rocket,
  } = details;
  const imgSrc = links.mission_patch_small;
  const land_success = rocket.first_stage.cores[0].land_success;
  
  return (
    <Card className="launch-details-card">
      <div key={flight_number}>
        <div>
          <img
            src={imgSrc}
            alt="mission patch img not available on api"
            className="launch-mission-image"
          />
        </div>
        <div className="launch-mission-name-flight-number">
          {mission_name} #{flight_number}
        </div>
        <div className="launch-detail-label">
          Mission Ids:{" "}
          {mission_id.length > 0 && <ul>
            {" "}
            {mission_id.map(mission => <li key={mission} className="launch-detail-value">{mission}</li>)}
          </ul>}
        </div>
        <div className="launch-detail-label">
          Launch Year:{" "}
          <span className="launch-detail-value">{launch_year}</span>
        </div>
        <div className="launch-detail-label">
          Successful Launch:{" "}
          <span className="launch-detail-value">
            {launch_success ? "true" : "false"}
          </span>
        </div>
        <div className="launch-detail-label">
          Successful Landing:{" "}
          <span className="launch-detail-value">
            {land_success ? "true" : "false"}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default LaunchCard;
