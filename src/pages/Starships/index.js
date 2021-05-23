import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { loadStarships } from 'actions/starships';

import Loader from 'components/Loader';
import Pager from 'components/Pager';
import ServerError from 'components/ServerError';
import StarshipTile from './components/StarshipTile';
import { getDefaultImage, getStarshipId, getStarshipImageUrl } from '../../utils';

const defaultImageUrl = getDefaultImage();

const StarshipsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  align-items: stretch;
  align-content: flex-start;
  justify-content: flex-start;
  > div {
    flex-grow: 1;
    width: 300px;
    &:last-of-type {
      flex-grow: 0;
    }
  }
`;

const Starships = () => {
  const dispatch = useDispatch();
  const { starships, fetchingStarships, starshipsError } = useSelector(
    state => state.starships
  );

  const [page, setPage] = useState(1);

  const onImageLoadError = useCallback(e => {
    if (e.target.src !== defaultImageUrl) {
      e.target.src = defaultImageUrl;
      e.target.classList.add('img-placeholder');
    }
  }, []);

  const { next, previous, results: list } = starships || {};

  const handleClickNext = e => {
    e.preventDefault();
    if (next) setPage(page + 1);
  };
  const handleClickPrev = e => {
    e.preventDefault();
    if (previous) setPage(page - 1);
  };

  useEffect(() => {
    dispatch(loadStarships(page));
  }, [page, dispatch]);

  return (
    <div>
      <h1>Star Wars Starships</h1>

      {fetchingStarships && <Loader />}

      {starshipsError && <ServerError />}
      {!starshipsError && !fetchingStarships && list && (
        <>
          <StarshipsWrapper>
            {list.map(item => {
              console.log(item);
              const cloneItem = { ...item };
              cloneItem.id = getStarshipId(item.url);
              cloneItem.imgSrc = getStarshipImageUrl(cloneItem.id);

              return (
                <StarshipTile
                  key={cloneItem.name}
                  item={cloneItem}
                  onImageLoadError={onImageLoadError}
                />
              );
            })}
          </StarshipsWrapper>

          <Pager
            previous={previous}
            next={next}
            handleClickPrev={handleClickPrev}
            handleClickNext={handleClickNext}
          />
        </>
      )}
    </div>
  );
};

export default Starships;
