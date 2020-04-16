import {Component, OnInit} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ToastController} from '@ionic/angular';

const {Device} = Plugins;


@Component({
    selector: 'app-map',
    templateUrl: 'map.page.html',
    styleUrls: ['map.page.scss']
})
export class MapPage implements OnInit {

    constructor(
        private http: HttpClient,
        public toastController: ToastController
    ) {
    }


    async ngOnInit() {

    }


}
