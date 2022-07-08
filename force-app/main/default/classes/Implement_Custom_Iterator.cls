public class Implement_Custom_Iterator implements Iterable<Account> {
    public Iterator<Account> iterator()
    {
        List<Account> acts=[Select Id, Name, type from Account WHERE type !=''];
        System.debug('Iterator Implementation Class');
        return new custom_Iterator(acts); 
    }
}