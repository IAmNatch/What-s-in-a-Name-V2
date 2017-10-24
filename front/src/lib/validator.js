export const nameCheck = (name) => {
    let nameArr = name.toLowerCase().split('');
    console.log(nameArr.length);

    for (let i = 0; i < nameArr.length; i++) {
        console.log('i');
        if (nameArr[i] === '&') {
            nameArr.splice(i, 1, 'a', 'n', 'd')
        }

        if(nameArr[i] === ' ') {
            console.log('one');
            nameArr.splice(i, 1)
        }
    }
    let result = nameArr.join('');

    if (result.length < 5) {
        return false
    }

    return result;
}
