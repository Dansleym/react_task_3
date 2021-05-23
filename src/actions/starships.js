import {
  FETCH_STARSHIPS_STARTED,
  FETCH_STARSHIPS_FAILURE,
  FETCH_STARSHIPS_SUCCESS,
} from "./types";

import starshipsApiService from "services/starships";

const loadStarshipsSuccess = (starships) => ({
  type: FETCH_STARSHIPS_SUCCESS,
  payload: {
    ...starships,
  },
});

const loadStarshipsStarted = () => ({
  type: FETCH_STARSHIPS_STARTED,
});

const loadStarshipsFailure = () => ({
  type: FETCH_STARSHIPS_FAILURE,
});

export const loadStarships = (page = 1) => async (dispatch) => {
  dispatch(loadStarshipsStarted());

  try {
    const starships = await starshipsApiService
      .getStarships(page)
      .then((res) => res.json());

    dispatch(loadStarshipsSuccess(starships));
  } catch {
    dispatch(loadStarshipsFailure());
  }
};
