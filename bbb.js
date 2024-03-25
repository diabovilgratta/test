const random16 = (count = 1) => {
    const a = [];
    for (let i = 0; i < count; i++)
        a.push(((Math.random() * 16) | 0).toString(16));
    return a.join(``);
}
console.log(random16(32));