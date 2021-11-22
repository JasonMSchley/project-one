import { LightningElement } from 'lwc';

import CASE_OBJECT from '@salesforce/schema/Case';
import NAME_FIELD from '@salesforce/schema/Case.ContactId';
import EMAIL_FIELD from '@salesforce/schema/Case.ContactEmail';
import PHONE_FIELD from '@salesforce/schema/Case.ContactPhone';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';

import { showToastEvent } from 'lightning/platformShowToastEvent';

/**
 * Creates Case records.
 */
export default class CaseCreator extends LightningElement {

    caseObject = CASE_OBJECT;
    myFields = [
        NAME_FIELD, 
        EMAIL_FIELD,
        PHONE_FIELD,
        SUBJECT_FIELD,
        DESCRIPTION_FIELD
    ];

/**
 * Toasty
 */
    handleCaseCreated(){
        const toastEvent = new showToastEvent({
            title: 'Success',
            message: 'Record saved.',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}