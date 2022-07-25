import { LightningElement, api, track} from 'lwc';
import caselist from '@salesforce/apex/active_Inactive_Accounts.caselist';
const columns=[{label:'Account Name', fieldName:'Name'}];
const casecolumns=[{label:"CaseNumber", fieldName:"CaseNumber"}, {label:"Case-Id", fieldName:"Id"}, {label:"Status", fieldName:"Status"}];
export default class ImperativeParent extends LightningElement {
    @track activeAccountId; 
    @track inactiveAccountId; 
    @track message4;
    @track message5;
    @track message6; 
    columns=columns; 
    casecolumns= casecolumns;
    show_Active() {this.template.querySelector("c-imperative-child").handleValueChange(); }
    show_Inactive() {this.template.querySelector("c-imperative-child").handleValueChange2(); }
    handleActiveAccounts=event=>
    {   
        console.log('Eneterd into Parent Active Account Method'); 
        const receivedAccountId= event.detail; 
        this.activeAccountId= receivedAccountId; 
        console.log('AccountId Parent',this.activeAccountId);
        caselist({accountid:this.activeAccountId})
       .then(result=>{this.message5=result; console.log('Following cases',this.message5);})
       .catch(error=>{error=>{this.error=error; console.error('Error happened',error);}}); 
    }



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    handleInactiveAccounts=event=>
    {
       console.log('Entering into Parent event handling for inactive accounts'); 
       const const4= event.detail;
       this.message4= const4; 
       caselist({accountid:this.message4})
       .then(result2=>{this.message6=result2; console.log('Parent Caselist',this.message6);}) 
       .catch(error=>{this.error=error;})
       console.log('Const-4-Parent',const4+'\n'+this.message4); 
    }
}