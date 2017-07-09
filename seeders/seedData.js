module.exports = {
  Country: [
    {
      countryCode: 'USA',
      name: 'United States of America',
      maxSendKeys: 10,
      maxReceiveKeys: 5,
    },
    {
      countryCode: 'CHN',
      name: 'China',
      maxSendKeys: 1,
      maxReceiveKeys: 1,
    },
    {
      countryCode: 'RUS',
      name: 'Russian Federation',
      maxSendKeys: 3,
      maxReceiveKeys: 3,
    },
    {
      countryCode: 'ZAF',
      name: 'South Africa',
      maxSendKeys: 0,
      maxReceiveKeys: 4,
    },
    {
      countryCode: 'NGA',
      name: 'Nigeria',
      maxSendKeys: 1,
      maxReceiveKeys: 0,
    },
    {
      countryCode: 'BRA',
      name: 'Brazil',
      maxSendKeys: 0,
      maxReceiveKeys: 0,
    },
  ],
  IdType: [
    {
      idCode: 'SSN',
      required: true,
      countryCode: 'USA',
      name: 'Social Security Number',
    },
    {
      idCode: 'USAPP',
      required: false,
      countryCode: 'USA',
      name: 'US Passport',
    },
    {
      idCode: 'CPP',
      required: true,
      countryCode: 'CHN',
      name: 'Chinese Passport',
    },
    {
      idCode: 'RSAID',
      required: true,
      countryCode: 'ZAF',
      name: 'South African ID Number',
    },
  ],
  Currency: [
    {
      currencyCode: 'BTC',
      name: 'Bitcoin',
      type: 'CRYPTO',
    },
    {
      currencyCode: 'ETH',
      name: 'Etherium',
      type: 'CRYPTO',
    },
    {
      currencyCode: 'LTC',
      name: 'LiteCoin',
      type: 'CRYPTO',
    },
    {
      currencyCode: 'USD',
      name: 'United States Dollar',
      type: 'TENDER',
    },
    {
      currencyCode: 'CNY',
      name: 'China Yuan Renminbi',
      type: 'TENDER',
    },
    {
      currencyCode: 'RUB',
      name: 'Russian Ruble',
      type: 'TENDER',
    },
    {
      currencyCode: 'ZAR',
      name: 'South African Rand',
      type: 'TENDER',
    },
    {
      currencyCode: 'NGN',
      name: 'Nigeria Naira',
      type: 'TENDER',
    },
    {
      currencyCode: 'BRL',
      name: 'Brazilian Real',
      type: 'TENDER',
    },
  ],
  AllowedCurrency: [
    // USA
    //  Crypto
    {
      countryCode: 'USA',
      currencyCode: 'BTC',
    },
    {
      countryCode: 'USA',
      currencyCode: 'ETH',
    },
    {
      countryCode: 'USA',
      currencyCode: 'LTC',
    },

    //  Tender
    {
      countryCode: 'USA',
      currencyCode: 'USD',
    },

    //  China
    //  Crypto
    {
      countryCode: 'CHN',
      currencyCode: 'BTC',
    },
    {
      countryCode: 'CHN',
      currencyCode: 'ETH',
    },
    {
      countryCode: 'CHN',
      currencyCode: 'LTC',
    },

    //  Tender
    {
      countryCode: 'CHN',
      currencyCode: 'CNY',
    },

    //  Russia
    //  Crypto
    {
      countryCode: 'RUS',
      currencyCode: 'BTC',
    },
    {
      countryCode: 'RUS',
      currencyCode: 'LTC',
    },

    //  Tender
    {
      countryCode: 'RUS',
      currencyCode: 'RUB',
    },

    //  South Africa
    //  Crypto
    {
      countryCode: 'ZAF',
      currencyCode: 'BTC',
    },
    {
      countryCode: 'ZAF',
      currencyCode: 'ETH',
    },
    {
      countryCode: 'ZAF',
      currencyCode: 'LTC',
    },

    //  Tender
    {
      countryCode: 'ZAF',
      currencyCode: 'ZAR',
    },

    //  Nigeria
    //  Crypto
    {
      countryCode: 'NGA',
      currencyCode: 'BTC',
    },

    //  Tender
    {
      countryCode: 'NGA',
      currencyCode: 'NGN',
    },

    //  Brazil
    //  Crypto
    {
      countryCode: 'BRA',
      currencyCode: 'ETH',
    },

    //  Tender
    {
      countryCode: 'BRA',
      currencyCode: 'BRL',
    },

  ],
};
