public virtual class class_Extension {
    String input='';
    public virtual void write_Method()
    {
        System.debug('I am Inside Write Method Of Original Class');
    }
    
    public virtual void write_Method2(String userInput)
    {
        input= userInput; 
        System.debug('Class Extension Write Method2 Executed'+'\t'+input);
    }
}