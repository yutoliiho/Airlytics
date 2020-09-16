const db = require('./index');

module.exports = {
  getAllGuests: function (callback) {
    db.query('select * from guests', (err, result, field) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },
  addOneGuest: function (guest, callback) {
    // console.log(guest)
    db.query(`insert into guests (name) value ("${guest.name}")`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  }
}

// express.json() alwasy lloooks for an obj, always pass in obj!!!