import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as NewClass2Mixin
} from '../mixins/regenerated/models/i-i-s-diagramma-variantov-new-class2';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(NewClass2Mixin, Validations, {
});

export default Model;
