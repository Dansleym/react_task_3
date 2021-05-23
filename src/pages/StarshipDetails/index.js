import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Loader from 'components/Loader';
import ServerError from 'components/ServerError';
import starshipsApiService from 'services/starships';
import { getFilmsId } from '../../utils';

import StarshipInfoRow from '../Starships/components/StarshipInfoRow';
import FilmsInfo from './components/FilmsInfo';
import styled from 'styled-components';

const FilmsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StarshipDetails = () => {
  const { id } = useParams();
  const [starshipInfo, setStarshipInfo] = useState(null);
  const [fetchStatus, setFetchStatus] = useState({
    fetching: false,
    error: false,
  });

  const { fetching, error } = fetchStatus;

  useEffect(() => {
    (async () => {
      setFetchStatus({
        fetching: true,
        error: false,
      });
      try {
        const info = await starshipsApiService
          .getStarship(id)
          .then(res => res.json());

        setStarshipInfo(info);
        setFetchStatus({
          fetching: false,
          error: false,
        });
      } catch {
        setFetchStatus({
          fetching: false,
          error: true,
        });
      }
    })();
  }, [id]);

  if (fetching) return <Loader />;
  if (error) return <ServerError />;
  if (!starshipInfo) return '';

  return (
    <div>
      <h1>{starshipInfo.name}</h1>
      <StarshipInfoRow name='Price:' value={`${starshipInfo.cost_in_credits} credits`} />
      <StarshipInfoRow name='Model:' value={`${starshipInfo.model}`} />
      <StarshipInfoRow name='Class:' value={`${starshipInfo.starship_class}`} />
      <h3>Films with this starship</h3>
      <FilmsWrapper>
        {starshipInfo.films.map(url => (
          <FilmsInfo key={url} id={getFilmsId(url)} />
        ))}
      </FilmsWrapper>
    </div>
  );
};

export default StarshipDetails;
