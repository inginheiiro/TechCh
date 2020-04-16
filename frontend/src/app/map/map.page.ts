import {Component, OnInit} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {HttpClient} from '@angular/common/http';
import {ToastController} from '@ionic/angular';
import {Observable} from 'rxjs';

const {Device} = Plugins;


@Component({
    selector: 'app-map',
    templateUrl: 'map.page.html',
    styleUrls: ['map.page.scss']
})
export class MapPage implements OnInit {

    private endpointZones = 'http://localhost:3000/api/v1/db/top-zones/';

    public top = 'dropoffs';
    public result;

    constructor(
        private http: HttpClient,
        public toastController: ToastController
    ) {
    }

    async ngOnInit() {
        this.loadTopZones();
    }

    public Sum(a: number, b: number): number {
        return Number(a) + Number(b);
    }

    public async loadTopZones() {
        this.fetchZones().subscribe(data => {
            this.result = data.top_zones;

            console.log(this.result);
        }, error => {
             this.presentToast('Problems with backend?');
            }
        );
    }

    async presentToast(message: string) {
        const toast = await this.toastController.create({
            message ,

            position: 'middle',
            buttons: [
                {
                    icon: 'close-circle',
                    role: 'cancel'
                }
            ]
        });
        await toast.present();
    }

    fetchZones(): Observable<any> {
        return this.http.get(`${this.endpointZones}${this.top}`);
    }


}
