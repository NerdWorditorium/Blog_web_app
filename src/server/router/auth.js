import {Router} from 'express';
import auth_controller from '../controller/auth_controller.js'
import auth_middleware from '../middleware/auth.js';

const router = Router();

router.get('/', auth_controller.test);
router.post('/signup', auth_middleware.validate_auth_data, auth_controller.create_user);

export default router;