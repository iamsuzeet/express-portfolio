import userRepository from './user.repository';
import NotFoundException from './../../exceptions/NotFoundException';

class UserService {
  async getAllUser() {
    return await userRepository.getAllUsers();
  }
}

export default new UserService();
