import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeolocationPosition, Plugins} from '@capacitor/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {OAuth2Client} from '@byteowls/capacitor-oauth2';
import {registerWebPlugin} from '@capacitor/core';
import Stack from 'ts-data.stack';
import {getDistance} from 'geolib';
import {environment} from '../environments/environment.prod';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    private stack = new Stack<GeolocationPosition>();

    private watch: string;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }


    initializeApp(): void {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }


}
