import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  фИО: DS.attr('string')
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-diagramma-variantov-new-class1.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
