import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class ZoomRangeComponent implements AfterViewInit {

	@ViewChild('mapa') divMapa!: ElementRef;

	mapa!: mapboxgl.Map;

	constructor() {

	}

	ngAfterViewInit(): void {
		console.log('Zoom range');
		console.log('afterViewInit', this.divMapa);

		//(mapboxgl as any).accessToken = 'pk.eyJ1Ijoid2lpcnV4Y3J1eiIsImEiOiJjbDBodDhjbTkwN3BmM2Vxd3ZuY21reG85In0.J6npKCfkCbG86unIOUzWaQ';

		this.mapa = new mapboxgl.Map({
			container: this.divMapa.nativeElement,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [ -96.1058807755658, 19.140431258623337 ],
			zoom: 17
		});
	}

	zoomOut() {
		console.log('Zoom out');
		this.mapa.zoomOut();
	}

	zoomIn() {
		console.log('Zoom in');
		this.mapa.zoomIn();
	}
}
