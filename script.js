const image = document.querySelector('.ball-img')
const input = document.querySelector('input')
const input2 = document.querySelector('input').value
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')


const arr = ['Tak', 'Nie', 'Może...', 'Ciężko powiedzieć...', 'Nie chcesz znać odpowiedzi na to pytanie']

const shake = () => {
	image.classList.toggle('shake-animation')
   
}

const checkInput = () => {
	if (input.value === '' || input.value == '?') {
		error.textContent = 'Zadaj pytanie'
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Dodaj znak zaytania na końcu zdania'
        answer.textContent =''
	} else {
        const number = Math.floor(Math.random()*5)
		answer.innerHTML = `<span>Odpowiedź:</span> ${arr[number]}`
        shake()
        error.textContent = ''
	}
}




image.addEventListener('click', checkInput)
