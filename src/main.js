function Calculadora() {
//Acessar o elemento display
    this.display = document.querySelector('.display');
  
    
// Inicializa a calculadora
    this.inicia = () => {
      this.capturaCliques();
      this.capturaEnter();
    };
  
    
//Captura o evento da tecla Enter
    this.capturaEnter = () => {
      document.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    };
  
// Captura cliques no botão
    this.capturaCliques = () => {
      document.addEventListener('click', event => {
        const el = event.target;
        if (el.classList.contains('btn-num')) this.addNumDisplay(el);
        if (el.classList.contains('btn-clear')) this.clear();
        if (el.classList.contains('btn-del')) this.del();
        if (el.classList.contains('btn-eq')) this.realizaConta();
      });
    };
  
//Executa o cálculo
    this.realizaConta = () => {
      try {
        const conta = eval(this.display.value);
  
        if(!conta) {
          alert('Conta inválida');
          return;
        }
  
        this.display.value = conta;
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    };
  
//Adiciona número para exibição
    this.addNumDisplay = el => {
      this.display.value += el.innerText;
      this.display.focus();
    };
  
//Limpa a exibição
    this.clear = () => this.display.value = '';
//Exclui o último caractere
    this.del = () => this.display.value = this.display.value.slice(0, -1);
  }
  
  const calculadora = new Calculadora();
  calculadora.inicia();
  