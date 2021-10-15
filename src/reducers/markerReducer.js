import * as actions from '../actions/markersActions';

export const initialState = {
  markers: [],
  errors: false,
  loading: false,
}
  
export default function markerReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MARKERS:
      return { ...state, loading: true };
    case actions.GET_MARKERS_OK:
      return {markers: action.payload, loading: false, errors: false}
    case actions.GET_MARKERS_KO:
      return {...state, loading: false, errors: true}
    default:
      return state;
  }
}