import { LightningElement, api, track} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
const columns=[{label:'Account Name', fieldName:'Name'}];
export default class ImperativeParent extends LightningElement {
    @track accounts1;
    @track selectedRows; 
    @track rowid;
    columns=columns; 
    show_Active()
    {
        this.template.querySelector("c-imperative-child").handleValueChange(); 
    }

    show_Inactive()
    {
        this.template.querySelector("c-imperative-child").handleValueChange2(); 
    }

    handleSelectedRows = event =>
    {
        // this.rowid=event.target.value;
        console.log('Value from child'); 
    }
}