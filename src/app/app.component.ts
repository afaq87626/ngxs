import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {doIncrease,doDecrease,getEmploye,EmployeId,DeleteId,
   AddData,UpdateData} from './ngxs-store/action';
import {counterStat} from './ngxs-store/state'
export interface IState {
  arr:{id:number,name:string,status:string}[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ngxs';
   counter:number=1;
   selEmp:any=null;
   id=null;
   dataName = '';
   serverStatus = '';
   editMode=true;
   constructor (private store:Store){

   }
   ngOnInit(): void {
   }
   @Select(counterStat.getValue) datas: Observable<number> | undefined;
   @Select(counterStat.getEmploye) selectEmp: Observable<number> | undefined;
   showdata(){
    this.store.dispatch(new getEmploye());
  }

  detail(i:number){
    this.store.dispatch(new EmployeId(i));
    this.selectEmp.subscribe(res=>{
      this.selEmp=res;
    })
  }
  addData(){
    console.log(this.dataName,this.serverStatus);
    this.store.dispatch(new AddData(this.dataName,this.serverStatus))
  }
  Delete(id)
  {
    this.store.dispatch(new DeleteId(id))
  }
  edit(id,name,status)
  {
        this.id=id
       this.dataName=name;
       this.serverStatus=status;
       this.editMode=false;
       console.log(name,status,this.id);
      

  }
  update()
  {
     this.editMode=true;
    this.store.dispatch(new UpdateData(this.id,this.dataName,this.serverStatus));
    this.dataName=null;
    this.serverStatus=null;
  }
  doIncrease(){
    // this.counter++;
    // console.log(this.counter);
    this.store.dispatch(new doIncrease());

  }
  doDecrease()
  {
    // this.counter--;

     this.store.dispatch(new doDecrease() )

  }

}
