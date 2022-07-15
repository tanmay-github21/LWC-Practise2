public with sharing class countAccount_ByUser_BackUp{
    Integer totalCount=0; 
    Map<Id, Integer> accountMap=new Map<Id,Integer> (); 
    public void countAccount(List<Account> accountList)
    {
       AggregateResult [] aggregate_List= [Select Count(ID)cnt, CreatedById from account 
                                          WHERE Id IN: accountList AND CreatedById=: UserInfo.getUserId()
                                          GROUP BY CreatedById]; 
        For(AggregateResult aggregate_Object: aggregate_List)
        {
            ID recordId=(Id) aggregate_Object.get('CreatedById');
            Integer counter= (Integer) aggregate_Object.get('cnt');
            accountMap.put(recordId, counter);
        }
        For(Integer temp_Count: accountMap.values())
        {
            totalCount=totalCount+temp_Count;
            System.debug('Account Count'+'\t'+totalCount); 
        }
        for(Account a2: accountList)
        {
            
        }
        }
        
        public void countAccount2(List<Account> accountList)
    {
        // For(List<User> userList: [Select Id, User_Type__c, Account_Count__c, Account.OwnerId from User WHERE Account.ID IN: accountList])
        AggregateResult [] results= [Select Count(Id)cnt, OwnerId from Account WHERE ID IN:accountList GROUP BY OwnerId];
        for(AggregateResult agr:results)
        {
            ID userId= (ID)agr.get('ownerId');
            Integer count= (Integer)agr.get('cnt'); 
            accountMap.put(userId, count); 
        }
        
    }
}