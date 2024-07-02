<template>
    <div class="print-content">
      <div class="print-header">
        <h1>Детали заказа</h1>
      </div>
      <div class="print-body">
        <p><strong>Дата и время составления отчета:</strong> {{ currentDate }}</p>
        <p><strong>Номер:</strong> {{ orderDetails.id }}</p>
        <p><strong>Депонент:</strong> {{ orderDetails.more.user }}</p>
        <p><strong>Кредитный счет:</strong> {{ orderDetails.more.creditAccount }}</p>
        <p><strong>Номер приказа:</strong> {{ orderDetails.more.base }}</p>
        <p><strong>Дата приказа депонента:</strong> {{ orderDetails.more.introduce }}</p>
        <p><strong>Дата исполнения/дата отказа:</strong> {{ orderDetails.more.performance }}</p>
        <p><strong>Статус приказа:</strong> {{ orderDetails.state }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      orderDetails: {
        type: Object,
        required: true,
      },
    },
    computed: {
      currentDate() {
        const now = new Date();
        return now.toLocaleString();
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  