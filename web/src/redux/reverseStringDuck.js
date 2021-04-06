import axios from 'axios'

// Constants
const initialData = {
  stringsArr: [],
  stringsReverseArr: []
}

// Types
const GET_STRING_SUCCESS = 'GET_STRING_SUCCESS'

// Reducer
export default function reverseStringReducer (state = initialData, action) {
  switch (action.type) {
    case GET_STRING_SUCCESS:
      return {
        ...state,
        stringsArr: action.payload.stringsArray,
        stringsReverseArr: action.payload.stringsReverseArray
      }
    default:
      return state
  }
}

// Actions
export const getReverseStringAction = (text) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/iecho/?text=${text}`
    )
    const { stringsArr } = getState().strings
    const stringsArray = [...stringsArr, response.data]
    const auxArray = [...stringsArray]
    const stringsReverseArray = auxArray.reverse()
    dispatch({
      type: GET_STRING_SUCCESS,
      payload: { stringsArray, stringsReverseArray }
    })
  } catch (error) {
    console.log(error)
  }
}
