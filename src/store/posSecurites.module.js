// store/moduleB.js
export default {
  namespaced: true,
  state() {
    return {
      searchQuery: '',
      arr: [
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },

        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
                {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
          KG: "QEDO12VFG",
          free: 0,
          block: 123123,
        },
        {
          dep: 'Агентство по защите депозитов КР',
          CH: "ЦБ для собственности для ТС",
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
