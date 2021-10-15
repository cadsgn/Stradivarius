import React from 'react';
import {connect} from 'react-redux';

// Importamos la acción getmarkers
import {getMarkers} from '../actions/markersActions';


const MarkersRedux = ({dispatch}) => {

  React.useEffect(() => {
    dispatch(getMarkers());
  }, [dispatch]);

  return null;
}

// Mapeo del estado de Redux con las propieades del componente
const mapStateToProps = (state) => ({
  markers: state.markers.markers,
  errors: state.markers.errors,
  loading: state.markers.loading,
});

// Conexión de React con redux
export default connect(mapStateToProps)(MarkersRedux);