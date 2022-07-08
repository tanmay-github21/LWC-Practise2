public class SOQL 
{
    List<Account> actList; 
    public List<Account> getAccounts()
    {
        actList= new List<Account> ([Select Name from Account ORDER BY NAME DESC]);
        return actList; 
    }
}