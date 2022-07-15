public with sharing class AccountHandler {
    public static Account insertNewAccount(string username)
    {
        Account a1= new Account(name=username); 
        try
        {
            insert a1;
            return a1; 
        }
        catch (DmlException e)
        {
            SYstem.debug('A DML Error Has Occured'+'\t'+e.getMessage());
            return null;
        }
    }
}