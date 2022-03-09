import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
	selector: 'app-zoom-range',
	templateUrl: './zoom-range.component.html',
	styles: [`
	.mapa-container {
		height: 100%;
		width: 100%;
	}

	.row{
		background-color: white;
		border-radius: 5px;
		bottom: 50px;
		left: 50px;
		padding: 10px;
		position: fixed;
		z-index: 999;
	}
	`]
})
export class ZoomRangeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		console.log('Zoom range');

		//(mapboxgl as any).accessToken = 'pk.eyJ1Ijoid2lpcnV4Y3J1eiIsImEiOiJjbDBodDhjbTkwN3BmM2Vxd3ZuY21reG85In0.J6npKCfkCbG86unIOUzWaQ';

		var map = new mapboxgl.Map({
			container: 'mapa',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [ -96.1058807755658, 19.140431258623337 ],
			zoom: 17
		});
	}

}
