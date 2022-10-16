export function ValidationForms(numbers){
    numbers = numbers.trim()
    if (numbers.substr(-1)== ",") {
        numbers = numbers.replace(/ /g,'');
        numbers = numbers.replace(/,,/g,',');
        return numbers.slice(0, -1) + ' ';
    }

    return numbers
}