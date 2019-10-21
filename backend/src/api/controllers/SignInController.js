import User from '../../database/models/zueira';

class SignInController {
  async index(req, res, next) {
    const user = await User.create({
      name: 'Lenon',
    });

    return res.json(user);
  }

  async store(req, res, next) {
    return res.send('ok');
  }
}

export default new SignInController();
