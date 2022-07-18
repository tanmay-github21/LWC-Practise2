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
        console.log('Console log parent hello'); 
        const childValue2=event.detail; 
        console.log('Console log Received the following from child'+'\t'+childValue2);
        this.message2= childValue2; 
        caseList({passed_Id:this.message2})
        .then(result=>{this.case=result.data; console.log('Console log Case list'+'\t'+caseList);})
        .catch(error=>{this.error=error; console.error('Console log error happened while getting cases'+'\t'+this.error);});
    }
}