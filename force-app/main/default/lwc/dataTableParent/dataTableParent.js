import { LightningElement, wire, track,api} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import caseList from '@salesforce/apex/active_Inactive_Accounts.caseList';
export default class DataTableParent extends LightningElement 
{
   @track message;
   @track cases; 
   selectedBoatTypeId = '';
   childCalled()
   {
       console.log('Active Account Fired'); 
       this.template.querySelector("c-data-table-child").activeAccount(); 
       console.log('Child Called'); this.showNotifications();
   }

   childCalled2()
   {
      console.log('Inactive Accounts Parent Method Fired');
      this.template.querySelector("c-data-table-child").inactiveAccount(); 
      this.showNotifications(); 
   }

   showCases = event => 
   {    
        console.log('called from child');
        const textValue=event.detail;
        this.message=textValue;
        console.log('Parent Received The Following'+'\t'+this.message+'\t'+textValue);
   }

   showNotifications()
   {
      const evt=new ShowToastEvent({title:'Called Apex', message:'Called Apex Class', variant:'Success', mode:'dismissable'});
      this.dispatchEvent(evt); 
   }

   // @wire(caseList,{passed_Id:'$message'})
   // wiredCases({data, error})
   // {
   //    console.log('Entered Into Case Retrieve Method'); 
   //    if(data) 
   //    {
   //        this.cases=data;
   //        this.error=undefined; 
   //    }
   //    else if (error)
   //    {
   //       this.cases=undefined;
   //       this.error=error;
   //       console.error('Error Occured While Retreiving Cases Having Name'+'\t'+error.name+'\n'+
   //       'And Message as'+'\t'+error.message+'\n'+
   //       'Stack Trace'+'\t'+error.stack+'\n'+
   //       'Status Code and Message'+'\t'+error.status+'\t'+error.statusText); 
   //    }
   // }
   
   callApex_Case(event)
   {
      let boatTypeId = event.target.value;
      console.log('BoatTypeId',boatTypeId); 
   }
}