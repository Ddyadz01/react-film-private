import axios from 'axios';

class FilmsService {
  async getFilms() {
    return axios.get('https://65ac5a3f262b06cd.mokky.dev/list');
  }
}

export default new FilmsService();
