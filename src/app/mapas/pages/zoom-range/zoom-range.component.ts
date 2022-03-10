import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
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
		width: 400px;
	}
	`]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

	@ViewChild('mapa') divMapa!: ElementRef;

	mapa!: mapboxgl.Map;
	zoomLevel: number = 10;
	center: [ number, number ] = [  -96.1058807755658, 19.140431258623337 ];

	constructor() {

	}
	ngOnDestroy(): void {
		this.mapa.off('zoom', () => {});
		this.mapa.off('zoomend', () => {});
		this.mapa.off('move', () => {});
	}

	ngAfterViewInit(): void {
		console.log('Zoom range');
		console.log('afterViewInit', this.divMapa);

		//(mapboxgl as any).accessToken = 'pk.eyJ1Ijoid2lpcnV4Y3J1eiIsImEiOiJjbDBodDhjbTkwN3BmM2Vxd3ZuY21reG85In0.J6npKCfkCbG86unIOUzWaQ';

		this.mapa = new mapboxgl.Map({
			container: this.divMapa.nativeElement,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: this.center,
			zoom: this.zoomLevel
		});

		this.mapa.on('zoom', (ev) => {
			this.zoomLevel = this.mapa.getZoom();
		});

		this.mapa.on('zoomend', (ev) => {
			if( this.zoomLevel > 18 ){
				this.mapa.zoomTo(18);
			}
		});

		this.mapa.on('move', (event) => {
			const target = event.target;
			const { lng, lat } = target.getCenter();
			this.center = [ lng, lat ];
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

	zoomCambio( valor: string ) {
		this.mapa.zoomTo( Number(valor) );
	}
}
