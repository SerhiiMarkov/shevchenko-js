var assert = require("assert");
var testInflections = require("../helpers").testInflections;

var person = {
    gender: "male",
    lastName: "скляр",
    firstName: "вір",
    middleName: "петрович"
};

var validResults = {
    nominative: {
        lastName: "скляр",
        firstName: "вір",
        middleName: "петрович"
    },
    genitive: {
        lastName: "скляра",
        firstName: "віра",
        middleName: "петровича"
    },
    dative: {
        lastName: "скляру",
        firstName: "віру",
        middleName: "петровичу"
    },
    accusative: {
        lastName: "скляра",
        firstName: "віра",
        middleName: "петровича"
    },
    ablative: {
        lastName: "склярем",
        firstName: "віром",
        middleName: "петровичем"
    },
    locative: {
        lastName: "скляреві",
        firstName: "вірові",
        middleName: "петровичу"
    },
    vocative: {
        lastName: "скляре",
        firstName: "віре",
        middleName: "петровичу"
    }
};

testInflections(person, validResults);
