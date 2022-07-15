import { LightningElement, api, track, wire} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
const columns=[{label:"Id", fieldName:"Id"}, {label:"Name", fieldName:"Name"}];
export default class TestDataTableEvent extends LightningElement 
{
    @track parameter; 
    showMe()
    {
        this.parameter='Hello Peter'; 
        console.log('console log entered into method'+'\t'+this.parameter);
    }
}
    