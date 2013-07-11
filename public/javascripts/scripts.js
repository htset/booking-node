

//$(document).ready(function() {
function delete_item(id){

//alert(id);
	$.ajax({
		type: "DELETE",
		url: "/bookings/"+id,
//		data: "id="+id,
		success: function(msg){
			 window.location.replace("/bookings");
		}
	});

}



/*
$('#button').click(function() {
     $.get('/some/url', {foo: 42}, function(result) {
         $('#target').html(result);
     }
}

	$.ajax({
		type: "DELETE",
		url: "/bookings"
		data: "id:",
		success: function(msg){
			alert("Data Deleted: " + msg);
		}
	});
*/
//});

