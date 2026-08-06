import { Router } from 'express';
import { prisma } from '../config/prisma';

const router = Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/', async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

export default router;