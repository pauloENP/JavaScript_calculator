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
            this.currentOperand = this.currentOperand.toString().slice(0,-1)

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
            console.log('ok2')
            let computation
            const prev = parseFloat(this.previusOperand)
            const current = parseFloat(this.currentOperand)
            if (isNaN(prev) || isNaN(current)) return
            switch (this.operation) {
                case '+' :
                    console.log('mais')
                    computation = prev + current
                    break
                case '-' :
                    computation = prev - current
                    break
                case '*' :
                    computation = prev * current
                    break
                case '/' :
                    computation = prev / current
                    break
                default:
                    return
            }
            this.currentOperand = computation
            this.operation = undefined
            this.previusOperand = ''
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
equalsButton.addEventListener('click', button =>{
    console.log('ok')
    calculator.compute()
    calculator.updateDisplay()
})
clearButton.addEventListener('click', button =>{
    console.log('cleared')
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click', button =>{
    console.log('deleted')
    calculator.delete()
    calculator.updateDisplay()
})