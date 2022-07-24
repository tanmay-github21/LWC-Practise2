import { LightningElement, track, api, wire} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
import caselist from '@salesforce/apex/active_Inactive_Accounts.caselist';
const actions=[{label:'View Cases', name:'viewCases'}, 
               {label:'View Record', name:'viewRecord'}];

const columns=[{label:'Name', fieldName:'Name'}, 
               {label:'Date Created', fieldName:'CreatedDate'},
               {label:'Status', fieldName:'Active__c'}, 
               {label:'Id', fieldName:'Id'}, 
               {label:'Type', fieldName:'Type'},
               {type:'action', typeAttributes:{rowActions:actions}}];
export default class ImperativeChild extends LightningElement {
     
     accounts1;
     accounts2;
     cases;
     recordId;
     text;
     columns=columns; 
     @api publicProperty;
     @api publicProperty2; 
     @api caseArray=[];
     @api caseArray2='';
     @track error; 
     @api handleValueChange()
     {
         console.log('Active Account Method Executed By Child');
         active_Accounts()
         .then(result=> {this.accounts1=result; console.log(this.accounts1);})
         .catch(error=> {this.error=error; console.log('Error Occured'+'\t'+error);});
     }

     @api handleValueChange2()
     {
         inactive_Accounts()
         .then(result=> {this.accounts2=result;})
         .catch(error=>{this.error=error; console.log('Error Occured'+'\t'+error);}); 
     }

    callParent=event=>
     {
         this.text='Hello this is tanmay'; 
         const passParent2= new CustomEvent('passtext',{detail:this.text});
         this.dispatchEvent(passParent2);
     }
    event_CaseListner=event=>
    {
        console.log('Console log');
        var selectedId= this.template.querySelector("lightning-datatable").getSelectedRows(); 
        let cleanedId= '';
        selectedId.forEach(element => {cleanedId=cleanedId+','+element.Id});
        console.log(cleanedId); 
        this.publicProperty=cleanedId.replace(/^,/,''); 
        console.log(this.publicProperty);
        caselist({accountId:this.publicProperty})
        .then (result=> 
        {
            this.cases= result; 
            console.log('Console log within result method',result);
            result.forEach(element => {
                const cars={};
                cars.CaseNumber=element.CaseNumber;
                cars.Id= element.Id;
                const set_Array= new Set([cars.Id, cars.CaseNumber]);
                // const arr=Array.from(set_Array);
                this.caseArray= Array.from(set_Array);
             });
             const passParent3= new CustomEvent('casearray',{detail:this.caseArray}); 
             console.log('Child Component Before Firing the event'+'\t'+this.caseArray.length); 
             this.dispatchEvent(passParent3); 


        })
        .catch(error=>
        {
            this.error= error;
            console.error('Error Occured',error);
        })
    }
    event_CaseListner2= event=> 
    {
        console.log('Inactive method');
        var selectedId2= this.template.querySelector("lightning-datatable").getSelectedRows(); 
        let cleanedId2= '';
        selectedId2.forEach(element => {cleanedId2=cleanedId2+','+element.Id});
        console.log(cleanedId2); 
        this.publicProperty2=cleanedId2.replace(/^,/,''); 
        console.log(this.publicProperty2);
        // caselist({accountId:this.publicProperty2})
        // .then (result2=>{this.caseArray22= result2; console.log('Console log within result method',result2);})
        // .catch(error=>{this.error=error; console.error('Console error occured while fetching cases'+'\t'+error);}); 
        const passParent4= new CustomEvent('casesforinactives',{detail:this.publicProperty2});
        this.dispatchEvent(passParent4);
    } //end of event_CaseListner2
}