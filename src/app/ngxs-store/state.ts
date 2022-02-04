import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import {doIncrease,doDecrease,getEmploye,
  EmployeId,DeleteId,AddData,UpdateData} from './action';

export interface IState {
    arr:{id:number,name:string,status:string}[];
    selectEmploye:{id:number,name:string,status:string};
}


@State<IState>({
    name: 'app',
    defaults: {
        arr:[{id:1,name:'afaq',status:'offline'},
        {id:2,name:'afaq2',status:'online'},
        {id:3,name:'afaq3',status:'offline'},
        {id:4,name:'afaq4',status:'online'},],
        selectEmploye:null,
    }
})
@Injectable()
export class counterStat {
    // arrof = []
    id=5;
@Selector()
 static getValue(state:IState)
 {
   return state.arr;
 }
 @Selector()
 static getEmploye(state:IState)
 {
   return state.selectEmploye;
 }

  // @Action(getEmploye)
  // getEmploye({getState, setState}:StateContext<IState>)
  // {
  //    let state=getState();
  //   setState({
  //           ...state,
  //           arr:this.arrof, 
  //     });
  // }
  @Action(EmployeId)
  employeId({getState, setState}:StateContext<IState>,{id}:EmployeId){
    const state=getState()
    const employlist=state.arr;
    let index=employlist.findIndex(emp=>emp.id===id)
    setState({
      ...state,
       selectEmploye:employlist[index],
    })
  }
  @Action(AddData)
   addaData({getState, patchState}:StateContext<IState>,{name,status }:AddData)
   {
    
      const state=getState();
      console.log("ADDDDDDDDDDD >>",state.arr)
      patchState({
        arr: [
          ...state.arr,
          {id:this.id,name:name,status:status}
        ]
      })
     this.id++;

        
   }
   @Action(UpdateData)
   updateData({getState, patchState}:StateContext<IState>,{id,name,status }:UpdateData)
   {
     const state=getState();
       console.log(state);
     const employ=state.arr;
     const index=employ.findIndex(item=>item.id==id);
    console.log(index);
      employ[index].id=id;
      employ[index].name=name;
      employ[index].status=status;
      console.log(employ)
      patchState({
           arr:employ, 
      })

   }

  @Action(DeleteId)
  deleteId({getState, setState}:StateContext<IState>,{id}:DeleteId){
      const state=getState();
      const filterEmploye=state.arr.filter(item=>item.id!==id);
      console.log(filterEmploye);
       setState({
         ...state,
           arr:filterEmploye,
       })

  }
//  @Action(doIncrease)
//  doIncrement({getState, setState}:StateContext<IState>)
//  {
//     let state = getState();
//      console.log('state..............',state.value);
//     return setState({
//       value: state.value+3,
//     arr:state.arr.
//     })
    
//  }
//  @Action(doDecrease)
//  doDecrement({getState, setState}:StateContext<IState>)
//  {
     
//     let state = getState();
  
//     return setState({
//       value: state.value-3,
//     })
    
//  }



}