export class InsertModel{
    userId: string;
    password: string;
    firstname: string;
    lastname: string;
    typeId:number;
}

export class MultipleListModel{
   id: string;
   firstname: string;
   lastname: string;
}

export class MultipleInsertModel{
    multipleData:Array<MultipleListModel> = new Array<MultipleListModel>();
    userType:number;
}