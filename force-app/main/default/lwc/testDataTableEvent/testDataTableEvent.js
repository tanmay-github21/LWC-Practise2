import { LightningElement, api, track, wire} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
const columns=[{label:"Id", fieldName:"Id"}, {label:"Name", fieldName:"Name"}];
export default class TestDataTableEvent extends LightningElement {
    columns=columns; 
    @track user_Input; 
    accounts1;
    @wire(active_Accounts)
    wiredMethod({data, error})
    {
         if(data)
         this.accounts1=data;
         else if (error)
         this.error=error; 
    }
    copyValue = event=>
    {
        console.log('Console Log Entered Into Data Table Method');
        var capturedId= event.detail.selectedRows; 
        console.log('Console Log JSON Convert'+'\t'+Json.stringify(capturedId)); //this showed an NoErrorObjectAvailable error.
    }
}