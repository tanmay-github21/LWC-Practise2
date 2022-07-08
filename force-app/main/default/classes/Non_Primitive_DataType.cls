public class Non_Primitive_DataType {
    public static void temp_History() 
    {
        List<integer> temp1= new List <integer> (); 
        List<Integer> temp2= new List<Integer> ();
        reference(temp1);
        referenceNew(temp2);
        System.assertEquals(2, temp1.size()); 
        System.assertEquals(0, temp2.size());
        System.debug('Temp-1 Size'+'\t'+temp1.size()+'\n'+'Temp-2 Size'+'\t'+temp2.size());
    }
    
    public static void reference(List<Integer>m)
    {
        m.add(70); m.add(85); 
    }
    
    public static void referenceNew(List<integer> b)
    {
        b= new List<Integer> {55,45,32,15,20}; 
    }
}