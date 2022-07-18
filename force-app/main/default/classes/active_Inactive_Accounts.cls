public class active_Inactive_Accounts
{
    @AuraEnabled(cacheable=true)
    public static List<Account> active_Accounts() 
    {
       List<Account> accounts= new LIst<Account> ([Select Name, active__c from account WHERE Active__c='Yes' Limit 5]); 
       if(accounts.size()>0) 
       {
           System.debug('Apex active accounts'+'\t'+accounts.size()); 
           return accounts; 
       }
       else return null;  
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> inactive_Accounts() 
    {
       List<Account> accounts2= new LIst<Account> ([Select Name, active__c from account WHERE Active__c='Yes' Limit 5]); 
       if(accounts2.size()>0) 
       {
           System.debug('Apex active accounts'+'\t'+accounts2.size()); 
           return accounts2; 
       }
       else return null;  
    }
    
    @AuraEnabled
    public static List<Case> caseList(Id accountid){
        try 
        {
           List<Case> cases= new List<Case> ([Select CaseNumber, Status, accountId from Case WHERE AccountId=:accountid])    ;
           if(cases.size()>0)
           {
               System.debug('Apex case list'+'\t'+cases.size());
               return cases;
           }
           else return null;  
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}