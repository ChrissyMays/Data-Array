let data = [
    {
        name: 'Matero',
        age: '30'
    },
    {
        name: 'Sarah',
        age: '32'
    },
    {
        name: 'John',
        age: '20'
    },
    {
        name: 'Tim',
        age: '27'
    },
    {
        name: 'Sam',
        age: '33'
    },
    {
        name: 'Joey',
        age: '21'
    },
];
// you can add a price section as well 

const info = document.querySelector('#info');

let details = data.map(function (item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old'+'</div>';

})
// if you switch to item.age it will show the age data instead, 
// this is how render data without having to hard code 
// for the name and age you'd do item.name + ' ' + item.age
// or you can do  item.name + ' ' + 'is ' + item.age + ' years old' (and closing div)= Mateo is 30 years old
info.innerHTML = details.join('\n');