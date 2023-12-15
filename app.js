const input_element = document.querySelector('input')

input_element.addEventListener('input', e => {
	document.querySelector('#result').textContent = string_formatter(input_element.value)
})

function string_formatter(string) {
	let output = ''

	for (let i = 0; i < string.length; i++) {
		if (i != 0) { output += '-' }

		output += repeat_character_times(i + 1, string[i])
	}

	return output
}

function repeat_character_times(amount, character) {
	let string = ''

	for (let i = 0; i < amount; i++) {
		if (i == 0) {
			character = character.toUpperCase()
		} else {
			character = character.toLowerCase()
		}

		string += character
	}

	return string
}