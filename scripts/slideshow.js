/*! Jasmine Scott
 * creating a image slider
 */

 var count = 1;
 var total = 5;

 function slideshow(x) {
	var Image = document.getElementById('img');
	count = count + x; 	
 	if (count > total) {
 		count = 1;
 	}
 	if (count < 1) {
 		count = total;
 	}
 	Image.src = "gardenImages/img"+ count + ".jpg";
 }