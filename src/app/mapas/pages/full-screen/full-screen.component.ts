import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment.prod';

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

		//(mapboxgl as any).accessToken = 'pk.eyJ1Ijoid2lpcnV4Y3J1eiIsImEiOiJjbDBodDhjbTkwN3BmM2Vxd3ZuY21reG85In0.J6npKCfkCbG86unIOUzWaQ';

		var map = new mapboxgl.Map({
			container: 'mapa',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [ -96.1058807755658, 19.140431258623337 ],
			zoom: 17
		});
	}

}
