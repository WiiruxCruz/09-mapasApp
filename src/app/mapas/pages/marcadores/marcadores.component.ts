import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
	color: string;
	marker: mapboxgl.Marker;
}

@Component({
	selector: 'app-marcadores',
	templateUrl: './marcadores.component.html',
	styles: [`
	.mapa-container {
		height: 100%;
		width: 100%;
	}

	.list-group {
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 99;
	}

	li {
		cursor: pointer;
	}
	`]
})
export class MarcadoresComponent implements AfterViewInit {
	@ViewChild('mapa') divMapa!: ElementRef;

	mapa!: mapboxgl.Map;
	zoomLevel: number = 15;
	center: [ number, number ] = [  -96.1058807755658, 19.140431258623337 ];

	//arreglo de marcadores
	marcadores: MarcadorColor[] = [];

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

		/*
		new mapboxgl.Marker()
			.setLngLat( this.center )
			.addTo( this.mapa );
		*/
	}

	agregarMarcador() {

		const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
		const nuevoMarcador = new mapboxgl.Marker({
			draggable: true,
			color: color
		})
		.setLngLat( this.center )
		.addTo( this.mapa );

		this.marcadores.push({
			color,
			marker: nuevoMarcador
		});

	}

	irMarcador() {
		//this.mapa.flyTo();
	}
}
