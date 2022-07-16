import { LightningElement, api, wire, track} from 'lwc';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
const columns=[{label:"Name", fieldName:"Name"},{label:"Status", fieldName:"Active__c"}, {label:"Id", fieldName:"Id"}];
export default class Component2 extends LightningElement 
{
    @api publicProperty;
    // @track message;
    @track error; 
    accounts1=[]; 
    columns=columns;
    @wire(inactive_Accounts)
    wire_Inactive({data, error})
    {
        if(data)
        {
            this.accounts1=data;
            console.log('Console log wire method'+'\t'+this.accounts1); 
            this.error= undefined; 
        }
        else if (error)
        {
            this.error=error; 
            console.error('console log error occured'+'\t'+this.error.name); 
            
        }

    }
    handleSelection=event=> 
    {
        console.log('Console log Entered into handle event'); 
        this.publicProperty= event.detail.selectedRows;
        console.log('Console log event property'+'\t'+this.publicProperty);
        const passParent= new CustomEvent('selected',{detail:this.publicProperty});
        this.dispatchEvent(passParent);
        console.log('Console log event dispatched');
    }
}