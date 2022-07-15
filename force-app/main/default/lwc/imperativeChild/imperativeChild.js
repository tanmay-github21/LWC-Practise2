import { LightningElement, track, api, wire} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
import caseList from '@salesforce/apex/active_Inactive_Accounts.caseList'; 
const actions=[{label:'View Cases', name:'viewCases'}, 
               {label:'View Record', name:'viewRecord'}];

const columns=[{label:'Name', fieldName:'Name'}, 
               {label:'Status', fieldName:'Active__c'}, 
               {label:'Id', fieldName:'Id'}, 
               {type:'action', typeAttributes:{rowActions:actions}}];
export default class ImperativeChild extends LightningElement {
     
     accounts1;
     accounts2;
     recordId;
     columns=columns; 
     @api handleValueChange()
     {
         console.log('Called By Parent');
         active_Accounts()
         .then(result=> {this.accounts1=result; console.log('Result',result);})
         .catch(error=> {this.error=error; console.log('Error Occured'+'\t'+error);}); 
     }

     @api handleValueChange2()
     {
         console.log('Called By Parent Inactive Account'); 
         inactive_Accounts()
         .then(result=> {this.accounts2=result;})
         .catch(error=>{this.error=error; console.log('Error Occured'+'\t'+error);}); 
     }

     handleRowSelection = event => 
     {        
          var account_Selected=event.detail.selectedRows; 
          console.log('Value Captured'+'\t'+account_Selected);
          if(account_Selected.length>0)
          {
              console.log('Entered into event block');
              var el = this.template.querySelector('lightning-datatable');
              console.log('Lightning datatable'+'\t'+el);
              this.selectedRows=el.selectedRows; //putting this to the var shows other fields such as name along with the id 
              console.log('Selected Row',account_Selected);
              // console.log('Selected Row Id',+'\t'+this.selectedRows);
              const selectedEvent= new customEvent('passparent', {detail:event.target.value,bubbles:false});
              console.log('Before event dispatch');
              this.dispatchEvent(fromChild); 
              console.log('After event dispatch');
            // @wire(caseList, {passed_Id:this.selectedRows})
            // wiredData({data,error})
            // {}

        }
          
     }
}