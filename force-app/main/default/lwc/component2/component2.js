import { LightningElement, api, wire, track} from 'lwc';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
import caseList from '@salesforce/apex/active_Inactive_Accounts.caselist';
import CleanStatus from '@salesforce/schema/Account.CleanStatus';
const columns=[{label:"Name", fieldName:"Name"},{label:"Status", fieldName:"Active__c"}, {label:"Id", fieldName:"Id"}];
export default class Component2 extends LightningElement 
{
    @api publicProperty; 
    @api selectedId;
    account1; 
    account2; 
    columns=columns; 
    @api showActive()
    {
        console.log('Active account');
        active_Accounts()
        .then(result=> {this.accounts1=result; console.log(this.accounts1);} )
        .catch(error=> {this.error=error;})
    }

    @api showInactive() 
    {
        console.log('Inactive account');
        inactive_Accounts()
        .then(result=> {this.accounts2=result; console.log(this.accounts2);})
        .catch(error=> {this.error=error;})
    }
    handleRowAction=event=>
    {
        var selectedRow= this.template.querySelector("lightning-datatable").getselectedRows();
        let id='';
        selectedRow.forEach(current => {id=id+','+current.id;});
        this.selectedId=id.replace(/^,/,'');
        this.publicProperty=this.selectedId;
        
    }
}