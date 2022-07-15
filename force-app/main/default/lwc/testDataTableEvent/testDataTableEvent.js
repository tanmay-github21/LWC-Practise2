import { LightningElement, api, track, wire} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
const columns=[{label:"Id", fieldName:"Id"}, {label:"Name", fieldName:"Name"}];
export default class TestDataTableEvent extends LightningElement 
{
    @track changedName; 
    @track user_Input;
    @track value_FromChild='';
    @track value_FromChild2='';
    capitalized_Input
    nameChange(event)
    {
        this.user_Input=event.target.value;
        // this.capitalized_Input=string.toUpperCase(this.user_Input);
    }

    callChild()
    {
        console.log('Console log called active account method'); 
        this.template.querySelector("c-test-data-table-event2").showAccount(); 
        console.log('console log parent called the child method'); 
    }

    callChild2()
    {
        console.log('Console log Parent called inactive account method'); 
        this.template.querySelector("c-test-data-table-event2").showAccount2(); 
        console.log('console log parent called the child method'); 
    }

    handleDataTable= event=>
    {
        console.log("Console log entered into dataTableParent event"); 
        const textValue= event.detail; 
        this.value_FromChild=textValue; 
    }
    handleDataTable2=event=>
    {
        console.log('Console log inactive from Parent'); 
        const textValue2= event.detail;
        this.value_FromChild2=textValue2; 
    }
}
    