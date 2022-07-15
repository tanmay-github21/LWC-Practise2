public virtual class super_Class {
    public string lname; 
    public string fname; 
    
    public super_Class()
    {
        lname= 'Dash';
        fname= 'Tanmay';
    }
    
    public super_Class(String a, String b)
    {
        lname=a; fname=b;
        System.debug('Super class 2nd Constructor'+'\t'+lname+'\t'+fname);
    }
    public virtual void printName()
    {
        System.debug('My Name is'+'\t'+fname+'-'+lname);
    }
}