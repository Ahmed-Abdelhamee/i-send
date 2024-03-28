import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataServiceService } from '../services/data-service.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { homeClients } from './interfaces/home-clients.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
 // variables for control view and data 
 uploadingImg:string="";
 mainControl:string="add";
 // variables for data 
 clientPhoto=this.formBuilder.group({
   img:[""],
   id:[new Date().getTime()]
 })
 photoUrl:string="";
 listArray:homeClients[]=[]; // for showing the data
 // item key in database
 globalKey:string="";
 globalObject:any;

 constructor(private formBuilder:FormBuilder , private fireStorage:AngularFireStorage,private dataServ:DataServiceService) {
   dataServ.getdata("allClients").subscribe(data =>{
     for (const key in data) {
       this.listArray.push(data[key])
     }
   })
  }

 ngOnInit(): void {
 }

 // ------------- control the show ---------------
 viewControl(mainControl:string){
   this.mainControl=mainControl;
   this.photoUrl=""
 }
 resetView() {
  this.clientPhoto.patchValue({
    id: new Date().getTime(),
    img: ""
  })
}
 //----------------------------------------------
 getData(){
   this.listArray=[];
   this.dataServ.getdata("allClients").subscribe(data =>{
     for (const key in data) {
       this.listArray.push(data[key])
     }
   })
 }
 
 // ------------- uploading File ---------------
 async uploadingFile(event:any){
   this.uploadingImg="uploadingImg";
   const file=event.target.files[0];
   if(file){
     const path=`DEALZUS/${new Date().getTime()}${file.name}`; // we make name of file in firebase storage 
     const uploadTask = await this.fireStorage.upload(path,file)
     const url =await uploadTask.ref.getDownloadURL()
     this.photoUrl=url;
   }
   this.uploadingImg="imgUploaded";
   this.clientPhoto.patchValue({
     img:this.photoUrl
   })
 }
 //----------------------------------------------

 // --------------- submit form -----------------
 submit(){
   if(this.mainControl=="add"){
     this.dataServ.create(this.clientPhoto.value,"allClients","",this.mainControl).subscribe(()=>{
       this.getData()
       this.mainControl="showData";
       this.photoUrl=""
     })
   }else {
     this.clientPhoto.patchValue({
       id:this.globalObject.id
     })
     if(this.photoUrl==""){
       this.clientPhoto.patchValue({
         img:this.globalObject.img
       })
     }
     if(this.photoUrl!="")
       // this.fireStorage.storage.refFromURL(this.globalObject.img!).delete()
       this.dataServ.create(this.clientPhoto.value,"allClients",this.globalKey,this.mainControl).subscribe(()=>{
         this.getData()
         this.mainControl="showData";
         this.photoUrl=""
       })
     }
 }
 //---------------------------------------------

 // -------- find item for Edit or Delete --------
 findItem(item:any){
   this.globalObject=item
   this.dataServ.getdata("allClients").subscribe((data):any =>{
     for (const key in data) {
       if(item.id==data[key].id){
         this.globalKey=key;
         break;
       }
     }
   })
 }
 //---------------------------------------------

 // --------- to impelement the deletion ---------
 deleteTheItem(){
    this.dataServ.delete("allClients",this.globalKey).subscribe(()=>{
     this.getData()
     this.mainControl="showData";
     this.fireStorage.storage.refFromURL(this.globalObject.img).delete()
   })

 }
 //---------------------------------------------


}