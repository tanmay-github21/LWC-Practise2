public class active_Inactive_Accounts
{
     @AuraEnabled(Cacheable=true)
     public static List<Account> active_Accounts()
     {
         return [ Select Name, Active__c from Account WHERE Active__c='Yes'];
     }
     
     @AuraEnabled(cacheable=true) 
     public static List<Account> inactive_Accounts()
     {
         return [ Select Name, active__c from Account WHERE Active__c='No']; 
     }
     
    
}