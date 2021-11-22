trigger triggerLead on Lead (before insert) {

    if ((trigger.isBefore) && 
       ((trigger.isInsert) || (trigger.isUpdate))){
            leadDuplicateCheck.leadCheckEmail(trigger.new);                 
    }    
}