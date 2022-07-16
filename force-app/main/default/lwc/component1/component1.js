import { LightningElement, api, wire, track} from 'lwc';
import caseList from '@salesforce/apex/active_Inactive_Accounts.caseList';
export default class Component1 extends LightningElement 
{
    handleevent=event=>
    {
        console.log('Console log parent hello'); 
    }
}