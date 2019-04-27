'use strict'


var money = +prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-"),
    expenseName = prompt("Введите обязательную статью расходов в этом месяце", "Bread"),
    expenseCost = +prompt("Во сколько обойдется?");

var appData = {
    budget: money,
    timeData: time,
    expenses: {
        expenseName: expenseCost
    },
    optionalExpenses: {},
    income: [],
    saving: false
}

alert("Ваш бюджет на 1 день = " + ((money-expenseCost)/30));