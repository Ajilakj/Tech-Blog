const Location = require('./Location');
const Traveller = require('./Traveller');
const Trips = require('./Trips');

Traveller.hasMany(Location, {
  foreignKey: 'traveller_id',
});

// Location.belongsTo(Traveller, {
//   foreignKey: 'traveller_id',
// });

// Traveller.hasMany(Trips, {
//   foreignKey: 'traveller_id',
// });

// Trips.belongsTo(Traveller, {
//   foreignKey: 'traveller_id',
// });
Traveller.belongsToMany(Location, { through: 'Trips',uniqueKey:false });
Location.belongsToMany(Traveller, { through: 'Trips',uniqueKey:false });
module.exports = { Location, Traveller, Trips };
