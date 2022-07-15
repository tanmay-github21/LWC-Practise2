public class Primitive_DataType {
    public  void processString()
    {
        String m = 'Hello This Is Tanmay'; 
        processString2(m);
        System.assertEquals('Hello This Is Tanmay', m, 'Verified');
        // Calling this method will print the second method output as we are passing the string into the 2nd method
    }
    
    public  void processString2(String m)
    {
        m= '2nd Method executed';
        System.debug(m); 
        
    }
}