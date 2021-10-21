const facebookBtn = document.querySelector(".facebook-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const bufferBtn = document.querySelector(".buffer-btn");
const redditBtn = document.querySelector(".reddit-btn");


const fbBtn = document.querySelector(".fb-btn");
const igBtn = document.querySelector(".ig-btn");
const wspBtn = document.querySelector(".wsp-btn");
const twtrBtn = document.querySelector(".twtr-btn");

function init() 

{
	console.log("JavaScript is working perfectly...");
                                                                                                                                                                      
	 let postUrl = window.location.href;
	 let postTitle = document.title;

	/*social sharing*/
	 

	facebookBtn.setAttribute("href",'https://www.facebook.com/sharer.php?u='+postUrl);
	
	whatsappBtn.setAttribute("href", 'https://api.whatsapp.com//send?text='+postTitle+postUrl);

	twitterBtn.setAttribute("href",'https://twitter.com/intent/tweet?text='+postTitle+"&url="+postUrl);

	linkedinBtn.setAttribute("href", 'https://www.linkedin.com/shareArticle?url='+postUrl+"&title="+postTitle);

	bufferBtn.setAttribute("href", 'https://bufferapp.com/add?text='+postTitle+"&url="+postUrl);

	redditBtn.setAttribute("href", 'https://reddit.com/submit?url='+postUrl+"&title="+postTitle);



/*Our social medias*/


	fbBtn.setAttribute("href", 'https://www.facebook.com/A2-Web-106527088473578');

	igBtn.setAttribute("href",'https://www.instagram.com/a2web007/');

	wspBtn.setAttribute("href", 'https://whatsapp.com');

	twtrBtn.setAttribute("href", 'https://twitter.com/A2Web1');
	
}

init();