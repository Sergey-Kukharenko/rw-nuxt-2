const LIST_ITEM_VIEW_COUNT = 5;

const FILTER_TYPES = {
  checkbox: 'checkbox',
  range: 'range',
  radio: 'radio'
};

const AUTH_REG_STEPS = {
  auth: { name: 'auth', component: 'AppAuth', page: 'signin' },
  code: { name: 'code', component: 'AppCode', page: 'signin-code' },
  codeNotReceived: { name: 'codeNotReceived', component: 'AppNotReceived', page: 'signin-code-notReceived' },
  reg: { name: 'reg', component: 'AppReg', page: 'signup' },
  regCompleted: { name: 'regCompleted', component: 'AppCompleted', page: 'signup-completed' }
};

const AUTH_REG_ERROR_MESSAGES = {
  email: {
    invalid: 'Invalid mail format',
    notExists: 'There is no such mail'
  },
  phone: {
    invalid: 'Invalid number format',
    notExists: 'There is no such number'
  },
  code: 'Invalid code',
  invalidFormat: 'Invalid fomat',
  requiredField: 'Field is required'
};

const AUTH_TYPES = {
  email: {
    name: 'email',
    type: 'E-mail',
    codeName: 'code'
  },
  phone: {
    name: 'phone',
    type: 'phone',
    codeName: 'SMS',
    extraCodeName: 'SMS-code'
  }
};

const AUTH_REG_TYPES = ['phone', 'email'];

const AUTH_CODE_TIMER = {
  step: 1000,
  duration: 120000
};

const AUTH_CORRECT_CODE = '1234';

const CODE_INPUT_DEFAULT_COUNT = 4;

const CHECKOUT_FORM_KEYS = {
  address: 'address',
  dateTime: 'dateTime',
  email: 'email'
};

const INFO_BUTTONS = [
  {
    text: 'contacts',
    images: ['/images/info/avatar-female.png', '/images/info/avatar-male.png']
  },
  {
    text: 'delivery',
    images: ['/images/info/gift.png']
  },
  {
    text: 'reviews',
    images: ['/images/info/like.png']
  }
];

const REVIEW_CARD_SYMBOLS_COUNT = 70;

const EMAIL = 'info@Myflowers.ru';

export {
  LIST_ITEM_VIEW_COUNT,
  FILTER_TYPES,
  AUTH_REG_STEPS,
  AUTH_REG_TYPES,
  AUTH_CODE_TIMER,
  CODE_INPUT_DEFAULT_COUNT,
  AUTH_CORRECT_CODE,
  AUTH_REG_ERROR_MESSAGES,
  AUTH_TYPES,
  CHECKOUT_FORM_KEYS,
  INFO_BUTTONS,
  REVIEW_CARD_SYMBOLS_COUNT,
  EMAIL
};
