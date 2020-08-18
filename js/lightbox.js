

var lightbox=document.getElementById("lightbox");
var images=document.querySelectorAll(".grid img");


images.forEach(function(image) {
	image.addEventListener('click',function(e) {
		//adding new image  in lightbox....
		var lightboxImage=document.createElement("img");
				lightboxImage.setAttribute("class","lightboxImage");
				lightboxImage.src=image.src;
				//every time removing the previous selected image;
				while(lightbox.firstChild) {					
					lightbox.removeChild(lightbox.firstChild);
				}
				lightbox.appendChild(lightboxImage);
		lightbox.classList.add("active");			
		document.querySelector('html').className='overflow';						
	})
})

lightbox.addEventListener('click',function(e) {
	// console.log(e.target);==>means where you click on
	// console.log(e.currentTarget);==>currently click event on 
	if(e.target==e.currentTarget) {		
		lightbox.classList.remove("active");
		document.querySelector('html').className="";
	}

})