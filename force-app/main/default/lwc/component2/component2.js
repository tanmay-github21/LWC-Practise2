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
        var selectedRecords= this.template.querySelector("lightning-datatable").getSelectedRows(); 
        let id='';
        selectedRecords.forEach(currentItem => {id= id+','+currentItem.Id; console.log('Console log currentid'+'\t'+currentItem.Id)}); 
        this.publicProperty= id.replace(/^,/,''); 
        console.log('Console log property id'+'\t'+this.publicProperty); 
        const passParent= new CustomEvent('selected', {detail:this.publicProperty});
        this.dispatchEvent(passParent); 
    }
}