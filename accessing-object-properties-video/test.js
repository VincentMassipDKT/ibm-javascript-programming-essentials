const arrayOfObjects = [
    {
        name: 'John',
        age: 25,
        hobbies: [ 'Reading', 'Traveling' ],
        address: {
            street: '123 Main St.',
            city: 'New York',
            zip: '10001',
        },
    },
    {
        name: 'Alice',
        age: 30,
        skills: [ 'JavaScrip', 'React', 'Node.js' ],
        projects: [
            { title: 'Project A', completed: true },
            { title: 'Project B', completed: false },
        ],
    },
    {
        title: 'Special Object',
        data: [ 1, 2, 3 ],
        metadata: { key: 'value' },
    },
    {
        // An object with no specific properties
    },
    {
        anotherObject: true,
        nestedArrays: [
            [ 1, 2, 3 ],
            [ 'a', 'b', 'c', 'd' ],
        ],
        additionnalProperty: 'Extra',
    },
];


console.log("---- First Object -----");
console.log(arrayOfObjects[0].name);
console.log(arrayOfObjects[0].hobbies[0]);

console.log("---- Second Object -----");
console.log(arrayOfObjects[1].skills[2]);
console.log(arrayOfObjects[1].projects[0].title);

console.log("---- Third Object -----");
console.log(arrayOfObjects[2].metadata.key);

console.log("---- Fourth Object -----");
console.log(arrayOfObjects[3]);

console.log("---- Fifth Object -----");
console.log(arrayOfObjects[4].anotherObject);
console.log(arrayOfObjects[4].additionnalProperty);
