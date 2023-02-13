module.exports = function toReadable (num) {
    let simple          = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let double_simple   = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let double_combine  = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (`${num}`.length < 3)
    {
        return getDouble(num, simple);
    }
    else
    {
        if (`${num}`[1] === '0' && `${num}`[2] === '0')
        {
        return `${simple[+`${num}`[0]]} hundred`;
        }
        else
        {
        return `${simple[+`${num}`[0]]} hundred ${getDouble(+(`${num}`.slice(-2)), simple)}`;
        }
    }

    function getDouble(num, simple) {
        if (`${num}`.length == 1)
        {
            return simple[num];
            } 
                if (`${num}`.length == 2 && `${num}`[0] === '1' )
            {
                return double_simple[num - 10];
            } 
                if (`${num}`.length == 2 && `${num}`[0] !== '1' )
            {
                if (`${num}`[1] === '0')
            {
                return double_combine[+`${num}`[0] - 2];
            }
            else
            {
                return `${double_combine[+`${num}`[0] - 2]} ${simple[+`${num}`[1]]}`;
            }
        }
    }
}
