
/*
 * GET home page.
 */
var bookings = require('../bookings');

exports.index = function(req, res){
	
	bookings.getAllBookings(function(err, bookings){
		res.render('index', { 
			title: 'Express',
			bookingsList: bookings
		});
	});
	
};

exports.booking = function(req, res){
	bookings.getBooking(req.params.id, function(err, bookings){
		console.log('hello: '+req.params.id);
		console.log('variable'+bookings);
		res.render('booking', { 
			title: 'Express333',
			book: bookings
		});
	});
	
};

exports.new_booking = function(req, res){
	console.log('new booking');
	res.render('new');
}

exports.insert_booking = function(req, res){
console.log(req.body);
	bookings.insertBooking(req.body.name, req.body.start_date, req.body.end_date, function(err) {
		console.log('insert new Booking: ' + req.body.name);
		res.redirect('/bookings');
	});
}

exports.edit_booking = function(req, res){
	bookings.getBooking(req.params.id, function(err, bookings){
		console.log('hello: '+req.params.id);
		console.log('variable'+bookings);
		res.render('edit_booking', { 
			book: bookings
		});
	});
	
};

exports.update_booking = function(req, res){
console.log(req.body);
	bookings.updateBooking(req.body.booking_id, req.body.name, req.body.start_date, req.body.end_date, function(err) {
		console.log('update Booking: ' + req.body.name);
		res.redirect('/bookings');
	});
}

exports.delete_booking = function(req, res){
console.log(req.params);
	bookings.deleteBooking(req.params.id, function(err) {
		console.log('delete Booking: ' + req.params.id);
		res.send({redirect: '/bookings'});
	});
}