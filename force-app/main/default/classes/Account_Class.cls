//THis class is being used by the account trigger
public class Account_Class {
    Public static void a1coppyBillingState(List<Account> actList)
    {
        System.debug('Before Insert Account Class');
        List<Account> acts= new List<Account>();
        for(Account a1: actList)
        {
            a1.Description='Based in California'; 
            acts.add(a1); 
        }
    }
    
    public static void createProject(List<Account> accounts) 
    {
        System.debug('After Insert Account Class');
        List<Project__c> projects= new List<Project__c>(); 
        Map<ID, Account> accountsMap= new Map<Id,Account> ([Select Name,account.owner.email, (Select Name from Projects__r) from account WHERE ID IN: accounts]);
        For(Account a3: accounts)
        {
            if(a3.Projects__r.size()==0)
            projects.add(new Project__c(name=a3.Name+' '+'Project', Related_Account__c=a3.Id)) ;
            SYstem.debug('creating Project account id'+'\t'+a3.Id); 
        }
        if(projects.size()>0)
        {
            System.debug('Before Inserting Projects'+'----'+projects.size());   
            insert projects; 
            System.debug('Projects Inserted'+'----'+projects.size()); 
        }
        
        System.debug('Before Insert Dml Statements Issued'+'\t'+limits.getDmlStatements()+'\n'+
                    'Before Insert System Dml Statement Issued'+'\t'+System.limits.getDmlStatements()+'\n'+
                    'Before Insert DML Rows Issued'+'\t'+Limits.getDmlRows()+'\n'+
                    'Before Insert System DML Rows Issued'+'\t'+System.Limits.getDmlRows()+'\n'+
                    'Records Inserted'+'\t'+projects.size()+'\n'+
                    'Records Passed From Trigger'+'\t'+accounts.size());
    }
    
    public static void closeCase_Before(List<Account> asd)
    {
        System.debug('Entered into apex class for Before Account update');
        Map<ID, Account> accountMap= new Map<Id,Account> ([Select Id, (Select Id, status from cases Where Status!='Closed') from account where ID IN (Select accountId from Case)]);
    }
    
    public static void closeCase_After(List<Account> apt)
    {
        System.debug('Entered into apex class for After Account update'+'\n'+
        'After Update Trigger Fired And Map Size Is'+'\t'+apt.size());
        List<Case> caseList= new List<Case>([Select ID, Status, AccountID From Case WHERE Status!='Closed' AND AccountID =: apt]);
        List<Case> cases= new List<Case> ();
        If(caseList.size()>0)
        {
            System.debug('Case List size'+'\t'+caseList.size()); 
            for(Case c1: caseList) 
            {
                c1.status='Closed'; 
                cases.add(c1);
            }
        }
        update cases; 
    }
    
}