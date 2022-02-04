  export class doIncrease{
    static readonly type="Increament"
  }

  export class doDecrease{
    static readonly type="Decreament"
  }
  export class getEmploye {
      static readonly type="Get"
  }
  export class EmployeId {
      static readonly type="id"
      constructor (public id:number){}
  }
  export class DeleteId{
    static readonly type="delete"
    constructor(public id:number){}
    
  }
  export class AddData{
    static readonly type="AddData"
    constructor(public name:string, public status:string){}
    
  }
  export class UpdateData{
    static readonly type="updateData"
    constructor(public id:number,public name:string, public status:string){}
    
  }