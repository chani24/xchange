
const domStrings = {
    'button': '.convert-button',
    'originalCurrency': '.origin-currency',
    'tbcCurrency': '.convert-currency',
    'inputValue': '.input-value'
};


document.querySelector(domStrings.button).addEventListener('click', async function() {
    if( document.querySelector(domStrings.inputValue).value !== ''){
            fetch('http://data.fixer.io/api/latest?access_key=83a7c60af3de013ae3943daadfdf5b62')
    .then(res => res.json())
        .then(data => {
            console.log(data);
            const value = parseInt(document.querySelector(domStrings.inputValue).value);
            const current = (data.rates[`${document.querySelector(domStrings.originalCurrency).value}`]);
            const convert = (data.rates[`${document.querySelector(domStrings.tbcCurrency).value}`]);

         const result = ((convert/current)*value).toFixed(2);
        const resultText = `<div class="sub-result-1 b">${value} ${document.querySelector(domStrings.originalCurrency).value}
        </div><div class="sub-result-2 b"> is equivalent to</div><div class="sub-result-3 b">${result} ${document.querySelector(domStrings.tbcCurrency).value}</div>`;
        
        document.querySelector('.conclusion').innerHTML = resultText;
        //console.log(document.querySelector('.output-div'));
        
        }).catch(err => {
        console.log(err)
    });  
    
}else {
    document.querySelector('.conclusion').innerHTML = `Enter an actual amount`; 
}})
