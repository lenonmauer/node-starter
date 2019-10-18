import User from '../../models/user';

class SignInController {
  async index(req, res, next) {
    const user = await User.create({
      name: 'Lenon',
      email: 'lenonmauer@gmail.com',
      password: '123',
    });

    return res.json(user);
  }

  async store(req, res, next) {
    return res.send('ok');
  }
}

export default new SignInController();
