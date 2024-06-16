import { useQuery } from '@tanstack/react-query';
import usersService from '../services/users.service';

export const useUsers = () =>
  useQuery({
    queryKey: ['register'],
    queryFn: () => usersService.getUsers(),
    select: ({ data }) => data,
  });
