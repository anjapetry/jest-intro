const shallowObjClone = require('./shallowObjClone');

test('Create a clone of the object parameter', () => {
    const obj = { person: "Hitchhiker", number: 42 };

    expect(shallowCloneObj(obj)).toStrictEqual(obj);
});