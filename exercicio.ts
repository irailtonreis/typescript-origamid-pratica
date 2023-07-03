
interface Window {
    UserData: any;
  }
  
  window.UserData = {};
  
  function validJSON(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  
  interface UserData {
    nome?: string;
    email?: string;
    cpf?: string;
  }
  
  function isUserData(obj: unknown): obj is UserData {
    if (
      obj &&
      typeof obj === 'object' &&
      ('nome' in obj || 'email' in obj || 'cpf' in obj)
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  function loadLocalStorage() {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validJSON(localUserData)) {
      const UserData = JSON.parse(localUserData);
      if (isUserData(UserData)) {
        Object.entries(UserData).forEach(([key, value]) => {
          const input = document.getElementById(key);
          if (input instanceof HTMLInputElement) {
            input.value = value;
            window.UserData[key] = value;
          }
        });
      }
    }
  }
  
  loadLocalStorage();
  
  function handleInput({ target }: KeyboardEvent) {
    if (target instanceof HTMLInputElement) {
      window.UserData[target.id] = target.value;
      localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
  }
  
  const form = document.querySelector<HTMLElement>('#form');
  form?.addEventListener('keyup', handleInput);
  

  async function fetchVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const data = await response.json();
    somarVendas(data);
  }
  
  interface ProdutoDetalhes {
    marca: string;
    cor: string;
  }
  
  type Venda = [string, number, string, ProdutoDetalhes];
  
  function somarVendas(vendas: Venda[]) {
    // Com for loop
    let total1 = 0;
    for (let i = 0; i < vendas.length; i++) {
      total1 += vendas[i][1];
    }
    document.body.innerHTML += `<p>Total: R$ ${total1}</p>`;
  
    // Com reduce
    const total2 = vendas.reduce((total, venda) => {
      return total + venda[1];
    }, 0);
  
    document.body.innerHTML += `<p>Total: R$ ${total2}</p>`;
  }
  
  fetchVendas();
  