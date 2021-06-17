import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'luiz',
      sobrenome: 'miranda',
      email: 'qlqcoisa@gmail.com',
      idade: 112,
      peso: 100,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
