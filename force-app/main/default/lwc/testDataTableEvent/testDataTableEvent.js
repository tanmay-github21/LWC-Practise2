import { LightningElement, api, track, wire} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
const columns=[{label:"Id", fieldName:"Id"}, {label:"Name", fieldName:"Name"}];
export default class TestDataTableEvent extends LightningElement 
{
    // @track parameter1; 
    // @track parameter2; 
    // showMe= event=> 
    // {
    //     // this.parameter1=event.target.value; 
    //     this.parameter1=event.target.value;
    //     console.log('Console log'+'\t'+event.target.value); 
    // }
    @track changedName; 
    @track user_Input;
    capitalized_Input
    nameChange(event)
    {
        this.user_Input=event.target.value;
        // this.capitalized_Input=string.toUpperCase(this.user_Input);
    }
}
    