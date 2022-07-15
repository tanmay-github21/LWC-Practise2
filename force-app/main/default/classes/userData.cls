public with sharing class userData {
    Map<Id, User> salesUser_Map= new Map <Id, User> (); 
    Map<Id, User> businessUser_Map= new Map <Id, User> (); 
    List<User> fgt= new List<user> (); 
    public void checkManager(List<user>userList1)
    {
        for(user u1: userList1)
        {
            fgt.addAll(userList1);
        }
        insert fgt; 
    }
}