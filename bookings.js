var mongoose = require('mongoose');
//var Booking = require('./db').Booking;

exports.getAllBookings = function(callback) {
	var Booking = mongoose.model('Booking');
	Booking.find(function(err, data){
		if(err)
			console.log(err);
		else{
			console.log(data);
			callback("", data);
		}
	})
}

exports.getBooking = function(booking_id, callback) {
	var Booking = mongoose.model('Booking');
	Booking.findOne({_id: booking_id}, function(err, data){
		if(err)
			console.log(err);
		else{
			console.log(data);
			callback("", data);
		}
	})
}

exports.insertBooking = function(name_s, start_date_s, end_date_s, callback) {
	var Booking = mongoose.model('Booking');
	console.log(name_s);
	var new_booking = new Booking({name: name_s, start_date: start_date_s, end_date: end_date_s})
	console.log(new_booking);
	new_booking.save(function(err, data){
		if(err)
			console.log(err);
		else{
			console.log('insert successful!');
			callback();
		}
	});
	
}

exports.updateBooking = function(id_s, name_s, start_date_s, end_date_s, callback) {
	var Booking = mongoose.model('Booking');
	console.log(name_s);
//	var new_booking = new Booking({_id: id_s, name: name_s, start_date: start_date_s, end_date: end_date_s})
//	console.log(new_booking);
	Booking.update(
		{_id: id_s},
		{ 
			$set: {name: name_s, start_date: start_date_s, end_date: end_date_s}
		},
		function(err, data){
			if(err)
				console.log(err);
			else{
				console.log('update successful!');
				callback();
			}
		}
	);


	
}

exports.deleteBooking = function(id_s, callback) {
	var Booking = mongoose.model('Booking');
	Booking.remove(
		{_id: id_s},
		function(err, data){
			if(err)
				console.log(err);
			else{
				console.log('delete successful!');
				callback();
			}
		}
	);


	
}