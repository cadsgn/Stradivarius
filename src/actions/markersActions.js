export const GET_MARKERS = 'GET_MARKERS';
export const GET_MARKERS_OK = 'GET_MARKERS_OK';
export const GET_MARKERS_KO = 'GET_MARKERS_KO';

export const actionGetMarkers = () => ({
  type: GET_MARKERS,
});

export const actionGetMarkersOK = (markers) => ({
  type: GET_MARKERS_OK,
  payload: markers,
});

export const actionGetMarkersKO = () => ({
  type: GET_MARKERS_KO,
});

export function getMarkers() {
  return async (dispatch) => {

    dispatch(actionGetMarkers());
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
  
      dispatch(actionGetMarkersOK(data));
    } catch (error) {
      console.log(error);
      dispatch(actionGetMarkersKO());
    }
  }
}