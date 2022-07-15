public with sharing class ContactAndLeadSearch {
    public static List<List<sObject>> searchContactsAndLeads(String input_Parameter)
    {
        List<List<sObject>> searchList= [FIND : input_Parameter IN Name FIELDS Returning contact(FirstName, lastName), 
                                        LEAD (lastName, firstName)];
        Contact[] contact_List= (Contact[])searchList[0]; 
        Lead[] lead_List= (Lead[])searchList[1];
        System.debug('Found following Contacts'+'\n');
        for(Contact c1: contact_List)
        {
            System.debug(c1.lastName+'\t'+c1.firstName);
        }

        System.debug('Found following Leads'+'\n');
        for(Lead l1: lead_List)
        {
            System.debug(l1.lastName+'\t'+l1.FirstName);
        }
        return searchList;                                         
    }
}