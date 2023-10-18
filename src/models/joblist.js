"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobList.init(
    {
      company: {
        type: DataTypes.STRING,
        field: "company_name",
      },
      jobTitle: {
        type: DataTypes.STRING,
        field: "job_name",
      },
      jobSalary: {
        type: DataTypes.STRING,
        field: "job_salary",
      },
      companyEmail: {
        type: DataTypes.STRING,
        field: "company_email",
      },
    },
    {
      sequelize,
      modelName: "JobList",
      timestamps: true,
      underscored: true,
    }
  );
  return JobList;
};
