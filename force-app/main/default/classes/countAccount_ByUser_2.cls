public with sharing class countAccount_ByUser_2 
{   
    Integer totalCount=0; 
    Map<ID, Integer> accountMap=new Map<Id,Integer> (); 
    Map<Id, List<Account>> user_AccountMap= new Map<Id, List<Account>>(); 
    Set<Id> account_IdSet= new Set<ID> (); 
    List<Account>accountList= new List<Account> (); 
    List<account> insertAccountList= new List<Account> (); 
    public void Insert_Method(List<Account> accountList)
    {
        For(Account temp1: accountList)
        {
           if(String.isNotBlank(temp1.OwnerID))
           account_IdSet.add(temp1.OwnerId); 

           if(account_Idset.size()>0)
           {
               List<Account> accounts= [Select OwnerId, Owner.User_Type__c, Owner.Account_Count__c from Account WHERE OWNERID=: userInfo.getUserId()]; 
               for(Account a1: accounts)
               {
                   if(a1.Owner.User_Type__c=='Sales_User' && a1.Owner.Account_Count__c>5)
                   {
                       a1.addError('Count Account'); 
                   }
                   else 
                   insertAccountList.add(a1);
               }
               insert insertAccountList; 
           }
        }
    }
    public void update_Method(Map<Id, Account> account_Map)
    {}

    // public void checkforEmail(Map<Id, List<Contact>)
    // {

    // }
}