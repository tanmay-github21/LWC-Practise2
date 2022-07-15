public with sharing class callDebug_Flow {
    @InvocableMethod(label='Log Debug Message' 
                     description='Outputs messages to the debug log'
                     category='Case')
    public static void trace(List<String> debugMessages) {
        for (String debugMessage : debugMessages) {
            system.debug(debugMessage);
        }
    }
}