import React from 'react';
import { Link } from 'react-router-dom';
import useFilm from '../../../hooks/useFilm';

export default function FilmsInfo({ id }) {
  const info = useFilm(id);

  return info ? (
    <Link to={`/films/${id}`}>{info.title}</Link>
  ) : (
    <p>Loading...</p>
  );
}
