public class StringArrayTest {

    public static List<String> generateStringArray(Integer list_Size)
    {
        List<String> string_List= new List<String> (); 
        For(Integer i=0; i< list_size; i++)
        {
           string_List.add('Test '+i);
           System.debug(string_List[i]);
        }
        return string_List; 
    }
}