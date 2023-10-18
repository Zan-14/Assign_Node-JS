const JobList = require("../models/index");

const jobService = {
  create: ({ company, jobtitle, jobSalary, companyEmail }) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await JobList.create({
          company,
          jobtitle,
          jobSalary,
          companyEmail,
        });

        resolve(data);
      } catch (error) {}
    }),
};

module.exports = jobService;
