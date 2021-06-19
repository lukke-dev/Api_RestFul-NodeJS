import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import photoController from '../controllers/PhotoController';

const router = new Router();

router.post('/', loginRequired, photoController.index);

export default router;
