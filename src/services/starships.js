const apiHost = process.env.REACT_APP_SW_API_HOST;

class StarshipsApiService {
  getStarships = async page => fetch(`${apiHost}/starships?page=${page}`);

  getStarship = async id => fetch(`${apiHost}/starships/${id}`);

  getFilm = async id => fetch(`${apiHost}/films/${id}`);
}
export default new StarshipsApiService();
