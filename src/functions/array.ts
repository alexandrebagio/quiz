export function shuffle(elements: any[]): any[] {
    return elements
        .map(value => ({ value, shuffle: Math.random() }))
        .sort((obj1, obj2) => (obj1.shuffle - obj2.shuffle))
        .map(obj => obj.value);
}