<script>
   
    const usuarios = [];

    function trocarAba(aba) {
      const isLogin = aba === 'login';

      document.getElementById('form-login').classList.toggle('d-none', !isLogin);
      document.getElementById('form-cadastro').classList.toggle('d-none', isLogin);

      
      const botoes = document.querySelectorAll('#abas .nav-link');
      botoes[0].classList.toggle('active', isLogin);
      botoes[1].classList.toggle('active', !isLogin);

      esconderAlerta();
    }


    function mostrarAlerta(mensagem, tipo) {
      const alerta = document.getElementById('alerta');
      alerta.textContent = mensagem;
      alerta.className = `alert alert-${tipo}`;
    }

    function esconderAlerta() {
      document.getElementById('alerta').className = 'alert d-none';
    }

  
    function fazerLogin() {
      const email = document.getElementById('login-email').value.trim();
      const senha = document.getElementById('login-senha').value;

      if (!email || !senha) {
        mostrarAlerta('Preencha todos os campos.', 'warning');
        return;
      }

      const usuario = usuarios.find(u => u.email === email && u.senha === senha);

      if (usuario) {
        mostrarAlerta('Login realizado com sucesso! Redirecionando…', 'success');
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1500);
      } else {
        mostrarAlerta('E-mail ou senha incorretos.', 'danger');
      }
    }

   
    function fazerCadastro() {
      const nome  = document.getElementById('cad-nome').value.trim();
      const email = document.getElementById('cad-email').value.trim();
      const senha = document.getElementById('cad-senha').value;

      if (!nome || !email || !senha) {
        mostrarAlerta('Preencha todos os campos.', 'warning');
        return;
      }

      if (senha.length < 6) {
        mostrarAlerta('A senha precisa ter pelo menos 6 caracteres.', 'warning');
        return;
      }

      if (usuarios.find(u => u.email === email)) {
        mostrarAlerta('Este e-mail já está cadastrado.', 'danger');
        return;
      }

      usuarios.push({ nome, email, senha });
      mostrarAlerta('Conta criada! Faça login agora.', 'success');
      trocarAba('login');
    }
  </script>