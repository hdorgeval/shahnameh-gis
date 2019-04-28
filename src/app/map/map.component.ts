import { Component, ViewChild, AfterViewInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls, Attribution, ScaleLine } from 'ol/control';
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';
import { fromLonLat } from 'ol/proj';
import { GeoobjectsComponent } from '../geoobjects/geoobjects.component';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class MapComponent implements AfterViewInit {

  @ViewChild(PopupComponent) popupComponent: PopupComponent;
  @ViewChild(GeoobjectsComponent) geoobjectsComponent: GeoobjectsComponent;

  ngAfterViewInit() {

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      controls: defaultControls({
        attribution: false
      }).extend([
        new Attribution({
          collapsible: true
        }),
        new ScaleLine()
      ]),
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      view: new View({
        center: fromLonLat([59.56, 36.45]),
        zoom: 4,
        minZoom: 2
      })
    });

    map.addLayer(this.geoobjectsComponent.vectorLayer);
    map.addOverlay(this.popupComponent.popup);

    map.on('click', (evt) => {
      let feature = map.forEachFeatureAtPixel(evt.pixel,
        (feature) => {
          return feature;
        });
      console.log(feature);
      this.popupComponent.showPopup(feature);
    });

  }

}
