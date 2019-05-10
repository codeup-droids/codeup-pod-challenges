"use strict";

const getColor = (username) => {
    return fetch("data/profiles.json")
        .then(res => res.json())
        .then((color) => {
            return fetch((color) => {

            })
        })
};
getColor("sandy123")
.then(console.log)
.catch(console.log);
