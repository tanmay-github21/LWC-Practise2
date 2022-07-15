import {LightningElement, track,api} from 'lwc';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
const columns=[{label:'Account Name', fieldName:'Name'}, {label:'Status', fieldName:'Active__c'}, {label:'Record Id', fieldName:'Id'}];
export default class ImperativeAccountFetch extends LightningElement {
    columns=columns; 
    accounts1; 
    accounts2; 
    @track isLoading=false; 
    @track error;
    show_Active()
    {
        this.isLoading=true;
        active_Accounts()
        .then(result=> {this.accounts1=result; this.isLoading=false;})
        .catch(error=> {this.error=error; console.log('Error Occured'+'\t'+error);this.isLoading=false;}); 
    }

    show_Inactive()
    {
        this.isLoading=true; 
        inactive_Accounts()
        .then(result=> {this.accounts2=result; this.isLoading=false;})
        .catch(error=> {this.error=error; console.log('Error Occured'+'\t'+error);this.isLoading=false;}); 
    }
}