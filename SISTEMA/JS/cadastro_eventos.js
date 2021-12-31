function cadastrar() {

    var idade = document.getElementById("idade").value;
  
    var nome = document.getElementById("nome_evento").value;
  
    var participantes = document.getElementById("qtd_participante").value;
  
    var palestrantes = document.getElementById("qtd_palestrante").value;
    
    var data_atual = new Date();
    let dia = String(data_atual.getDate()).padStart(2, '0');
    let mes = String(data_atual.getMonth() + 1).padStart(2, '0');
    let ano = data_atual.getFullYear();
        data_atual = dia + '/' + mes + '/' + ano;
    var data_atual_format = Date.parse(data_atual);
  
    var data_user = document.getElementById("data_evento").value;
    var data_obj = new Date(data_user);
    var data_evento = data_obj.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    var data_evento_format = Date.parse(data_evento);
  
    
    console.log(data_atual_format);
    console.log(data_evento_format);
  
  
    if(idade >= 18 && data_evento_format > data_atual_format && participantes < 100) {
      alert("EVENTO CADASTRADO COM SUCESSO!")
    } else if (idade < 18) {
      alert("SUA IDADE NÃO PERMITE REALIZAR CADASTRO DE EVENTOS.")
    } else if (data_evento_format < data_atual_format) {
      alert("A DATA DO EVENTO NÃO PODE SER ANTERIOR À DATA ATUAL. DESEJA INFORMAR NOVA DATA?")
    } else if (participantes > 100) {
      alert("A QUANTIDADE MÁXIMA DE PARTICIPANTES FOI EXTRAPOLADA. DESEJA CADASTRAR O EVENTO COM QUANTIDADE MENOR DE PARTICIPANTES?")
    } else {
      alert("INFELIZMENTE O EVENTO NÃO PODE SER CADASTRADO.")
    }
  }
  
  