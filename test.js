var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema({
	name: String
}
);

var Booking = mongoose.model('User', bookingSchema);
var newBook = new Booking();
newBook.name = "Paparas";
newBook.save(function(err){

});
mongoose.connect('mongodb://localhost/bookings')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('open!');
});

Booking.find({}, function(err, vv){
console.log(vv);


});

