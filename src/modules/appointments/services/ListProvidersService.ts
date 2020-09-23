import { inject, injectable } from 'tsyringe';

import User from '../../users/infra/typeorm/entities/User';
import IUsersRepository from '../../users/repositories/IUsersRepository';

interface IRequestDTO {
  user_id: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequestDTO): Promise<User[]> {
    const user = await this.usersRepository.findAllProviders({
      except_user_id: user_id,
    });

    return user;
  }
}

export default ListProvidersService;
