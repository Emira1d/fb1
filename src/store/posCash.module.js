// store/moduleA.js
export default {
    namespaced: true,
    state() {
      return {
        searchQuery: '',
        arr: [
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'проверка"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
          {
            dep: 'ЗАО "Страховая компания"',
            CH: "ДС в номенальном держании",
            KG: "QEDO12VFG",
            free: 0,
            block: 123123,
          },
        ],
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
  