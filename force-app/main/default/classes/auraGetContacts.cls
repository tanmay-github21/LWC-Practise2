public with sharing class auraGetContacts 
{
     @AuraEnabled
     public static List<contact> getContacts(Id recordId){
         try 
         {
              List<contact> contactList= new List<Contact>([Select firstname, lastname, accountId, email, phone from Contact where accountId=: recordId]);
              if (contactList.size()>=1)
              {
                System.debug('List Size'+'\t'+contactList.size());   
                 return contactList; 
              }
              
              else return null;   
         } 
         catch (Exception e) 
         {
             throw new AuraHandledException(e.getMessage());
         }
     }    
}
