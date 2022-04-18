//começa função da máscara de telefone

function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }

 //termina função da máscara de telefone

//começa função do CEP

const cep = document.getElementById('cep')
const rua = document.getElementById('rua')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')


cep.addEventListener('blur', function(end){
    let cep = end.target.value
    let script = document.createElement('script')
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm'
    document.body.appendChild(script) 
})

function popularForm(resp){
  if('erro' in resp){
    alert('CEP não encontrado!')
    return
  }

  rua.value = resp.logradouro
  bairro.value = resp.bairro
  cidade.value = resp.localidade
  estado.value = resp.uf
}