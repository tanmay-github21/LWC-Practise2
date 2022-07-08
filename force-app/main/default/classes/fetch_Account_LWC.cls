public with sharing class fetch_Account_LWC {
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts()
    {
        List<Account> acc= new List<Account> (); 
        acc= [Select Name, createdDate from account where Type!='' ORDER BY CreatedDate DESC LIMIT 5]; 
        
        for(Account a1:acc){System.debug(a1.Name);}
        return acc;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Project__c> fetchProject()
    {
         List<Project__c> projects= new List<Project__c> ([select Name, createdDate from Project__c 
                                                           WHERE Related_Account__c!='' ORDER BY CREATEDDATE DESC LIMIT 5]);
         return projects; 
    }
    
    @AuraEnabled(cacheable= true)
    public static List<contact> fetchContacts() 
    {
        List<Contact> contacts= new List<Contact> ([Select Name, 
                                                    createdDate,account.Name,
                                                    Phone, Email from 
                                                    Contact Where phone !='' Limit 5]);
        return contacts; 
    }
}