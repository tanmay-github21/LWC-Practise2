public with sharing class Show_Accounts_Lwc {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts() 
    {
        list<Account> acc= new List<Account> ([Select Name,type from account WHERE Type!='' ORDER BY CREATEDDATE DESC LIMIT 5]);
        System.debug('List Size'+'\t'+acc.size());
        return acc;
    }
}