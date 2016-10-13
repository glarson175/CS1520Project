$(document).ready(function() {
	//document.getElementById("home").style.visibility = "hidden";
	Home();
	
});
function Home() {
	$('#home').show();
	$('#contact').hide();
  return false;
}
function Contact() {
	$('#home').hide();
	$('#contact').show();
  return false;
}