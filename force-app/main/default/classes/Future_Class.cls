global class Future_Class {

    @future  public static void processRecords(List<ID> recordId)
    {
        List<Account> actList= new List<Account> ([Select Name, (Select Name from Contacts) from Account WHERE ID IN: recordId]);
        System.debug(actList.size()); 
    }
}