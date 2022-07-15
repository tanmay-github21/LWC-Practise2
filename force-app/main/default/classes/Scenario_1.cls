public class Scenario_1 {

    Integer result; 
    String fullName; 
    List<Account> act_Contact;
    public Integer sum(Integer a,Integer b)
    {
        result= a+b; 
        System.debug(result);
        return result; 
    }
    
    public String concatenate(String a, String b)
    {
        fullname= a+' '+b; 
        System.debug(fullName);
        return fullName; 
    }
    
    public void createAccount(String uname)
    {
        String name=uname; 
        List<Contact> ct= new List<contact> (); 
        List<Account> actList= new List<Account> {new Account(Name=name)};
            insert actList; 
        for(Account a1: actList)
        {
            String accountId= a1.Id; 
            System.debug('Inserted Account ID'+'\t'+a1.Id+'\n'+'Inserted Account Name'+'\t'+a1.Name);
            Contact c1= new Contact(lastName='Contact', firstName=a1.Name, accountId=a1.Id);
            ct.add(c1); 
        }
        insert ct; 
        For(Contact c1:ct)
        {
            System.debug('Inserted Contact Id'+'\t'+c1.Id+'\n'+'Account Id'+'\t'+c1.Account.Name+'\n'+
                        'DML Statements Issued'+'\t'+System.Limits.getDmlStatements()); 
        }
    }
    
    public List<Account> searchContactAccount(String user_Input)
    {
        act_Contact= new List<Account>();
        act_Contact=[Select Name, (Select Name from Contacts) from Account 
                     WHERE ID IN (Select AccountId from contact WHERE Account.Name=:user_Input)];
        if(act_Contact.size()>0)
            System.debug('For'+'\t'+user_Input+'\t'+act_Contact.size()+'\t'+'contacts were found');
        return act_Contact; 
    }
}