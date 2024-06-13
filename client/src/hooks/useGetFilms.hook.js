import { useQuery } from '@tanstack/react-query';
import filmsGetService from '../services/films.get.service.js';

export const useFilms = () => {
  return useQuery({
    queryKey: ['films'],
    queryFn: () => filmsGetService.getFilms(),
    select: ({ data }) => data,
  });
};
