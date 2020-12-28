import React from "react";
import { Card, Button, Row } from "react-bootstrap";

import "./luanch-filter.css";

function LaunchFilter({ filters, updateApiFilters }) {

  const uniqueLaunchYears = new Array(16).fill(0).map((_, index) => 2006 + index);

  return (
    <Card className="launch-filter-card">
      <Card.Body>
        <Card.Title className="launch-filter-header">
          Filters
        </Card.Title>
        <Card.Text className="launch-filter-heading mt-3">
          Launch Year
      </Card.Text>

        <Row>
          <div className="launch-filter-button-container">
            {uniqueLaunchYears.map((year) => {
              return (
                <Button
                  key={year}
                  className="launch-filter-button"
                  variant={
                    filters.launch_year ===
                      year.toString()
                      ? "success"
                      : "outline-success"
                  }
                  value={year}
                  onClick={(e) =>
                    updateApiFilters(
                      "launch_year",
                      e.target.value
                    )
                  }
                >
                  {year}
                </Button>
              );
            })}
          </div>
        </Row>

        <Card.Text className="launch-filter-heading">
          Successful Launch
      </Card.Text>

        <div className="launch-filter-button-container">
          <Button
            className="launch-filter-button"
            variant={
              filters.launch_success === "true"
                ? "success"
                : "outline-success"
            }
            onClick={(e) =>
              updateApiFilters(
                "launch_success",
                e.target.value
              )
            }
            value="true"
          >
            True
          </Button>

          <Button
            className="launch-filter-button"
            variant={
              filters.launch_success === "false"
                ? "success"
                : "outline-success"
            }
            onClick={(e) =>
              updateApiFilters(
                "launch_success",
                e.target.value
              )
            }
            value="false"
          >
            False
          </Button>
        </div>

        <Card.Text className="launch-filter-heading">
          Successful Landing
      </Card.Text>
        <div className="launch-filter-button-container">
          <Button
            className="launch-filter-button"
            variant={
              filters.land_success === "true"
                ? "success"
                : "outline-success"
            }
            onClick={(e) =>
              updateApiFilters("land_success", e.target.value)
            }
            value="true"
          >
            True
          </Button>

          <Button
            className="launch-filter-button"
            variant={
              filters.land_success === "false"
                ? "success"
                : "outline-success"
            }
            onClick={(e) =>
              updateApiFilters("land_success", e.target.value)
            }
            value="false"
          >
            False
          </Button>
        </div>
      </Card.Body>
    </Card>

  );
}

export default LaunchFilter;
