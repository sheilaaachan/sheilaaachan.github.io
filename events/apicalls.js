$(document).ready(function(){

var clientId = 'fmw794kau539jhbadbhg89x9';
var clientSecret = 'Pk4Jjhyukb6EuAGhG6ATdbpw';

$('#user_selector').change(function(){
	var selected_option = $('#user_selector option:selected');
	$('.events').hide();
	$('#' + selected_option.attr('id') + "_events").show();
})


function doctor_responded(){
	alert('hi Jon');
    $.post("https://auth.exacttargetapis.com/v1/requestToken",
    {
        "clientId": "fmw794kau539jhbadbhg89x9",
        "clientSecret": "Pk4Jjhyukb6EuAGhG6ATdbpw"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
}


function appointment_made(){
	 alert('Hi Priyank');
}

});