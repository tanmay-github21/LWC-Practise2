import { LightningElement, api, track} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
const columns= [{label:'Account Name', fieldName:'Name'}, {label:'Id', fieldName:'Id'}, {label:'Status', fieldName:'Active__c'}];
export default class DataTableChild extends LightningElement {
     columns=columns; 
     accounts1; 
     accounts2;
     inactive_AccountId='';
     @api selectedAccountId; 
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
         this.selectedAccountId= event.detail.selectedRows; 
         const passParent= new customEvent('parentpush',{detail:this.selectedAccountId});
         this.dispatchEvent(passparent);
     }
}