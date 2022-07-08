import { LightningElement, track} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
const columns=[{label:'Name', fieldName:'Name'}, {label:'Active', fieldName:'Active__c'}];

export default class ParentComponent extends LightningElement 
{
    accounts_1; 
    accounts_2; 
    error; 
    @track tempList=[];
    columns=columns; 
    show_Active()
    {
        active_Accounts()
        .then(result=>{
            this.accounts_1=result; 
            this.accounts_1.forEach(item=> {
                var a={};
                a.id=item.Id;
                a.Name=item.Name;
                a.Active__c= item.Active__c;
                this.tempList.push(a);
                console.log('Templist Value'+'\t'+this.tempList);
            });
        })
        .catch(error=> {console.log('Error Occured'+'\t'+error);})
    }

    show_Inactive()
    {
        inactive_Accounts()
        .then(result=>{
            this.accounts_2=result;
            this.accounts_2.forEach(item=>{
                var b={}; 
                b.id=item.Id; 
                b.Name= item.Name; 
                b.Active__c= item.Active__c; 
                this.tempList.push(b); 
                console.log('Templist Value'+'\t'+this.tempList); 
            });
        })
        .catch(error=> {console.log('Error Occured'+'\t'+error);})
    }
    
}