//  External Modules
const _ = require('lodash');

//  Internal Modules
const countryModelSeedData = require('./seedData');

const seedCountryModel = (model, modelName) => {
  model.findAndCountAll()
  .then((records) => {
    if (!_.isEqual(records.count, 0)) {
      throw new Error(`${modelName} is already seeded`);
    }

    const seedFunction = (currentRecord) => {
      return model.create(currentRecord);
    };

    console.log(_.map(countryModelSeedData[modelName], seedFunction));
  })
  .catch((err) => {
    console.log(err);
  });
};

const seedDatabase = (models) => {
  seedCountryModel(models.Country, 'Country');
  seedCountryModel(models.IdType, 'IdType');
  seedCountryModel(models.Currency, 'Currency');
  seedCountryModel(models.AllowedCurrency, 'AllowedCurrency');
};

module.exports = {
  seedDatabase,
};
