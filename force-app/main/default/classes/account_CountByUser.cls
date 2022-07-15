public class account_CountByUser 
{
   Set<ID> idSet= new Set<Id> (); 
   Integer totalCount=0;
   Map<Id,List<Account>> accountMap= new Map <Id, List<Account>>(); 
   List<Account> accountd= new List<Account>(); 
   public void check_Account_Insert(List<Account> trigger_Account)
   {
      for(Account a1: trigger_Account)
      {
         idSet.add(a1.Owner.Id); 
         accountMap.put(a1.Owner.Id, new List<Account>());
         accountMap.get(a1.Owner.Id).add(a1); 
         if(idSet.size()>0)
         {
            List<Account> accounts= new List<Account> ([Select OwnerId, Owner.User_Type__c, Owner.Account_Count__c from Account WHERE OwnerID=:idSet]); 
            System.debug('Limits Analysis List Account'+'\t'+'Queries Fired'+'\t'+limits.getQueries());
            For(Account a2:accounts)
            {
               if(a2.Owner.User_Type__c=='Sales_User' && a2.Owner.Account_Count__c>5)
               {
                  a2.addError('Error');
               }
               else if (accountMap.containsKey(a2.Owner.Id))
               {
                  accountd.add(a2);
               }
            }
         }
      }
        
     insert accountd; 
     System.debug('Limits Analysis'+'\n'+
     'Queries Fired'+'\t'+limits.getQueries()+'\n'+
     'CPU Time'+'\t'+Limits.getCPuTime()+'\n'+
     'Database time'+'\t'+limits.getDatabaseTime()+'\n'+
     'DML Rows'+'\t'+Limits.getDmlRows()+'\n'+
     'DML STatements'+'\t'+Limits.getDMLStatements()+'\n'+
     'System DML Rows'+'\t'+System.limits.getdmlstatements());
   }
      
}