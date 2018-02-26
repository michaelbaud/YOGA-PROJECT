$(document).ready(function() {


	// open modal
	$('#open_modal').click(function() {
		$('#modal_to_open').css(
			{
				'display': 'block'
			}
		);
	});


	// close modal
	$('#close_modal').click(function() {
		$('#modal_to_open').css(
			{
				'display': 'none'
			}
		)
	});


	// send mail with ajax
	/*$('#send_email').click(function(e){ // id du boutton envoyer
		e.preventDefault();
		var data = {
			email: $('#email').val(),
			name: $('#name').val(),
			firstname: $('#firstname').val(),
			message: $('#message').val()
		};
		//ajax
		$.ajax({
			url: "mail.php", // renvoie vers notre fichier.php
			type: 'POST',
			data: data,
			success: function(data) {
				$('#js_alert_success').css({'display' : 'block'});
				// compteur de 3 secondes
				setTimeout(function(){
					$('#js_alert_success').css({'display' : 'none'}); // alert success et ferme
					$('#email').val(""); // vide le champ
					$('#name').val(""); // vide le champ
					$('#firstname').val(""); // vide le champ
					$('#message').val("") // vide le champ
				}, 3000);
			},
			error: function(data) {
				$('#js_alert_danger').css({'display' : 'block'});
				// compteur 3 secondes
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'}); // alert erreur et ferme
					$('#email').val(""); // vide le champ
					$('#name').val(""); // vide le champ
					$('#firstname').val(""); // vide le champ
					$('#message').val("") // vide le champ
				}, 3000);
			}
		});
	});*/

});

// menu responsive
var btn = document.querySelector(".logoMenu");
var nav = document.querySelector(".nav");

btn.onclick = function() {
	nav.classList.toggle("nav_open");
}
