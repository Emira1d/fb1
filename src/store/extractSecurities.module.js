export default{
    state() {
        return {
            orders: []
        };
    },
    mutations: {
        setOrders(state, orders) {
            state.orders = orders;
        }
    },
    actions: {
        fetchOrders({ commit }) {
            const orders = [
                {
                    "BeginDate": "2024-04-10T10:20:15.000Z",
                    "EndDate": "2024-04-12T11:25:30.000Z",
                    "TransDate": "2024-04-10T10:20:15.000Z",
                    "TransType": "+",
                    "DepName": "Национальный фонд защиты вкладчиков",
                    "AccNumber": "1-1002-3015",
                    "AccTypeName": "Акции на хранении для ТС",
                    "SecIN": "GBA02150512",
                    "SecTypeName": "акция государственной компании",
                    "EmitentName": "АО \"Киргизская Энергетика\"",
                    "Quantity": 250000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                },
                {
                    "BeginDate": "2024-05-01T13:35:25.000Z",
                    "EndDate": "2024-05-03T15:40:50.000Z",
                    "TransDate": "2024-05-01T13:35:25.000Z",
                    "TransType": "+",
                    "DepName": "Фонд государственного резервирования",
                    "AccNumber": "1-2003-4016",
                    "AccTypeName": "Облигации на хранении для ТС",
                    "SecIN": "GBA02250617",
                    "SecTypeName": "гос.казначейская облигация",
                    "EmitentName": "Министерство финансов КР",
                    "Quantity": 1000000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                },
                {
                    "BeginDate": "2024-06-10T09:15:45.000Z",
                    "EndDate": "2024-06-12T10:20:00.000Z",
                    "TransDate": "2024-06-10T09:15:45.000Z",
                    "TransType": "+",
                    "DepName": "Агентство по защите депозитов Кыргызской Республики",
                    "AccNumber": "1-3001-2012",
                    "AccTypeName": "ЦБ в собственности для ТС",
                    "SecIN": "GBA02250529",
                    "SecTypeName": "гос.казначейская облигация",
                    "EmitentName": "Министерство финансов КР",
                    "Quantity": 1500000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                },
                {
                    "BeginDate": "2024-07-15T12:30:50.000Z",
                    "EndDate": "2024-07-17T13:35:15.000Z",
                    "TransDate": "2024-07-15T12:30:50.000Z",
                    "TransType": "+",
                    "DepName": "Финансовая служба защиты активов",
                    "AccNumber": "1-4004-5018",
                    "AccTypeName": "Ценные бумаги в собственности",
                    "SecIN": "GD062241124",
                    "SecTypeName": "гос. казначейский вексель",
                    "EmitentName": "Министерство финансов КР",
                    "Quantity": 750000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                },
                {
                    "BeginDate": "2024-08-20T14:45:30.000Z",
                    "EndDate": "2024-08-22T15:50:55.000Z",
                    "TransDate": "2024-08-20T14:45:30.000Z",
                    "TransType": "+",
                    "DepName": "Агентство по защите депозитов Кыргызской Республики",
                    "AccNumber": "1-3001-2012",
                    "AccTypeName": "ЦБ в собственности для ТС",
                    "SecIN": "GBA02260212",
                    "SecTypeName": "гос.казначейская облигация",
                    "EmitentName": "Министерство финансов КР",
                    "Quantity": 1200000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                },
                {
                    "BeginDate": "2024-09-05T10:10:40.000Z",
                    "EndDate": "2024-09-07T11:15:10.000Z",
                    "TransDate": "2024-09-05T10:10:40.000Z",
                    "TransType": "+",
                    "DepName": "Фонд страхования и защиты активов",
                    "AccNumber": "1-5005-6019",
                    "AccTypeName": "Гособлигации на хранении",
                    "SecIN": "GBA02261021",
                    "SecTypeName": "гос.казначейская облигация",
                    "EmitentName": "Министерство финансов КР",
                    "Quantity": 1000000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                },
                {
                    "BeginDate": "2024-10-12T11:25:15.000Z",
                    "EndDate": "2024-10-14T12:30:25.000Z",
                    "TransDate": "2024-10-12T11:25:15.000Z",
                    "TransType": "+",
                    "DepName": "Центр защиты финансовых вкладов",
                    "AccNumber": "1-6006-7010",
                    "AccTypeName": "Ценные бумаги в собственности",
                    "SecIN": "GD072241213",
                    "SecTypeName": "гос. казначейский вексель",
                    "EmitentName": "Министерство финансов КР",
                    "Quantity": 950000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                },
                {
                    "BeginDate": "2024-11-18T12:40:55.000Z",
                    "EndDate": "2024-11-20T13:45:05.000Z",
                    "TransDate": "2024-11-18T12:40:55.000Z",
                    "TransType": "+",
                    "DepName": "Агентство по защите депозитов Кыргызской Республики",
                    "AccNumber": "1-3001-2012",
                    "AccTypeName": "ЦБ в собственности для ТС",
                    "SecIN": "GBA02250529",
                    "SecTypeName": "гос.казначейская облигация",
                    "EmitentName": "Министерство финансов КР",
                    "Quantity": 1250000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                },
                {
                    "BeginDate": "2024-12-22T14:55:35.000Z",
                    "EndDate": "2024-12-24T16:00:45.000Z",
                    "TransDate": "2024-12-22T14:55:35.000Z",
                    "TransType": "+",
                    "DepName": "Фонд резервирования и защиты активов",
                    "AccNumber": "1-7007-8011",
                    "AccTypeName": "Облигации на хранении для ТС",
                    "SecIN": "GBA02261530",
                    "SecTypeName": "гос.казначейская облигация",
                    "EmitentName": "Министерство финансов КР",
                    "Quantity": 1750000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                },
                {
                    "BeginDate": "2025-01-15T09:50:45.000Z",
                    "EndDate": "2025-01-17T10:55:00.000Z",
                    "TransDate": "2025-01-15T09:50:45.000Z",
                    "TransType": "+",
                    "DepName": "Агентство по страхованию вкладов",
                    "AccNumber": "1-8008-9012",
                    "AccTypeName": "Ценные бумаги в собственности",
                    "SecIN": "GD082241321",
                    "SecTypeName": "гос. казначейский вексель",
                    "EmitentName": "Министерство финансов КР",
                    "Quantity": 1100000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                },
                {
                    "BeginDate": "2025-02-20T11:05:55.000Z",
                    "EndDate": "2025-02-22T12:10:15.000Z",
                    "TransDate": "2025-02-20T11:05:55.000Z",
                    "TransType": "+",
                    "DepName": "Центр финансовой защиты и резервирования",
                    "AccNumber": "1-9009-1013",
                    "AccTypeName": "Гособлигации на хранении",
                    "SecIN": "GBA02271012",
                    "SecTypeName": "гос.казначейская облигация",
                    "EmitentName": "Министерство финансов КР",
                    "Quantity": 1350000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                },
                {
                    "BeginDate": "2025-03-25T14:10:05.000Z",
                    "EndDate": "2025-03-27T15:15:20.000Z",
                    "TransDate": "2025-03-25T14:10:05.000Z",
                    "TransType": "+",
                    "DepName": "Национальный фонд страхования активов",
                    "AccNumber": "1-1010-1114",
                    "AccTypeName": "ЦБ в собственности для ТС",
                    "SecIN": "GBA02281019",
                    "SecTypeName": "гос.казначейская облигация",
                    "EmitentName": "Министерство финансов КР",
                    "Quantity": 2000000,
                    "QuantityStop": 0,
                    "OrderCodeName": "",
                    "Corr": ""
                }
            ]
            ;
            commit('setOrders', orders);
        }
    },
    getters: {
        orders: state => state.orders
    }
};

