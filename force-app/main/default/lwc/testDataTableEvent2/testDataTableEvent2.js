import { LightningElement, api, wire, track} from 'lwc';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
const columns= [{label:"Name", fieldName:"Name"}, {label:"ID", fieldName:"ID"}, {label:"Status", fieldName:"Active__c"}]; 
export default class TestDataTableEvent2 extends LightningElement 
{
    accounts1; 
    columns=columns; 
    @track c1;
    @api copyValue;
    @track c2;
    @api showAccount()
    {
        inactive_Accounts()
        .then(result=>{this.accounts1=result; console.log('Console log child',this.accounts1);})
        .catch(error=>{this.error=error;}); 
    }

    handleRowSelection=event=>
    {
        this.copyValue= event.detail.selectedRows; 
        console.log('Console log Hello From Child Component 4654',this.copyValue); 
        const childConst= new customEvent('datatable', {detail:this.c1});
        this.dispatchEvent(childConst); 
        console.log('Console log event firederty gkrgnr 454554'); 
    }
}