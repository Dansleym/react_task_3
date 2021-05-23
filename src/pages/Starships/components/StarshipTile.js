import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import StarshipInfoRow from './StarshipInfoRow';

const StarshipInfoWrapper = styled.div`
  dt {
    width: 94px;
  }
  dd {
    margin-left: 111px;
  }
`;

export default function StarshipTile({ item, onImageLoadError }) {
  return (
    <div className='thumbnail starship-image'>
      <img src={item.imgSrc} alt={item.name} onError={onImageLoadError} />
      <div className='caption'>
        <h3>
          <Link to={`/starship/${item.id}`}>{item.name}</Link>
        </h3>
        <StarshipInfoWrapper>
          <dl className='dl-horizontal'>
            <StarshipInfoRow name='Model' value={item.model} />
            <StarshipInfoRow name='Class' value={`${item.starship_class}`}/>
            <StarshipInfoRow name='Price' value={`${item.cost_in_credits} credits`}/>
            <StarshipInfoRow name='Speed' value={`${item.max_atmosphering_speed} km`} />
            <StarshipInfoRow name='Drive rating' value={`${item.hyperdrive_rating}`}/>
          </dl>
        </StarshipInfoWrapper>
      </div>
    </div>
  );
}
