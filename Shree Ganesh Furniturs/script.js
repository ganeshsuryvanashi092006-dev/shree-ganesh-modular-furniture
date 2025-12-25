document.addEventListener('DOMContentLoaded', function(){
	console.log('Shree Ganesh Modular furniture website loaded');

	// Mobile menu toggle
	var menuToggle = document.querySelector('.menu-toggle');
	var navList = document.querySelector('.nav-list');
	if(menuToggle){
		menuToggle.addEventListener('click', function(){
			var opened = document.body.classList.toggle('nav-open');
			menuToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
		});
	}

	// Check if local hero image loads; if so, add a class for fine-grained styling
	var heroImg = new Image();
	heroImg.src = 'assets/hero.jpg';
	heroImg.onload = function(){
		document.body.classList.add('hero-image-loaded');
		console.log('Local hero image loaded (assets/hero.jpg)');
	};
	heroImg.onerror = function(){
		document.body.classList.add('hero-image-missing');
		console.warn('Local hero image not found — using fallback');
	};

});
function sendMail() {  
    const name = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  
    const msg = document.getElementById('msg').value;  
  
    if(!name || !email || !msg) {  
        alert("Please fill all fields");  
        return;  
    }  
  
    const subject = encodeURIComponent("Inquiry from " + name);  
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${msg}`);  
    
    // Replace nagnathsuryvanashi@gmail.com with your EXACT email if it's different
    window.location.href = "mailto:nagnathsuryvanashi@gmail.com?subject=" + subject + "&body=" + body;  
}