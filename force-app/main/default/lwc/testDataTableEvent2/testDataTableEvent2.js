import { LightningElement, track, wire,api } from "lwc";
import inactive_Accounts from "@salesforce/apex/active_Inactive_Accounts.inactive_Accounts";
import active_Accounts from "@salesforce/apex/active_Inactive_Accounts.active_Accounts";
const columns=[{label:"Name", fieldName:"Name"}, {label:"Status", fieldName:"Active__c"}, {label:"Id", fieldName:"ID"}];
const columns2=[{label:"Name", fieldName:"Name"}, {label:"Status", fieldName:"Active__c"},{label:"ID", fieldName:"Id"}];
export default class TestDataTableEvent2 extends LightningElement
{
     @api copyValue; 
     @track c1; 
     accounts1; 
     accounts2; 

    @api 


}