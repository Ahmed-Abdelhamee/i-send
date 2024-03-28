import { Component } from '@angular/core';
import { homeClients } from 'src/app/admin/interfaces/home-clients.interface';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', "../../Modals/css/main.css"]
})
export class HomeComponent {

  clientsList: homeClients[] = []

  clientsListGroup: any[] = []

  constructor(private dataServ: DataServiceService) {
    dataServ.getdata("allClients").subscribe({
      next: data => {
        for (const key in data) {
          this.clientsList.push(data[key])
        }
      },
      error: () => { console.error("check your network") },
    })

  }

  // advertingNumber:number=4100;
  // intervalValue=setInterval((a:any)=>{
  //   this.advertingNumber+=4;
  //   if(this.advertingNumber===5000)
  //   clearInterval(this.intervalValue)
  // },10)
  x() {
    console.log("asd")
  }
}
