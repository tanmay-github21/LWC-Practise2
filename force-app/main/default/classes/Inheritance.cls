public class Inheritance {
    public interface PurchaseOrder
    {
        Double discount();
    }
    
    public class CustomerPurchaseOrder Implements PurchaseOrder
    {
        public Double discount() 
        {
            double cd=7.5;
            System.debug('Customer Discount'+'\t'+cd);
            return cd; 
        }
    }
    
    public class EmployeePurchaseOder Implements PurchaseOrder 
    {
        public Double discount()
        {
            double cd=8.25; 
            System.debug('Employee Discount'+'\t'+cd);
            return cd; 
        }
    }
}