public with sharing class userData_BackUp{
   Map<Id, User> salesUser_Map= new Map <Id, User> (); 
   Map<Id, User> businessUser_Map= new Map <Id, User> (); 
   public void check_ManagerType(List<User> userList)
   {
      For(User u1:userList)
      {
         if(String.isNotBlank(u1.ManagerId) && u1.User_Type__c=='Sales_User')
         {
            salesUser_Map.put(u1.ManagerId, u1); 
         }
         
         else if (String.isNotBlank(u1.ManagerId) && u1.User_Type__c=='Business_User')
         {
            businessUser_Map.put(u1.ManagerId, u1); 
         }
      }// OuterMost for loop. 
      For(String s: businessUser_Map.keySet())
      {
         if(salesUser_Map.containsKey(s))
         {
            System.debug('Sales User Contains Business User Manage'); 
         }
      }
   } //Method End here    
}