const jobService = require("../services/jobServices");

const jobController = {
  create: async (req, res) => {
    try {
      const { company, jobtitle, jobSalary, companyEmail } = req.body;
      const data = await jobService.create({
        company,
        jobtitle,
        jobSalary,
        companyEmail,
      });
      return res.json({ success: true, data });
    } catch (error) {
      return res.status(500).json({ success: false, message: error?.message });
    }
  },
};

module.exports = jobController;
