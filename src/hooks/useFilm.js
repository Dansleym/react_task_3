import { useEffect, useState } from 'react';

import apiService from 'services/starships';

const useFilm = id => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const info = await apiService.getFilm(id).then(res => res.json());

        setInfo(info);
      } catch {}
    })();
  }, [id]);

  return info;
};

export default useFilm;
