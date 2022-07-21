import { LightningElement, api, track} from 'lwc';
const columns=[{label:'Account Name', fieldName:'Name'}];
export default class ImperativeParent extends LightningElement {
    @track accounts1;
    @track selectedRows; 
    @track rowid;
    @track message; 
    @track message2; 
    @track message3;
    columns=columns; 
    // constructor()
    // {
    //     console.log('Console log parent constructor called'); 
    //     super();
    // }
 
    
    show_Active() {this.template.querySelector("c-imperative-child").handleValueChange(); }

    show_Inactive() {this.template.querySelector("c-imperative-child").handleValueChange2(); }

    handleSelectedRows = event =>
    {
        const fromChild= event.detail; 
        this.message= fromChild;
    }
    handlePassText=event=>
    {
        console.log('Console log parent 2nd event');
        const const2= event.detail;
        this.message2= const2; 
    }
    handlePassCase=event=> 
    {
        console.log('Console log parent casemethod'); 
        const const3= event.detail;
        this.message3= const3; 
    }
}