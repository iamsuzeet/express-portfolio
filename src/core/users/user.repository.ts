import { User } from './user.model';

class UserRepository {
  async getAllUsers() {
    return await User.findAll();
  }

  async createUser() {
    return await 
  }
}

export default new UserRepository();
