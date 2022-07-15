import { LightningElement, api, track} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
columns=[{label:'Name', fieldName:'Name'}, {label:'Active',fieldName:'Active__c'}];
export default class TopComponent extends LightningElement {
    @track accounts1;
    @track accounts2;
    @track error;  
    show_Active()
    {
        active_Accounts()
        .then(result=> {this.accounts1=result;})
        .catch(error=>{this.error=error; console.log('Error Occured'+'\t'+error);}); 
    }

    show_Inactive() 
    {
        inactive_Accounts()
        .then(result=>{this.accounts2=result;})
        .catch(error=>{this.error=error; console.log('Error Occured'+'\t'+error)});
    }
}