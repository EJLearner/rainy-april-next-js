import {useEffect, useState} from 'react';

export const useScreenWidthCheck = (inputParams) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const queryParams = Object.entries(inputParams).map(([key, value]) => {
      return `(${key}-width: ${value}px)`;
    });

    const query = queryParams.join(' and ');
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, inputParams]);

  return matches;
};
