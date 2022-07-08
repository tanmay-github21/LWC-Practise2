public class custom_Iterator implements Iterator<Account> {
    private List<Account> accounts; 
    Private Integer cur_Index;
    public custom_Iterator(List<Account> param_Account)
    {
        this.accounts= param_Account;
        this.cur_Index=0;
    }
    
    public boolean hasNext() 
    {
        return cur_Index < accounts.size() -1; 
    }
    
    public Account next() 
    {
        if(hasNext())
        {
			cur_Index++;
            System.debug('Current Index'+'\t'+cur_Index+'\n'+'Account is'+'\t'+accounts[cur_Index]);
            return accounts[cur_Index];	            
        }
        else throw new NoSuchElementException();
    }
}