import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveria existir por questao de segurança
// router.get('/', userController.index);
// router.get('/', loginRequired, userController.show);

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
  index  ->  list all users -> GET
  store/create -> create a new user -> POST
  delete -> delete a user -> DELETE
  show -> show a user -> GET
  update -> update a user -> PATCH OU PUT
*/
