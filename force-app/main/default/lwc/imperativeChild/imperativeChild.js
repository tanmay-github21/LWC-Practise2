import { LightningElement, track, api, wire} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
import caselist from '@salesforce/apex/active_Inactive_Accounts.caselist';
const actions=[{label:'View Cases', name:'viewCases'}, 
               {label:'View Record', name:'viewRecord'}];

const columns=[{label:'Name', fieldName:'Name'}, 
               {label:'Date Created', fieldName:'CreatedDate'},
               {label:'Status', fieldName:'Active__c'}, 
               {label:'Id', fieldName:'Id'}, 
               {label:'Type', fieldName:'Type'},
               {type:'action', typeAttributes:{rowActions:actions}}];
export default class ImperativeChild extends LightningElement {
     
     accounts1;
     accounts2;
     recordId;
     text;
     columns=columns; 
     @api publicProperty;
     @api publicProperty2; 
     @track error; 
     @api handleValueChange()
     {
         console.log('Active Account Method Executed By Child');
         active_Accounts()
         .then(result=> {this.accounts1=result; console.log(this.accounts1);})
         .catch(error=> {this.error=error; console.log('Error Occured'+'\t'+error);});
     }

     @api handleValueChange2()
     {
         inactive_Accounts()
         .then(result=> {this.accounts2=result;})
         .catch(error=>{this.error=error; console.log('Error Occured'+'\t'+error);}); 
     }

    event_CaseListner=event=>
     {
        console.log('Entered into Datatable active method');
        var selectedId= this.template.querySelector("lightning-datatable").getSelectedRows(); 
        let cleanedId= '';
        selectedId.forEach(element => {cleanedId=cleanedId+','+element.Id});
        console.log('Cleaned Id active accounts',cleanedId); 
        this.publicProperty=cleanedId.replace(/^,/,''); 
        console.log('Cleaned Id active accounts',this.publicProperty); 
        const passParent3= new CustomEvent('activecases',{detail:this.publicProperty});
        console.log('Before event gets dispatched from child component'+'\t'+this.publicProperty);
        this.dispatchEvent(passParent3); 
        console.log('Event Dispatched from child');
     }
    event_CaseListner2= event=> 
    {
        console.log('Inactive method');
        var selectedId2= this.template.querySelector("lightning-datatable").getSelectedRows(); 
        let cleanedId2= '';
        selectedId2.forEach(element => {cleanedId2=cleanedId2+','+element.Id});
        console.log(cleanedId2); 
        this.publicProperty2=cleanedId2.replace(/^,/,''); 
        console.log(this.publicProperty2);
        const passParent4= new CustomEvent('inactivecases',{detail:this.publicProperty2});
        this.dispatchEvent(passParent4);
    } //end of event_CaseListner2
}
