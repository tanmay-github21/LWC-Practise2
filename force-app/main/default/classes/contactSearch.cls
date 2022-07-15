public with sharing class contactSearch {
    public static list<Contact> searchForContacts(string lastName, string mailling_City)
    {
        List<Contact> ct= new List<Contact>();
        ct= [Select LastName, mailingPostalCode from 
            Contact WHERE lastName=: lastName AND mailingPostalcode=:mailling_City];
        return ct;     
    }
}