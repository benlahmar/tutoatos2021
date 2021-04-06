export class Option
{
    id:number;
    name:string;
    isAnswer:boolean;//est ce que c est la bonne reponse

    isselected: boolean=false;
    


    constructor(data:any)
    {
        this.id=data.id;
        this.name=data.name;
        this.isAnswer=data.isAnswer;
        this.isselected=false;
    }
}