const numberButtons = document.querySelectorAll(['data-number'])
const operationButtons = document.querySelectorAll(['data-operation'])
const deleteButton = document.querySelector(['data-delete'])
const clearButton = document.querySelector(['data-clear'])
const equalsButton = document.querySelector(['data-equals'])
const previusOperandTextElement = document.querySelector(['data-previus-operand'])
const currentOperandTextElement = document.querySelector(['data-current-operand'])

class Calculator{
    constructor(previusOperandTextElement, currentOperandTextElement){
        this.previusOperandTextElement = previusOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
}

clear() {
    this.currentOperand = ''
    this.previusOperand = ''
    this.operation = undefined

    const calculator = new calculator(previusOperandTextElement, currentOperandTextElement)

}
delete(){

}
oppendNumber(number){
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.oppendNumber(button.innerText)
            calculator.updateDisplay()
        })
    })
}
chooseOperation(operation) {

}
compute() {

}
updateDisplay() {
    
}