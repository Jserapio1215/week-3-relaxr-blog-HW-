// document.getElementById('logo').onclick = changeBackground;

// document.body.style.color='black'

// function changeBackground() {
// 	document.getElementById('main').style.backgroundColor ='white';
// }

$('#firstparagraph').hide();
$('#firstless').hide();
$('#firstmore').click(showText);

$('#secondparagraph').hide();
$('#secondless').hide();
$('#secondmore').click(showAgain);

$('#firstless').click(hideText);
$('#secondless').click(hideAgain)

$('#foundme').hide();
$('#learn').click(showTreat);

function showText() {
  $('#firstparagraph').slideDown();
  $('#firstless').show();
  $('#firstmore').hide();
 }
function showAgain() {
  $('#secondparagraph').slideDown();
  $('#secondless').show();
  $('#secondmore').hide();
 }
function hideText() {
 	$('#firstparagraph').slideUp();
 	$('#firstless').hide();
 	$('#firstmore').show();
 }
 function hideAgain() {
 	$('#secondparagraph').slideUp();
 	$('#secondless').hide();
 	$('#secondmore').show();
 }
 function showTreat() {
 	$('#foundme').slideDown();
 	$('#learn').hide();
 }

