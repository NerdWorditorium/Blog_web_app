import {Router} from 'express';
import auth_controller from '../controller/auth_controller.js'

const router = Router();

router.get('/', auth_controller.test);
router.post('/signup', auth_controller.create_user);

export default router;