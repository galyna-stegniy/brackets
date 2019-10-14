module.exports = function check(str, bracketsConfig) {
    let pairs = [];
    for (let c = 0; c < bracketsConfig.length; c++) {
        pairs.push(bracketsConfig[c].join(''));
    }
    for (let i = str.length; i >= 0; i--) {
        for (let j = 0; j < pairs.length; j++) {
            if (str.includes(pairs[j])) {
                str = str.replace(pairs[j], '');
            }
        }
    }
    return str === '';
};
