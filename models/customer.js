'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
    console.log(models.Customer);
  };
  return Customer;
};