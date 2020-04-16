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

  public zone :any;
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


  public loadZones() {
    this.fetchZones().subscribe(data => {
      this.result = data.zones;

      console.log(this.result);
    });
  }

  public changed() {
    console.log(this.zone);
    console.log(this.dt);

    this.http.get(`${this.endpointTrips}${ encodeURIComponent(this.zone.Zone)}/date/${this.dt}`).subscribe(data => {
      this.result2=data.zone;
      console.log(this.result2);
    });


  }

  fetchZones(): Observable<any> {
    return this.http.get(`${this.endpointZones}`);
  }


}
