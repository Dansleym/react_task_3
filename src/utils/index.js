export const getDefaultImage = () => `${process.env.REACT_APP_DEFAULT_IMG_URL}`;

export const getPlanetId = url => /planets\/(\d+)/i.exec(url)?.[1];
export const getStarshipId = url => /starships\/(\d+)/i.exec(url)?.[1];
export const getPeopleId = url => /people\/(\d+)/i.exec(url)?.[1];
export const getFilmsId = url => /films\/(\d+)/i.exec(url)?.[1];

export const getPlanetImageUrl = id =>
  `${process.env.REACT_APP_SW_VISUAL_API_HOST}/assets/img/planets/${id}.jpg`;
export const getStarshipImageUrl = id =>
  `${process.env.REACT_APP_SW_VISUAL_API_HOST}/assets/img/starships/${id}.jpg`;
