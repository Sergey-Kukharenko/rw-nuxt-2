// STRIPE
const STRIPE = {
  publicKey: process.env.stripePublicKey,
  paymentConf: {
    lineItems: [
      {
        price: 'price_1MD0VAF7plSNwbQ3CdzsqMYI',
        quantity: 2,
      },
    ],
    successURL: 'http://192.168.3.4:4000/order',
    cancelURL: 'http://192.168.3.4:4000/',
  }
}

// PAYPAL
const PAYPAL = {
  credentials: {
    sandbox: process.env.paypalClientId,
    production: ''
  },
  experienceOptions: {
    input_fields: {
      no_shipping: 1
    }
  },
  currency: 'GBP',
  amount: '10',
  myItems: [
    {
      name: 'hat',
      description: 'Brown hat.',
      quantity: '1',
      price: '5',
    },
    {
      name: 'handbag',
      description: 'Black handbag.',
      quantity: '1',
      price: '5',
    }
  ],
  styles: {
    label: 'checkout',
    size: 'responsive',
    shape: 'pill',
    color: 'silver',
    height: 40
  },
}

export {
  STRIPE,
  PAYPAL
}