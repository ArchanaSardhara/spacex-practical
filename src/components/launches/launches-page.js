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

  const fetchAPI = (filters) => {
    props.onLoadPrograms(filters);
  }

  useEffect(() => {
    if (!rendered) {
      setRendered(true);
      fetchAPI(filters);
    }
  }, [rendered])

  const updateApiFilters = (type, value) => {
    const data = {
      ...filters,
      [type]: value,
    };
    if (filters[type] === value) {
      delete data[type];
    }
    setFilters(data);
    fetchAPI(data);
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
              <Row>
                {props.programList.map((details, index) => {
                  return (
                    <Col key={index} md={12} lg={4}>
                      <LaunchCard details={details} />
                    </Col>
                  );
                })}
              </Row>
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