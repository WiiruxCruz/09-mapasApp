import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
	selector: 'app-full-screen',
	templateUrl: './full-screen.component.html',
	styles: [`
		#mapa {
			height: 100%;
			width: 100%;
		}
	`]
})
export class FullScreenComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {

		console.log('FullScreen');

		var map = new mapboxgl.Map({
			container: 'mapa',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [ -96.1058807755658, 19.140431258623337 ],
			zoom: 17
		});
	}

}
