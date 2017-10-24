export const nameCheck = (name) => {
    let nameArr = name.toLowerCase().split('');

    for (let i = 0; i < nameArr.length; i++) {
        if (nameArr[i] === '&') {
            nameArr.splice(i, 1, 'a', 'n', 'd')
        }

        if(nameArr[i] === ' ') {
            nameArr.splice(i, 1)
        }
    }
    let result = nameArr.join('');

    if (result.length < 5) {
        return false
    }

    return result;
}
