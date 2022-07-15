import { LightningElement, api, track} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
const columns= [{label:'Account Name', fieldName:'Name'}, {label:'Id', fieldName:'Id'}, {label:'Status', fieldName:'Active__c'}];
export default class DataTableChild extends LightningElement {
    columns=columns; 
    @track user_Input;
    accounts1; 
    accounts2;
    @api active;
    @track inactive;  
    @api message;
    @track error; 

    @api activeAccount()
    {
         console.log('Active Account Child Method')
         active_Accounts()
         .then(result=> {this.accounts1=result; console.log('Result',result);})
         .catch(error=> {this.error=error; console.log('Error Occured'+'\t'+error);}); 
    }

    @api inactiveAccount()
    {
        console.log('Inactive Account child method')
         inactive_Accounts()
         .then(result=> {this.accounts2=result; console.log('Result',result);})
         .catch(error=> {this.error=error; console.log('Error Occured'+'\t'+error);}); 
    }

    handleRowSelection= event=> 
    {
        this.active= event.detail.selectedRows; 
        console.log('Selected id event',this.active+'\n'+'Event Details'+'\t'+event.detail.selectedRows);
        const passParent= new customEvent('parentpush',{detail:{message:this.active}});
        this.dispatchEvent(passParent);
    }

    handleRowSelection2=event=>
    {
        this.inactive=event.detail.selectedRows;
        console.log('DataTable Child inactive',this.inactive); 
        const passParentinactive= new customEvent('inactivedt', {detail:this.inactive});
        this.dispatchEvent(passParentinactive); 
    }

    nameChange= event=> 
    {
        this.user_Input= event.target.value; 
        console.log('Text Input'+'\t'+this.user_Input); 

    }
}