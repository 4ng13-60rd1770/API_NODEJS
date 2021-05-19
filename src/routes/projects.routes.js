import {Router} from 'express'

const router = Router();

import *as projectsCtlr from '../controllers/projects.controller';
import {authJwt, verifyToken} from '../middlewares';

router.post ('/',[authJwt.verifyToken, authJwt.isOperator], projectsCtlr.createProject);

router.get ('/', projectsCtlr.getProjects);

router.get ('/:projectId', projectsCtlr.getProjectById);

router.put ('/:projectId',[authJwt.verifyToken, authJwt.isOperator],projectsCtlr.updateProjectById);

router.delete ('/:projectId', [authJwt.verifyToken, authJwt.isOperator],projectsCtlr.deleteProjectById);

export default router;
