import axios from 'axios';

class usersService {
  async getUsers() {
    return await axios.get('https://jsonplaceholder.typicode.com/users');
  }
}

export default new usersService();
