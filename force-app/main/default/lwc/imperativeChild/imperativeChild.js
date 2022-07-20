import { LightningElement, track, api, wire} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
import caselist from '@salesforce/apex/active_Inactive_Accounts.caselist';
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
     text;
     columns=columns; 
     @api publicProperty;
     @api handleValueChange()
     {
         console.log('Called By Parent');
         active_Accounts()
         .then(result=> {this.accounts1=result; console.log('Result',result);})
         .catch(error=> {this.error=error; console.log('Error Occured'+'\t'+error);});
         //cnjcfnj 
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
         var selectedId= this.template.querySelector("lightning-datatable").getSelectedRows(); 
         let id='';
         selectedId.forEach(currentElement => {id=id+','+currentElement.Id});        
         this.publicProperty=id.replace(/^,/,''); 
         const passParent= new CustomEvent('caselist', {detail:{accountid: this.publicProperty}}); 
         this.dispatchEvent(passParent); 
         console.log('console log from imperative child event passed to apex class');
     }
     callParent=event=>
     {
         this.text='Hello this is tanmay'; 
         const passParent2= new CustomEvent('passtext',{detail:this.text});
         this.dispatchEvent(passParent2);
     }
}