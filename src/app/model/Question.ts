import { Option } from "./Option";

export class Question{

    id:number;
    name:string;
    options:Option[];
    
    isSelected:boolean=false;
    isCorrect:boolean=false;
    constructor(data:any)
    {
        this.id=data.id;
        this.name=data.name;
        this.options=[];
        data.options.forEach((o:Option) => {
            this.options.push(new Option(o));
        });

    }
}