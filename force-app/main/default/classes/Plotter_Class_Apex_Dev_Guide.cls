public class Plotter_Class_Apex_Dev_Guide {
    public class innerClass
    {
        Double x, y; 
        public innerClass(Double x, Double y)
        {
            this.x=x;
            this.y=y; 
        }
        Double getX_Cordinate()
        {
            return x; 
        }
        
        Double getY_Cordinate()
        {
            return y; 
        }
    }
    
    List<innerClass> icl= new List<innerClass> (); 
    public void plot(double x, double y)
    {
        icl.add(new innerClass(x,y));
    }
    
}