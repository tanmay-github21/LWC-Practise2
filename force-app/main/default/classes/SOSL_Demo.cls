public class SOSL_Demo {
    string captured_Input='';
    public void sosl_Search(String user_Input)
    {
        captured_Input=user_Input; 
        //String search_Query=''Find \'+captured_Input'+'\'IN ALL FIELDS RETURNING USER';'
        String search_Query2= 'FIND :captured_Input IN ALL FIELDS RETURNING User(userName, Name)';    
        List<List<sObject>> sObject_List= search.query(search_Query2); 
        User[] userList=(List<User>)sObject_List[0];
        System.debug('Sosl Search'+'\t'+userList.size());
    }
    
    public void Soql_Search(String se)
    {
        String query= 'Select Name, Industry From Account WHERE NAME like\''+'%'+se+'%\'';
        List<Account> actList= database.query(query);
        System.debug('SOQL Query Size'+'\t'+actList.size()); 
    }
}