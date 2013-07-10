var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema({
	name: String,
	start_date: String,
	end_date: String
}
);

exports.Booking = mongoose.model('Booking', bookingSchema);

mongoose.connect('mongodb://localhost/bookings')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('open!');
});

