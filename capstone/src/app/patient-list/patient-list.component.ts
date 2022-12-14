import { Component, OnInit } from '@angular/core';
import { patients,PatientRegServiceService } from '../services/patient-reg-service/patient-reg-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  searchtext:String=""
  patient: patients[]=[]
  patientt:patients[]=[]
  
  

  delete(id:any){
    console.log(id)
    this.httpClientService.deletepatById(id).subscribe(data=>{})

     alert('are you sure you want to delete')

    this.httpClientService.getpats().subscribe(data=>{this.patient=data
      console.log(this.patient)
       })
    
    // window.location.reload()
  }


  constructor(private httpClientService:PatientRegServiceService) { }
  form!:NgForm
  
  ngOnInit(): void {
    this.httpClientService.getpats().subscribe(data=>{this.patient=data
      console.log(this.patient)
       })
    
  }
  // fetchId(form: NgForm){
  //   console.log(form.value.id)
  //   this.httpClientService.getpatByid(form.value.id).subscribe(data=>{this.patient=data
      
  //   console.log(this.patient)}
  //     )
  // }

}
