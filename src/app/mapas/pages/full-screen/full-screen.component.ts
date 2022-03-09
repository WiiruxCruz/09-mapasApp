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
		//(mapboxgl as any).accessToken = 'pk.eyJ1Ijoid2lpcnV4Y3J1eiIsImEiOiJjbDBodDhjbTkwN3BmM2Vxd3ZuY21reG85In0.J6npKCfkCbG86unIOUzWaQ';
		(mapboxgl as any).accessToken = environment.mapboxToken;

		var map = new mapboxgl.Map({
			container: 'mapa',
			style: 'mapbox://styles/mapbox/streets-v11'
		});
	}

}
