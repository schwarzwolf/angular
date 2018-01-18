import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kompeins',
  templateUrl: './kompeins.component.html',
  styleUrls: ['./kompeins.component.css']
})
export class KompeinsComponent{

	title = 'dies ist ein erster test';
	objekt = {
		name: 'chuchu',
		gender: 'apache kampfhubschrauber'
	};

	meinArray = ["hund", "katze", "wolf"];
	
	wenn = "hallo";
	
	klasse = "gg";
	
	bild = 'http://www.zooroyal.de/magazin/wp-content/uploads/2017/06/hund-im-sommer-760x560.jpg';
	
	meineFunktion() {
		document.write("geklappt!")
	};
	
	farbe = "farbee";
}
