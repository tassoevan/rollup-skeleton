let isBrowser = () => {
    return this === window;
};

let isNode = () => {
    return typeof process === 'object' &&
        typeof process.versions === 'object' &&
        typeof process.versions.node !== 'undefined';
};

module.exports = (...args) => {
    if (isNode()) {
        console.log(args.join(' '));
    }
    else if (isBrowser()) {
        let pre = document.createElement('pre');
        pre.textContent = args.join(' ');
        document.body.append(pre);
    }
};
