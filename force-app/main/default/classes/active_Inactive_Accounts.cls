public class active_Inactive_Accounts
{
     @AuraEnabled(Cacheable=true)
     public static List<Account> active_Accounts()
     {
         List<Account> activeList= new List<Account> ([ Select Name, Active__c from Account WHERE Active__c='Yes' Limit 4]);
         if(activeList.size()>0)
         {System.debug('Active accounts size'+'\t'+activeList.size()); return activeList;}
         else {System.debug('No Active Accounts Found'); return null;}

     }
     
     @AuraEnabled(cacheable=true) 
     public static List<Account> inactive_Accounts()
     {
        List<Account> InactiveList= new List<Account> ([ Select Name, Active__c from Account WHERE Active__c='No' Limit 4]);
        if(InactiveList.size()>0)
        {System.debug('Active accounts size'+'\t'+InactiveList.size()); return InactiveList;}
        else {System.debug('No Active Accounts Found'); return null;}
     }

     @AuraEnabled(cacheable= true)
     public static List<case> caseList(ID passed_Id)
     {
        System.debug('Entered Into Apex Class'+'\n'+ 'Id Received from LWC'+'\t'+passed_Id);  
        return [Select CaseNumber, Status from Case WHERE AccountID =: passed_Id limit 4]; 
     }

     @AuraEnabled
     public static Boolean assignValues(ID lwcId)
     {
         return null;
     }
}