import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastController} from '@ionic/angular';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    private endpointZones = 'http://localhost:3000/api/v1/db/zones';
    private endpointTrips = 'http://localhost:3000/api/v1/db/zone-trips/';

    public zone: any;
    public dt = new Date('2018-01-12').toISOString();
    public result;
    public result2;

    constructor(
        private http: HttpClient,
        public toastController: ToastController
    ) {
    }

    async ngOnInit() {
        this.loadZones();
    }

    public async loadZones() {
        this.fetchZones().subscribe(data => {
            this.result = data.zones;

        }, error => {
            this.presentToast('Problems with backend?');
        });
    }

    public async changed() {
        this.http.get(`${this.endpointTrips}${encodeURIComponent(this.zone.Zone)}/date/${this.dt}`).subscribe(data => {
            this.result2 = data;
            console.log(this.result2);
        }, error => {
            this.presentToast('Problems with backend?');
        });
    }

    async presentToast(message: string) {
        const toast = await this.toastController.create({
            message,

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
        return this.http.get(`${this.endpointZones}`);
    }


}
