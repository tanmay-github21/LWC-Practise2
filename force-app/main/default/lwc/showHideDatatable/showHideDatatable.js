import { LightningElement, track, api} from 'lwc';
const actions=[{label:'View Case', name:'view'}, {label:'Delete', name:'delete'}];
const caseColumns=[{label:'Case-Number', name:'CaseNumber'}, 
                   {label:'Status', name:'Status'}, 
                   {type:'action', typeAttributes:{rowActions:actions}} ];
export default class ShowHideDatatable extends LightningElement {
    @track showPlayers='Show Players';
    @track isVisible= false;  
    @api recordId; 
    connectedCallback()
    {console.log('Record Id'+'\t'+this.recordId);}
    handleClick3(event)
    {
        const label= event.target.label; 
        if(label === 'Show Players')
        {
            this.showPlayers='Hide Players';
            this.isVisible= true; 
        }
        else if (label === "Hide Players")
        {
            this.showPlayers='Show Players';
            this.isVisible=false; 
        }
    }

}