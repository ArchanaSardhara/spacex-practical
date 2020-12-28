import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import { loadPrograms } from '../../redux/action';
import LaunchFilter from './luanch-filter/luanch-filter';
import LaunchCard from './launch-card/launches-card';

import './launches.css';

const LaunchComponent = (props) => {
  const [rendered, setRendered] = useState(false);
  const [filters, setFilters] = useState({
    limit: 100
  });

  useEffect(() => {
    if (!rendered) {
      setRendered(true);
      props.onLoadPrograms(filters);
    }
  }, [rendered, filters, props])

  const updateApiFilters = (type, value) => {
    const data = {
      ...filters,
      [type]: value,
    };
    if (filters[type] === value) {
      delete data[type];
    }
    setFilters(data);
    props.onLoadPrograms(data);
  }



  if (props.fetching) {
    return <div className="launch-loader-container">
      <div className="launch-loader-box loader">
      </div>
    </div>
  }

  else {

    return (
      <div className="launch">
        <h1 className="launch-header">SpaceX Launch Programs</h1>
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={3}>
              <LaunchFilter filters={filters} updateApiFilters={updateApiFilters} />
            </Col>

            <Col xs={12} sm={12} md={6} lg={9}>
              <div className="d-flex flex-wrap">
                {props.programList.map((details, index) => {
                  return (
                    <LaunchCard key={index} details={details} />
                  );
                })}
              </div>
            </Col>
          </Row>
          <div>
            <h5 className="text-center">Developed by : Archana Sardhara</h5>
          </div>
        </Container>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  programList: state.programs.programs,
  fetching: state.programs.fetching,
})

const mapDispatchToProps = dispatch => {
  return {
    onLoadPrograms: (param) => dispatch(loadPrograms(param)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchComponent);