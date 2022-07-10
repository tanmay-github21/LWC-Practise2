public with sharing class account_Status {
 
    @AuraEnabled(Cacheable=true)
    public static List<Account> active_Account()
    {
        return [Select Name, Active__c from account where Active__c='Yes'];
    }

    @AuraEnabled(cacheable=true)
    public static List<account> inactive_Account() 
    {
        return [Select Name, Active__c from account where active__c='No']; 
    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getCases(String accountId)
    {
        try 
        {
            return [select casenumber, status from case where accountId=: accountId]; 
        }

        catch(exception e)
        {
             throw new AuraHandledException( e.getMessage());
        }
    }
}
