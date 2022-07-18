import { LightningElement, api, wire, track} from 'lwc';
import caseList from '@salesforce/apex/active_Inactive_Accounts.caseList';
export default class Component1 extends LightningElement 
{
    @track message; 
    @track message2;
    case;
    handleevent=event=>
    {
        console.log('Console log parent hello'); 
        // const childValue=event.detail.getSelectedRows; 
        const childValue= event.detail;
        console.log('Console log Child Selected rows'+'\t'+childValue);
        this.message= childValue;
        console.log('Received following from child'+'\t'+this.message);
    }
    handleCase=event=>
    {
       console.log('Console log Beigning of Parent handleCase Method'); 
       const childValue2= event.detail; 
       console.log('Console log-parent received the following'+'\t'+childValue2);
       this.message2=childValue2;
       caseList(accountId,this.message2);
       console.log('Console log Case method triggered') ;
    }
}