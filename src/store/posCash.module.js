// store/moduleA.js
export default {
    namespaced: true,
    state() {
      return {
        searchQuery: '',
        arr: [
          {
              "dep": "ОАО \"Финансовая группа\"",
              "CH": "ДС в номенальном держании",
              "KG": "QEDO12VFG",
              "free": 1000,
              "block": 321456,
              "currency": "USD"
          },
          {
              "dep": "ООО \"ИнвестМаг\"",
              "CH": "ДС в номенальном держании",
              "KG": "ZXYW45TR",
              "free": 500,
              "block": 654321,
              "currency": "EUR"
          },
          {
              "dep": "АО \"Глобал Трейд\"",
              "CH": "ДС в номенальном держании",
              "KG": "BVCX98OP",
              "free": 2000,
              "block": 987654,
              "currency": "GBP"
          },
          {
              "dep": "ЗАО \"Капитал\"",
              "CH": "ДС в номенальном держании",
              "KG": "LQMN45CD",
              "free": 1500,
              "block": 456789,
              "currency": "JPY"
          },
          {
              "dep": "ООО \"ТехноСервис\"",
              "CH": "ДС в номенальном держании",
              "KG": "YTRE67GH",
              "free": 750,
              "block": 345678,
              "currency": "CAD"
          },
          {
              "dep": "ЗАО \"ЭнергоТрейд\"",
              "CH": "ДС в номенальном держании",
              "KG": "MNOP23ZX",
              "free": 1800,
              "block": 234567,
              "currency": "AUD"
          },
          {
              "dep": "ОАО \"ТехноПром\"",
              "CH": "ДС в номенальном держании",
              "KG": "POIU87RT",
              "free": 1200,
              "block": 876543,
              "currency": "CHF"
          },
          {
              "dep": "ООО \"СтройКомплект\"",
              "CH": "ДС в номенальном держании",
              "KG": "ASDF56JK",
              "free": 600,
              "block": 567890,
              "currency": "RUB"
          },
          {
              "dep": "ЗАО \"РитейлГрупп\"",
              "CH": "ДС в номенальном держании",
              "KG": "QWER34YU",
              "free": 1300,
              "block": 789012,
              "currency": "CNY"
          },
          {
              "dep": "АО \"Глобус\"",
              "CH": "ДС в номенальном держании",
              "KG": "DFGH98KL",
              "free": 900,
              "block": 678901,
              "currency": "SEK"
          },
          {
              "dep": "ООО \"ФинЭксперт\"",
              "CH": "ДС в номенальном держании",
              "KG": "JKLO56VB",
              "free": 1700,
              "block": 890123,
              "currency": "NZD"
          },
          {
              "dep": "ЗАО \"ТехноГрупп\"",
              "CH": "ДС в номенальном держании",
              "KG": "WERU34XT",
              "free": 2000,
              "block": 123987,
              "currency": "SGD"
          },
          {
              "dep": "ОАО \"ПромИнвест\"",
              "CH": "ДС в номенальном держании",
              "KG": "TYUI56CV",
              "free": 800,
              "block": 345012,
              "currency": "HKD"
          },
          {
              "dep": "ООО \"ГлобТех\"",
              "CH": "ДС в номенальном держании",
              "KG": "CVBN45TR",
              "free": 1100,
              "block": 654890,
              "currency": "KRW"
          },
          {
              "dep": "ЗАО \"СмартСистем\"",
              "CH": "ДС в номенальном держании",
              "KG": "XCVB78NM",
              "free": 950,
              "block": 321789,
              "currency": "INR"
          },
          {
              "dep": "АО \"Инновация\"",
              "CH": "ДС в номенальном держании",
              "KG": "BNMK12OP",
              "free": 1400,
              "block": 789321,
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
  