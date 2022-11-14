const LIST_ITEM_VIEW_COUNT = 5

const FILTER_TYPES = {
  checkbox: 'checkbox',
  range: 'range',
  radio: 'radio'
}

const AUTH_REG_STEPS = {
  auth: { component: 'AppAuth', page: 'signin' },

  restorePassword: { component: 'AppRestore', page: 'signin-reset-password' },
  restorePassNotification: { component: 'AppRestoreNotification', page: 'signin-reset-password-notification' },
  restorePassNewPassword: { component: 'AppRestoreNewPassword', page: 'signin-reset-password-new-password' },
  restorePassCompleted: { component: 'AppRestoreCompleted', page: 'signin-reset-password-completed' },

  reg: { component: 'AppReg', page: 'signup' },
  regNotification: { component: 'AppRegNotification', page: 'signup-notification' },
  regCompleted: { component: 'AppRegCompleted', page: 'signup-completed' },
}

const AUTH_REG_ERROR_MESSAGES = {
  email: {
    notExist: 'Аccount with the entered email address does not exist',
    alreadyExist: 'Аccount with the entered email address already exists',
    invalid: 'Invalid mail format'
  },
  password: {
    invalid: {
      text: 'Invalid password format. The password must contain',
      items: [
        '1 capital letter',
        '1 small letter',
        '1 digit'
      ],
    },
    notMatch: 'Passwords do not match',
    notExist: 'Password was entered incorrectly'
  },
  invalidFormat: 'Invalid fomat',
  requiredField: 'Field is required'
}

const USER_CREDENTIALS = {
  email: 'test@gmail.com',
  password: '123123Dd'
}

const AUTH_CODE_TIMER = {
  step: 1000,
  duration: 6000
}

const CODE_INPUT_DEFAULT_COUNT = 4


export {
  LIST_ITEM_VIEW_COUNT,
  FILTER_TYPES,
  AUTH_REG_STEPS,
  AUTH_CODE_TIMER,
  CODE_INPUT_DEFAULT_COUNT,
  AUTH_REG_ERROR_MESSAGES,
  USER_CREDENTIALS,
};

