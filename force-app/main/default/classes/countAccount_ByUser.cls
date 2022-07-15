public with sharing class countAccount_ByUser {
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
    } // end of method 1
    
    
}