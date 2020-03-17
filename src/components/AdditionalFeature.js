import React from 'react';
import {connect} from 'react-redux';
import {removeFeature, addFeature} from '../actions/actions';

const AdditionalFeature = props => {

  const addfeature = (feature) => {
    props.addFeature(feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {() => addfeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature)