public class Retreive_Account {
    
@auraenabled(cacheable=true)
    public static List<Account> pullAccount()
    {
        List<Account> ase= new List<Account> ([Select Name, type from account where type!='']);
        For(Account a1:ase)
        {
            System.debug(a1.name);
        }    
		return ase;             
    }
    
}