// store/moduleB.js
export default {
  namespaced: true,
  state() {
    return {
      searchQuery: '',
      arr: [
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "QEDO12VFG",
            "free": 1000,
            "block": 321456,
            "date": "2011-04-15",
            "currency": "USD"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "RETA56TY",
            "free": 500,
            "block": 654321,
            "date": "2014-08-22",
            "currency": "EUR"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "MKJP78VC",
            "free": 2000,
            "block": 987654,
            "date": "2015-12-09",
            "currency": "GBP"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "OIJN34KL",
            "free": 1500,
            "block": 456789,
            "date": "2013-06-30",
            "currency": "JPY"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "PQRS45UV",
            "free": 750,
            "block": 345678,
            "date": "2016-09-18",
            "currency": "CAD"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "ABCD56EF",
            "free": 1800,
            "block": 234567,
            "date": "2018-02-04",
            "currency": "AUD"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "GHJK78LM",
            "free": 1200,
            "block": 876543,
            "date": "2010-11-21",
            "currency": "CHF"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "LMNO89PQ",
            "free": 600,
            "block": 567890,
            "date": "2012-04-14",
            "currency": "RUB"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "STUV90WX",
            "free": 1300,
            "block": 789012,
            "date": "2017-10-09",
            "currency": "CNY"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "YZAB12CD",
            "free": 900,
            "block": 678901,
            "date": "2019-07-26",
            "currency": "SEK"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "EFGH34IJ",
            "free": 1700,
            "block": 890123,
            "date": "2011-01-05",
            "currency": "NZD"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "IJKL56MN",
            "free": 2000,
            "block": 123987,
            "date": "2013-03-09",
            "currency": "SGD"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "LMNO78PQ",
            "free": 800,
            "block": 345012,
            "date": "2015-11-23",
            "currency": "HKD"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "QRST90UV",
            "free": 1100,
            "block": 654890,
            "date": "2017-06-17",
            "currency": "KRW"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "UVWX12YZ",
            "free": 950,
            "block": 321789,
            "date": "2014-09-08",
            "currency": "INR"
        },
        {
            "dep": "Агентство по защите депозитов КР",
            "CH": "ЦБ для собственности для ТС",
            "KG": "WXYZ34AB",
            "free": 1400,
            "block": 789321,
            "date": "2016-05-29",
            "currency": "MXN"
        }
    ]
    ,
    };
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
  },
  getters: {
    filteredArr: (state) => {
      return state.arr.filter((item) =>
        item.dep.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
};
