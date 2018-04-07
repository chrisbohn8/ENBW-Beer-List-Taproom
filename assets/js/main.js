var beersOnDraft = document.getElementById("beers").children; 

// Add Classes For 11 Beers On Draft

if (beersOnDraft.length == 12){
// Apply Class To All Beers
    var i;
    for (i = 1; i < beersOnDraft.length; i++) {
        beersOnDraft[i].className += " elevenBeers";
    }
}


// Add Classes For 12 Beers On Draft

if (beersOnDraft.length == 13){
// Apply Class To All Beers
    for (i = 0; i < beersOnDraft.length; i++) {
        beersOnDraft[i].className += " twelveBeers";
    }
}

// Add Classes For 13 Beers On Draft

if (beersOnDraft.length == 14){
// Apply Class To All Beers
    for (i = 0; i < beersOnDraft.length; i++) {
        beersOnDraft[i].className += " thirteenBeers";
    }
}










//Miro Modal
// Get close button
var closeBtnMiro = document.getElementById('closeBtnMiro');
// Get modal element
var miroModal = document.getElementById('miroModal');
//Get open modal button
var modalBtnMiro = document.getElementById('modalBtnMiro');
//Listen for open click
modalBtnMiro.addEventListener('click', openMiroModal);
//Listen for close click
closeBtnMiro.addEventListener('click', closeMiroModal);
//Listen for outside click
window.addEventListener('click', outsideClickMiro);
// Function to open modal
function openMiroModal(){
	miroModal.style.display = 'block';
}
// Function to close modal
function closeMiroModal(){
	miroModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickMiro(e){
	if(e.target == miroModal){
		miroModal.style.display = 'none';
	}
}

//Cumberland Punch Modal
// Get close button
var closeBtnCp = document.getElementById('closeBtnCp');
// Get modal element
var cpModal = document.getElementById('cpModal');
// Get open modal button
var modalBtnCp = document.getElementById('modalBtnCp');
//Listen for open click
modalBtnCp.addEventListener('click', openCpModal);
//Listen for close click
closeBtnCp.addEventListener('click', closeCpModal);
//Listen for outside click
window.addEventListener('click', outsideClickCp);
// Function to open modal
function openCpModal(){
	cpModal.style.display = 'block';
}
// Function to close modal
function closeCpModal(){
	cpModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickCp(e){
	if(e.target == cpModal){
		cpModal.style.display = 'none';
	}
}

//Young Hickory Modal
// Get close button
var closeBtnYh = document.getElementById('closeBtnYh');
// Get modal element
var yhModal = document.getElementById('yhModal');
//Get open modal button
var modalBtnYh = document.getElementById('modalBtnYh');
//Listen for open click
modalBtnYh.addEventListener('click', openYhModal);
//Listen for close click
closeBtnYh.addEventListener('click', closeYhModal);
//Listen for outside click
window.addEventListener('click', outsideClickYh);
// Function to open modal
function openYhModal(){
	yhModal.style.display = 'block';
}
// Function to close modal
function closeYhModal(){
	yhModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickYh(e){
	if(e.target == yhModal){
		yhModal.style.display = 'none';
	}
}

//Roaming Dog Modal
// Get close button
var closeBtnRd = document.getElementById('closeBtnRd');
// Get modal element
var rdModal = document.getElementById('rdModal');
//Get open modal button
var modalBtnRd = document.getElementById('modalBtnRd');
//Listen for open click
modalBtnRd.addEventListener('click', openRdModal);
//Listen for close click
closeBtnRd.addEventListener('click', closeRdModal);
//Listen for outside click
window.addEventListener('click', outsideClickRd);
// Function to open modal
function openRdModal(){
	rdModal.style.display = 'block';
}
// Function to close modal
function closeRdModal(){
	rdModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickRd(e){
	if(e.target == rdModal){
		rdModal.style.display = 'none';
	}
}

//Swing Bridge Modal
// Get close button
var closeBtnSb = document.getElementById('closeBtnSb');
// Get modal element
var sbModal = document.getElementById('sbModal');
//Get open modal button
var modalBtnSb = document.getElementById('modalBtnSb');
//Listen for open click
modalBtnSb.addEventListener('click', openSbModal);
//Listen for close click
closeBtnSb.addEventListener('click', closeSbModal);
//Listen for outside click
window.addEventListener('click', outsideClickSb);
// Function to open modal
function openSbModal(){
	sbModal.style.display = 'block';
}
// Function to close modal
function closeSbModal(){
	sbModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickSb(e){
	if(e.target == sbModal){
		sbModal.style.display = 'none';
	}
}

//East Bank Modal
// Get close button
var closeBtnEb = document.getElementById('closeBtnEb');
// Get modal element
var ebModal = document.getElementById('ebModal');
//Get open modal button
var modalBtnEb = document.getElementById('modalBtnEb');
//Listen for open click
modalBtnEb.addEventListener('click', openEbModal);
//Listen for close click
closeBtnEb.addEventListener('click', closeEbModal);
//Listen for outside click
window.addEventListener('click', outsideClickEb);
// Function to open modal
function openEbModal(){
	ebModal.style.display = 'block';
}
// Function to close modal
function closeEbModal(){
	ebModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickEb(e){
	if(e.target == ebModal){
		ebModal.style.display = 'none';
	}
}

//Holla Blanc Modal
// Get close button
var closeBtnHb = document.getElementById('closeBtnHb');
// Get modal element
var hbModal = document.getElementById('hbModal');
//Get open modal button
var modalBtnHb = document.getElementById('modalBtnHb');
//Listen for open click
modalBtnHb.addEventListener('click', openHbModal);
//Listen for close click
closeBtnHb.addEventListener('click', closeHbModal);
//Listen for outside click
window.addEventListener('click', outsideClickHb);
// Function to open modal
function openHbModal(){
	hbModal.style.display = 'block';
}
// Function to close modal
function closeHbModal(){
	hbModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickHb(e){
	if(e.target == hbModal){
		hbModal.style.display = 'none';
	}
}

//The Grievance Modal
// Get close button
var closeBtnTg = document.getElementById('closeBtnTg');
// Get modal element
var tgModal = document.getElementById('tgModal');
//Get open modal button
var modalBtnTg = document.getElementById('modalBtnTg');
//Listen for open click
modalBtnTg.addEventListener('click', openTgModal);
//Listen for close click
closeBtnTg.addEventListener('click', closeTgModal);
//Listen for outside click
window.addEventListener('click', outsideClickTg);
// Function to open modal
function openTgModal(){
	tgModal.style.display = 'block';
}
// Function to close modal
function closeTgModal(){
	tgModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickTg(e){
	if(e.target == tgModal){
		tgModal.style.display = 'none';
	}
}

//Talbot's Corner Modal
// Get close button
var closeBtnTc = document.getElementById('closeBtnTc');
// Get modal element
var tcModal = document.getElementById('tcModal');
//Get open modal button
var modalBtnTc = document.getElementById('modalBtnTc');
//Listen for open click
modalBtnTc.addEventListener('click', openTcModal);
//Listen for close click
closeBtnTc.addEventListener('click', closeTcModal);
//Listen for outside click
window.addEventListener('click', outsideClickTc);
// Function to open modal
function openTcModal(){
	tcModal.style.display = 'block';
}
// Function to close modal
function closeTcModal(){
	tcModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickTc(e){
	if(e.target == tcModal){
		tcModal.style.display = 'none';
	}
}

//Fire of the Century Modal
// Get close button
var closeBtnFc = document.getElementById('closeBtnFc');
// Get modal element
var fcModal = document.getElementById('fcModal');
//Get open modal button
var modalBtnFc = document.getElementById('modalBtnFc');
//Listen for open click
modalBtnFc.addEventListener('click', openFcModal);
//Listen for close click
closeBtnFc.addEventListener('click', closeFcModal);
//Listen for outside click
window.addEventListener('click', outsideClickFc);
// Function to open modal
function openFcModal(){
	fcModal.style.display = 'block';
}
// Function to close modal
function closeFcModal(){
	fcModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickFc(e){
	if(e.target == fcModal){
		fcModal.style.display = 'none';
	}
}

//Woodland Hull Melon Modal
// Get close button
var closeBtnWhm = document.getElementById('closeBtnWhm');
// Get modal element
var whmModal = document.getElementById('whmModal');
//Get open modal button
var modalBtnWhm = document.getElementById('modalBtnWhm');
//Listen for open click
modalBtnWhm.addEventListener('click', openWhmModal);
//Listen for close click
closeBtnWhm.addEventListener('click', closeWhmModal);
//Listen for outside click
window.addEventListener('click', outsideClickWhm);
// Function to open modal
function openWhmModal(){
	whmModal.style.display = 'block';
}
// Function to close modal
function closeWhmModal(){
	whmModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickWhm(e){
	if(e.target == whmModal){
		whmModal.style.display = 'none';
	}
}

//Krautrock Modal
// Get close button
var closeBtnKr = document.getElementById('closeBtnKr');
// Get modal element
var krModal = document.getElementById('krModal');
//Get open modal button
var modalBtnKr = document.getElementById('modalBtnKr');
//Listen for open click
modalBtnKr.addEventListener('click', openKrModal);
//Listen for close click
closeBtnKr.addEventListener('click', closeKrModal);
//Listen for outside click
window.addEventListener('click', outsideClickKr);
// Function to open modal
function openKrModal(){
	krModal.style.display = 'block';
}
// Function to close modal
function closeKrModal(){
	krModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickKr(e){
	if(e.target == krModal){
		krModal.style.display = 'none';
	}
}

//Wes Coast Modal
// Get close button
var closeBtnWch = document.getElementById('closeBtnWch');
// Get modal element
var wchModal = document.getElementById('wchModal');
//Get open modal button
var modalBtnWch = document.getElementById('modalBtnWch');
//Listen for open click
modalBtnWch.addEventListener('click', openWchModal);
//Listen for close click
closeBtnWch.addEventListener('click', closeWchModal);
//Listen for outside click
window.addEventListener('click', outsideClickWch);
// Function to open modal
function openWchModal(){
	wchModal.style.display = 'block';
}
// Function to close modal
function closeWchModal(){
	wchModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickWch(e){
	if(e.target == wchModal){
		wchModal.style.display = 'none';
	}
}

// Hipster Dance Party Modal
// Get close button
var closeBtnHdp = document.getElementById('closeBtnHdp');
// Get modal element
var hdpModal = document.getElementById('hdpModal');
//Get open modal button
var modalBtnHdp = document.getElementById('modalBtnHdp');
//Listen for open click
modalBtnHdp.addEventListener('click', openHdpModal);
//Listen for close click
closeBtnHdp.addEventListener('click', closeHdpModal);
//Listen for outside click
window.addEventListener('click', outsideClickHdp);
// Function to open modal
function openHdpModal(){
	hdpModal.style.display = 'block';
}
// Function to close modal
function closeHdpModal(){
	hdpModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickHdp(e){
	if(e.target == hdpModal){
		hdpModal.style.display = 'none';
	}
}

//Blueberry Wheat Modal
// Get close button
var closeBtnBw = document.getElementById('closeBtnBw');
// Get modal element
var bwModal = document.getElementById('bwModal');
//Get open modal button
var modalBtnBw = document.getElementById('modalBtnBw');
//Listen for open click
modalBtnBw.addEventListener('click', openBwModal);
//Listen for close click
closeBtnBw.addEventListener('click', closeBwModal);
//Listen for outside click
window.addEventListener('click', outsideClickBw);
// Function to open modal
function openBwModal(){
	bwModal.style.display = 'block';
}
// Function to close modal
function closeBwModal(){
	bwModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickBw(e){
	if(e.target == bwModal){
		bwModal.style.display = 'none';
	}
}

//Coconut Creme Pie Modal
// Get close button
var closeBtnCcp = document.getElementById('closeBtnCcp');
// Get modal element
var ccpModal = document.getElementById('ccpModal');
//Get open modal button
var modalBtnCcp = document.getElementById('modalBtnCcp');
//Listen for open click
modalBtnCcp.addEventListener('click', openCcpModal);
//Listen for close click
closeBtnCcp.addEventListener('click', closeCcpModal);
//Listen for outside click
window.addEventListener('click', outsideClickCcp);
// Function to open modal
function openCcpModal(){
	ccpModal.style.display = 'block';
}
// Function to close modal
function closeCcpModal(){
	ccpModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickCcp(e){
	if(e.target == ccpModal){
		ccpModal.style.display = 'none';
	}
}

//Augustfest Modal
// Get close button
var closeBtnAf = document.getElementById('closeBtnAf');
// Get modal element
var afModal = document.getElementById('afModal');
//Get open modal button
var modalBtnAf = document.getElementById('modalBtnAf');
//Listen for open click
modalBtnAf.addEventListener('click', openAfModal);
//Listen for close click
closeBtnAf.addEventListener('click', closeAfModal);
//Listen for outside click
window.addEventListener('click', outsideClickAf);
// Function to open modal
function openAfModal(){
	afModal.style.display = 'block';
}
// Function to close modal
function closeAfModal(){
	afModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickAf(e){
	if(e.target == afModal){
		afModal.style.display = 'none';
	}
}

//I'm an IPA Agent Modal
// Get close button
var closeBtnIpaa = document.getElementById('closeBtnIpaa');
// Get modal element
var ipaaModal = document.getElementById('ipaaModal');
//Get open modal button
var modalBtnIpaa = document.getElementById('modalBtnIpaa');
//Listen for open click
modalBtnIpaa.addEventListener('click', openIpaaModal);
//Listen for close click
closeBtnIpaa.addEventListener('click', closeIpaaModal);
//Listen for outside click
window.addEventListener('click', outsideClickIpaa);
// Function to open modal
function openIpaaModal(){
	ipaaModal.style.display = 'block';
}
// Function to close modal
function closeIpaaModal(){
	ipaaModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickIpaa(e){
	if(e.target == ipaaModal){
		ipaaModal.style.display = 'none';
	}
}