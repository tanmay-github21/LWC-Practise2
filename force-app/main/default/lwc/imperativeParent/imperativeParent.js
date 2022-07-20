import { LightningElement, api, track} from 'lwc';
const columns=[{label:'Account Name', fieldName:'Name'}];
export default class ImperativeParent extends LightningElement {
    @track accounts1;
    @track selectedRows; 
    @track rowid;
    @track message; 
    @track message2; 
    columns=columns; 
    constructor()
    {
        super();
        this.template.addEventListener('caselist',this.handleNotifications());
    }
    handleNotifications()
    {
        console.log('Console log parent case list'); 
    }
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
        const fromChild= event.detail; 
        this.message= fromChild;
    }
    handleChildEvent=event=>
    {
        console.log('Console log parent 2nd event');
        const const2= event.detail;
        this.message2= const2; 
    }
    

}