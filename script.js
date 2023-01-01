
class Calculator {
        constructor(previousOperandTextElement, currentOperandTextElement){
            this.previousOperandTextElement = previousOperandTextElement;
            this.currentOperandTextElement = currentOperandTextElement;
            this.clear();
        }
        clear(){
        this.currentOperand = '';
        this.previusOperand = '';
        this.operation = undefined;
        }
        //const calculator = new calculator(previusOperandTextElement, currentOperandTextElement)

        delete(){

        }

        appendNumber(number){
            this.currentOperand = number
        
            /* numberButtons.forEach(button => {
                button.addEventListener('click', () => {
                    calculator.appendNumber(button.innerText)
                    calculator.updateDisplay()
                })
            })*/
        }

        chooseOperation(operation) {

        }

        compute() {

        }

        updateDisplay() {
            console.log("updating display")
            this.currentOperandTextElement.innerText = this.currentOperand
        }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previus-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        console.log("test")
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
    
})
