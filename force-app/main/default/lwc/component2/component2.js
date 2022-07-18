import { LightningElement, api, wire, track} from 'lwc';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
const columns=[{label:"Name", fieldName:"Name"},{label:"Status", fieldName:"Active__c"}, {label:"Id", fieldName:"Id"}];
export default class Component2 extends LightningElement 
{
    @api publicProperty;
    @api accountId;
    @track error; 
    @track accounts1 
    columns=columns;
    @wire(inactive_Accounts)
    wire_Inactive({data, error})
    {
        if(data)
        {
            this.accounts1=data; 
            console.log('Console log accounts received'+'\t'+this.accounts1); 
        }
        else if (error)
        {
            this.error=error;
            console.error('Error Occured'+'\t'+this.error);
        }

    }
    handleSelection=event=> 
    {
        var dr= event.detail.selectedrows;
        var converted_Value= JSON.stringify(this.publicProperty);
        const passParent= new CustomEvent('selected',{detail:this.publicProperty});
        this.dispatchEvent(passParent);
        console.log('Console log event dispatched');  
        
    }
}