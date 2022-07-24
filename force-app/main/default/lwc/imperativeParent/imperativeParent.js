import { LightningElement, api, track} from 'lwc';
import caselist from '@salesforce/apex/active_Inactive_Accounts.caselist';
const columns=[{label:'Account Name', fieldName:'Name'}];
const casecolumns=[{label:"CaseNumber", fieldName:"CaseNumber"}, {label:"Case-Id", fieldName:"Id"}, {label:"Status", fieldName:"Status"}];
export default class ImperativeParent extends LightningElement {
    @track accounts1;
    @track selectedRows; 
    @track rowid;
    @track message; 
    @track message2; 
    @track message3;
    @track message4;
    @track message5
    columns=columns; 
    casecolumns= casecolumns;
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
        console.log('Console log entered into parent casemethod handling'); 
        const const3= event.detail;
        this.message3= const3; 
        console.log('Console Log parent Received the following'+'\t'+this.message3);
    }
    handleAccounts_TypeNull=event=>
    {
       console.log('Entering into Parent event handling for inactive accounts'); 
       const const4= event.detail;
       this.message4= const4; 
       caselist({accountid:this.message4})
       .then(result2=>{this.message5=result2; console.log('Parent Caselist',this.message5);}) 
       .catch(error=>{this.error=error;})
       console.log('Const-4-Parent',const4+'\n'+this.message4); 
    }
}