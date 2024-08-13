// store/orders.js
export default {
    namespaced: true,
    state() {
      return {
        orders: [
          {
              "id": 123124,
              "orderType": "Депонирование ДС",
              "currency": "Доллар США",
              "quantity": 50000,
              "state": "Исполнено",
              "more": {
                  "introduce": "15.05.2024 09.10.15",
                  "performance": "15.05.2024 13.25.40",
                  "fulfilled": "16.05.2024 12.10.50",
                  "creditAccount": "L-400-1001",
                  "user": "Depo15",
                  "base": "Оплата услуг"
              }
          },
          {
              "id": 123125,
              "orderType": "Поручение ГЦБ",
              "currency": "Евро",
              "quantity": 30000,
              "state": "На исполнении",
              "more": {
                  "introduce": "18.05.2024 10.30.20",
                  "performance": "18.05.2024 12.45.55",
                  "fulfilled": "19.05.2024 14.20.15",
                  "creditAccount": "L-400-2002",
                  "user": "Depo18",
                  "base": "Финансирование проекта"
              }
          },
          {
              "id": 123126,
              "orderType": "Списание ДС",
              "currency": "Российский рубль",
              "quantity": 75000,
              "state": "Отменено",
              "more": {
                  "introduce": "20.05.2024 14.40.35",
                  "performance": "20.05.2024 16.50.10",
                  "fulfilled": "21.05.2024 11.05.25",
                  "creditAccount": "L-400-3003",
                  "user": "Depo20",
                  "base": "Оплата контрактов"
              }
          },
          {
              "id": 123127,
              "orderType": "Депонирование ДС",
              "currency": "Канадский доллар",
              "quantity": 40000,
              "state": "Введено",
              "more": {
                  "introduce": "22.05.2024 08.15.50",
                  "performance": "22.05.2024 10.35.30",
                  "fulfilled": "23.05.2024 13.45.00",
                  "creditAccount": "L-400-4004",
                  "user": "Depo22",
                  "base": "Инвестиции"
              }
          },
          {
              "id": 123128,
              "orderType": "Поручение ГЦБ",
              "currency": "Швейцарский франк",
              "quantity": 60000,
              "state": "Исполнено",
              "more": {
                  "introduce": "24.05.2024 11.50.40",
                  "performance": "24.05.2024 13.20.30",
                  "fulfilled": "25.05.2024 15.30.20",
                  "creditAccount": "L-400-5005",
                  "user": "Depo24",
                  "base": "Финансовые операции"
              }
          },
          {
              "id": 123129,
              "orderType": "Списание ГЦБ",
              "currency": "Японская иена",
              "quantity": 120000,
              "state": "Отменено",
              "more": {
                  "introduce": "26.05.2024 13.40.25",
                  "performance": "26.05.2024 15.55.35",
                  "fulfilled": "27.05.2024 16.45.45",
                  "creditAccount": "L-400-6006",
                  "user": "Depo26",
                  "base": "Оплата поставок"
              }
          },
          {
              "id": 123130,
              "orderType": "Депонирование ДС",
              "currency": "Новозеландский доллар",
              "quantity": 35000,
              "state": "Введено",
              "more": {
                  "introduce": "28.05.2024 09.30.15",
                  "performance": "28.05.2024 11.45.25",
                  "fulfilled": "29.05.2024 13.55.30",
                  "creditAccount": "L-400-7007",
                  "user": "Depo28",
                  "base": "Оплата биржевых сделок"
              }
          },
          {
              "id": 123131,
              "orderType": "Поручение ГЦБ",
              "currency": "Австралийский доллар",
              "quantity": 45000,
              "state": "На исполнении",
              "more": {
                  "introduce": "30.05.2024 10.15.45",
                  "performance": "30.05.2024 12.30.55",
                  "fulfilled": "31.05.2024 15.40.10",
                  "creditAccount": "L-400-8008",
                  "user": "Depo30",
                  "base": "Финансовые услуги"
              }
          },
          {
              "id": 123132,
              "orderType": "Списание ДС",
              "currency": "Кыргызский сом",
              "quantity": 25000,
              "state": "Исполнено",
              "more": {
                  "introduce": "01.06.2024 11.50.25",
                  "performance": "01.06.2024 14.00.35",
                  "fulfilled": "02.06.2024 16.10.50",
                  "creditAccount": "L-400-2015",
                  "user": "Depo01",
                  "base": "Финансирование сделки"
              }
          },
          {
              "id": 123133,
              "orderType": "Депонирование ДС",
              "currency": "Доллар США",
              "quantity": 55000,
              "state": "Введено",
              "more": {
                  "introduce": "03.06.2024 12.20.10",
                  "performance": "03.06.2024 14.35.20",
                  "fulfilled": "04.06.2024 17.45.15",
                  "creditAccount": "L-400-9009",
                  "user": "Depo03",
                  "base": "Инвестиционные операции"
              }
          },
          {
              "id": 123134,
              "orderType": "Поручение ГЦБ",
              "currency": "Евро",
              "quantity": 70000,
              "state": "На исполнении",
              "more": {
                  "introduce": "05.06.2024 08.10.05",
                  "performance": "05.06.2024 10.25.15",
                  "fulfilled": "06.06.2024 12.35.20",
                  "creditAccount": "L-400-1010",
                  "user": "Depo05",
                  "base": "Капиталовложение"
              }
          },
          {
              "id": 123135,
              "orderType": "Списание ГЦБ",
              "currency": "Российский рубль",
              "quantity": 95000,
              "state": "Отменено",
              "more": {
                  "introduce": "07.06.2024 15.55.35",
                  "performance": "07.06.2024 17.50.45",
                  "fulfilled": "08.06.2024 14.05.50",
                  "creditAccount": "L-400-1111",
                  "user": "Depo07",
                  "base": "Погашение кредита"
              }
          },
          {
              "id": 123136,
              "orderType": "Депонирование ДС",
              "currency": "Фунт стерлингов",
              "quantity": 65000,
              "state": "Введено",
              "more": {
                  "introduce": "09.06.2024 09.40.25",
                  "performance": "09.06.2024 11.35.45",
                  "fulfilled": "10.06.2024 16.15.30",
                  "creditAccount": "L-400-1212",
                  "user": "Depo09",
                  "base": "Финансовые операции"
              }
          }
      ],      
        orderTypes: [
          'Депонирование ДС', 'Поручение ГЦБ', 'Списание ГЦБ', 'Перевод ГЦБ в иной депозиторий', 
          'Прием ГЦБ из иного депозитория', 'Депонирование ГЦБ из ДК' ,'Списание ГЦБ в ДК', 
          'Перевод ГЦБ депонента на счет другого депонента', 'Депонирование ДС', 'Списание ДС', 
          'Перемещение ГЦБ по счетам одного депонента'
        ],
        statuses: ['На исполнении', 'Введено', 'Исполнено', 'Отменено']
      };
    },
    mutations: {
      setOrderType(state, { orderId, orderType }) {
        const order = state.orders.find(order => order.id === orderId);
        if (order) {
          order.orderType = orderType;
        }
      },
      setState(state, { orderId, status }) {
        const order = state.orders.find(order => order.id === orderId);
        if (order) {
          order.state = status;
        }
      },
    },
    getters: {
      orders: state => state.orders,
      orderTypes: state => state.orderTypes,
      statuses: state => state.statuses,
    },
  };
  