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
            if(number === '.' && this.currentOperand.includes('.')) return
            this.currentOperand = this.currentOperand.toString() + number.toString()
        
            /* numberButtons.forEach(button => {
                button.addEventListener('click', () => {
                    calculator.appendNumber(button.innerText)
                    calculator.updateDisplay()
                })
            })*/
        }

        chooseOperation(operation) {
            if(this.currentOperand === '')return
            if(this.previusOperand != ''){
                this.compute()
            }
            this.operation = operation
            this.previusOperand = this.currentOperand
            this.currentOperand = ''
        }

        compute() {

        }

        updateDisplay() {
            //console.log("updating display")
            this.currentOperandTextElement.innerText = this.currentOperand
            this.previousOperandTextElement.innerText = this.previusOperand
        }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
    
})
operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
    
})
