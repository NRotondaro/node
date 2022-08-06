const express = require('express');
const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobs');

router.post('/').post(createJob).get(getAllJobs);
router.post('/:id').get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
