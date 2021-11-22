import { LightningElement } from 'lwc';

import LEAD_OBJECT from '@salesforce/schema/Lead';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import CITY_FIELD from '@salesforce/schema/Lead.City';
import STATE_FIELD from '@salesforce/schema/Lead.State';

import { showToastEvent } from 'lightning/platformShowToastEvent';

/**
 * Creates Lead records.
 */
export default class LeadCreator extends LightningElement {

    leadObject = LEAD_OBJECT;
    myFields = [
        NAME_FIELD, 
        EMAIL_FIELD,
        COMPANY_FIELD,
        CITY_FIELD,
        STATE_FIELD
    ];
    
/**
 * Toasty
 */
    handleLeadCreated(){
        const toastEvent = new showToastEvent({
            title: 'Success',
            message: 'Record saved.',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}