
// Automatisch geen training invullen
const invulVeld = document.querySelectorAll('li span:nth-of-type(3)')

function geenTraining(){
    invulVeld.forEach(veld => {
        if (veld.textContent == ''){
            veld.textContent = 'Geen training'
        }
    })
}

geenTraining()




// Zoekbalk naar dag
const dag = document.querySelectorAll('li span:nth-of-type(2)')
const zoekInput = document.querySelector('#zoekInput')
const zoekBalk = document.querySelector('.zoekBalk')

zoekBalk.addEventListener('submit', zoeken)

function zoeken(e){
    e.preventDefault();
    console.log(zoekInput.value)
    dag.forEach(asset =>{
        if(zoekInput.value === asset.textContent){
            document.querySelectorAll('li a').forEach(link => {
                if(link.contains(asset)) {
                    link.click();
                }    
            })
        }
    })
}

