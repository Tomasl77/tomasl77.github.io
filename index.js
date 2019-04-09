var txtintro = "Press enter!";

function intro() {
	document.getElementById('intro').style.display = 'block';
	document.getElementById('intro').style.backgroundColor = "black";
	document.getElementById('suite').style.display = 'none';
	display = document.getElementById('intro');

	for(var i = 0, l = txtintro.length; i < l; i++) {
	(function(i) {
		setTimeout(function() {
			display.innerHTML += txtintro.charAt(i);
			}, i * 200);
		}(i));
	}	
}

document.querySelector('body').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    var fnum = Math.floor(Math.random() * 11);
    var snum = Math.floor(Math.random() * 11);
    var ansnum = fnum + snum;
    if (key === 13) { 
    	var question = prompt("Checking humanity. Please answer this : \n"+fnum+"+"+snum+" =");
    	if(question == ansnum){
	    	document.getElementById('intro').style.display = 'none';
    		document.getElementById('suite').style.display = 'block';
    		document.body.style.backgroundImage = "url(./img/ep_naturalwhite.png) repeat";
    	}
    	else alert('Verification failed. Please, try again !!');
    }
});

function writetitle(txt){
	document.getElementById('title').style.display = ('block');
	document.getElementById('title').innerHTML = txt;
}

function writecorps(txt) {
	document.getElementById('corps').innerHTML = txt;
}