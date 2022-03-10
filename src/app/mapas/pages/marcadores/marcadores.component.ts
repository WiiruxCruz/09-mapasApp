import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
	selector: 'app-marcadores',
	templateUrl: './marcadores.component.html',
	styles: [`
	.mapa-container {
		height: 100%;
		width: 100%;
	}
	`]
})
export class MarcadoresComponent implements AfterViewInit {
	@ViewChild('mapa') divMapa!: ElementRef;

	mapa!: mapboxgl.Map;
	zoomLevel: number = 15;
	center: [ number, number ] = [  -96.1058807755658, 19.140431258623337 ];

	constructor() { }
	ngAfterViewInit(): void {
		console.log('afterViewInit', this.divMapa);

		this.mapa = new mapboxgl.Map({
			container: this.divMapa.nativeElement,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: this.center,
			zoom: this.zoomLevel
		});

		/*
		Agregar marcador de texto
		const markerHtml: HTMLElement = document.createElement('div');
		markerHtml.innerHTML = 'Hola Mundo';

		new mapboxgl.Marker({
			element: markerHtml
		})
		*/

		new mapboxgl.Marker()
			.setLngLat( this.center )
			.addTo( this.mapa );
	}
}
