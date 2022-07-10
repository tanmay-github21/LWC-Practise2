import { LightningElement, api, track} from 'lwc';
import active_Account from '@salesforce/apex/account_Status.active_Account';
import inactive_Account from '@salesforce/apex/account_Status.inactive_Account'; 
import getCases from '@salesforce/apex/account_Status.getCases';
const columns= [{label:'Account-Name', fieldName:'Name', sortable:true}, 
                {label:'Account Status', fieldName:'Active__c'}, 
                {label:'Account-Id', fieldName:'Id'}];

const columns2=[{label:'Case Number', fieldName:'CaseNumber'},
               {label:'Case Status', fieldName:'Status'}];                
export default class ParentComponent extends LightningElement {
    columns=columns;
    caseColumns=columns2;
    passAccountId;
    @track account1;
    @track account2; 
    @track cases; 
    @track error; 
    shows_Active()
    {
        active_Account()
        .then(result=> {this.account1=result; console.log('Active Result',result);})
        .catch(error=> {this.error=error; console.log('Error Occured'+'\t'+error);});
    }

    shows_Inactive()
    {
        inactive_Account()
        .then(result2=> {this.account2=result2; console.log('Inactive Result',result2);})
        .catch(error=> {this.error=error; console.log('Error Occured'+'\t'+error);}); 
    }

    // handleRowSelected(event)
    // {
    //     // const selectedCount= event.detail.selectedRows; 
    //     // console.log('Selected Row'+'\t'+selectedCount); 
    //     // for(let i=0; i<selectedCount.length();i++)
    //     // {
    //     //    alert('Selected Row Value'+'\t'+i);
    //     // }
    //     // var selectedRecord= this.template.querySelector("lightning-datatable").getSelectedRows(); 
    //     // console.log('Selected Rows'+'\t'+selectedRecord);
    // //     this.passAccountId=event.target.value; 
    // //     console.log('Rows Selected'+'\t'+this.passAccountId); 
    // //     this.imperativeCall();
    // // }
    // // imperativeCall()
    // // {
    // //     getCases({accountId:this.passAccountId})
    // //     .then(result3=> {this.cases=result3; 
    // //         console.log('Cases Got For accountId'+'\t'+result3);})
    // //     .catch(error=> {this.error=error; console.log('Error Happened While Getting Case Record'+'\t'+error);});    
    // // }
    // getSelectedRec() 
    // {
    //     var selectedRecords =  this.template.querySelector("lightning-datatable").getSelectedRows();
    //     if(selectedRecords.length > 0){
    //         console.log('selectedRecords are ', selectedRecords);
    //     }
    // }
    // selectedRowHandler() 
    // {
    //     console.log('Hello Execution Start');
    //     var el= this.template.querySelector('lightning-datatable');
    //     console.log('Hello Found One');
    //     // var selected_Rec=el.getSelectedRows();
    //     // console.log('Hello Found Second'); 
    //     // let selectedArray=[];
    //     // for(const element of selected_Rec)
    //     // {
    //     //     selectedArray.push(element.Id);
    //     //     console.log('Element id',element); 
    //     // }
    // }
    handleRowSelection = event => {
        var selectedRows=event.detail.selectedRows;
        if(selectedRows.length>1)
        {
            var el = this.template.querySelector('lightning-datatable');
            // selectedRows=el.selectedRows=el.selectedRows.slice(1);
            selectedRows=el.selectedRows;
            console.log(selectedRows);
            // event.preventDefault();
            // return;
        }
}
}