public class active_Inactive_Accounts
{
    @AuraEnabled(cacheable=true)
    public static List<Account> active_Accounts() 
    {
       List<Account> accounts= new LIst<Account> ([Select Name, active__c from account WHERE Active__c='Yes'  ORDER BY CREATEDDATE DESC Limit 8]); 
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
       List<Account> accounts2= new LIst<Account> ([Select Name, active__c from account WHERE Active__c='No' ORDER BY CREATEDDATE DESC Limit 8]); 
       if(accounts2.size()>0) 
       {
           System.debug('Apex active accounts'+'\t'+accounts2.size()); 
           return accounts2; 
       }
       else return null;  
    }
    
    @AuraEnabled
    public static List<Case> caselist(String accountid){
        System.debug('Entered into case retreive method');
        try 
        {
           System.debug('caselist method'+'\t'+'Id received is'+'\t'+accountid); 
           List<Case> cases= new List<Case>([Select caseNumber, accountId, createdDate from Case Where AccountId=:accountid]); 
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