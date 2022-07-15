import { LightningElement, api, wire, track } from "lwc";
import active_Accounts from "@salesforce/apex/active_Inactive_Accounts.active_Accounts";
import inactive_Accounts from "@salesforce/apex/active_Inactive_Accounts.inactive_Accounts";
const columns= [{label:"Name", fieldName:"Name"}, {label:"Status", fieldName:"Active__c"}, {label:"ID", fieldName:"ID"}];
export default class dataTableChild extends LightningElement
{
    columns=columns; 
    @api apiValue; 
    @track trackValue; @track error;  
    accounts1; accounts2; 

    @api callP1()
    {
        console.log('console log active account called'); 
        active_Accounts()
        .then(result=>{this.accounts1=result; console.log('console log active account fetched'+'\t'+this.accounts1);})
        .catch(error=>{this.error=error; console.error('console log error occured while fetching active accounts'+'\t'+this.error)})
    }
    @api callP2()
    {
        console.log('console log inactive account called');
        inactive_Accounts()
        .then(results=>{this.accounts2=results; console.log('console log inactive account fetched'+'\t'+this.accounts2);})
        .catch(error=>{this.error=error; console.error('console log error occured while fetching inactive accounts'+'\t'+this.error);});
    }
}