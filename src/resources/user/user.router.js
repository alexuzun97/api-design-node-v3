import { Router } from 'express'

const controller = (req, res) => {
  res.send({ message: 'hello' })
}

const router = Router()

router.get('/', controller)
router.put('/', controller)

export default router
