import {
  FETCH_STARSHIPS_STARTED,
  FETCH_STARSHIPS_FAILURE,
  FETCH_STARSHIPS_SUCCESS,
} from "actions/types";

const initialState = {
  starships: null,
  fetchingStarships: false,
  starshipsError: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARSHIPS_STARTED: {
      return {
        ...state,
        fetchingStarships: true,
        starshipsError: false,
      };
    }
    case FETCH_STARSHIPS_FAILURE: {
      return {
        ...state,
        fetchingStarships: false,
        starshipsError: true,
      };
    }
    case FETCH_STARSHIPS_SUCCESS: {
      return {
        ...state,
        fetchingStarships: false,
        starships: action.payload,
      };
    }

    default:
      return state;
  }
}
