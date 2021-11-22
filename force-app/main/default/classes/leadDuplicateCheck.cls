public class leadDuplicateCheck {

    public static void leadCheckEmail(List<Lead> leadObjList){
        Set<String> setStr = new Set<String>();
        List<Lead> leadObj = new List<Lead>();
        List<Lead> leadList=[Select Id, Name, Email, Phone From Lead Where Email != null];
    
        for(Lead d1:leadList){
            setStr.add(d1.Email);
        	}
        
        for(lead e1:leadObjList){
            if(setStr.contains(e1.Email)){
                e1.Email.addError('There is already a record with this email address.');
            }
        }
    }
}
