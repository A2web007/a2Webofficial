


let previous = document.querySelector('#pre');
let play= document.querySelector('#play');
let next = document.querySelector('next');
let song_title = document.querySelector('#song-title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration= document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//creating audio element//
let  track = document.createElement('audio');

//All songs list
let All_song = [
{
     name: "MOOD",
     path: "music/mood.flac",
     img: "img/mood.jpeg",
     singer: "<MARQUEE>24KGOLDN ft. IANN DIOR</MARQUEE>"
},

{
     name: "SEE U AGAIN",
     path: "music/see-u-again.flac",
     img: "img/see-u-again.jpg",
     singer: "<MARQUEE>WIZ KHALIFA ft. CHARLIE PUTH</MARQUEE>"
},
{
     name: "RUNAWAY",
     path: "music/runaway.flac",
     img: "img/aurora.jpg",
     singer: "<MARQUEE>AURORA</MARQUEE>"
},
{
     name: "FADED",
     path: "music/faded.mp3",
     img: "img/faded.jpg",
     singer: "<MARQUEE>ALAN WALKER</MARQUEE>"
},
{
     name: "TOO LATE 😂",
     path: "music/rickroll.flac",
     img: "img/rickroll.jpg",
     singer: "<MARQUEE>RICK ASTLEY</MARQUEE>"
}

];

// All function


//function load the track

function load_track(index_no){
	clearInterval(timer);
	reset_slider();
	track.src = All_song[index_no].path;
	song_title.innerHTML = All_song[index_no].name;
	track_image.src = All_song[index_no].img;
	artist.innerHTML = All_song[index_no].singer;
	track.load();


      total.innerHTML = All_song.length;
      present.innerHTML = index_no + 1;
      timer = setInterval(range_slider, 1000);

}
load_track(index_no)


//mute sound

function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;

}


//reset song slider

function reset_slider(){
	slider.value = 0;
}


// check music

function justplay(){
	if(playing_song==false){
		playsong();
	}
	else{
		pausesong();
	}
}

//play song
function playsong(){
	track.play();
	playing_song = true;
	play.innerHTML = '<i class=" fa-solid fa-pause"></i>';

}

//pause song
function pausesong(){
	track.pause();
	playing_song = false;
	play.innerHTML = '<i class="fa-solid fa-play"></i>';
}

//next song
function next_song()
{
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}
	else{
		index_no = 0;
		load_track(index_no);
		playsong();
	}

}

//previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();
	}
	else{
		index_no = All_song.length;
		playsong();
	}
}

//change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

//change slider position
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}




//autoplay function
function autoplay_switch(){
	if (autoplay==1){
		autoplay = 0;
		auto_play.style.background = "rgba(255,255,255,0.2)";
	}
	else{
		autoplay = 1;
		auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;

	//update slider position
	if(!isNaN(track.duration)){
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}



	//function will run when song is over
	if (track.ended){
		play.innerHTML = '<i class="fa-solid fa-play"></i>';
		if (autoplay==1){
			index_no += 1;
			load_track(index_no);
            playsong();		}
	}
}

