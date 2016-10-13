$(document).ready(function() {
	Home();
});
function Home() {
	$('#home').show();
	$('#contact').hide();
	$('#coolpics').hide();
  return false;
}
function Gallery(){
	$('#home').hide();
	$('#contact').hide();
	$('#coolpics').show();
	return false;
}
function Contact() {
	$('#home').hide();
	$('#contact').show();
	$('#coolpics').hide();
	$('.messagesent').hide();
  return false;
}
$('#form').submit(function () {
		if(document.getElementById('firstname').attributes)
		$('.text').hide();
		$('.messagesent').show();
		$('.submit').hide();
		return false;
});