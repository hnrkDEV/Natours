document.addEventListener('DOMContentLoaded', () => {
    const login = async (email, password) => {
      try {
        const res = await axios({
          method: 'POST',
          url: 'http://127.0.0.1:8000/api/v1/users/login',
          data: { email, password }
        });

        if(res.data.status === 'success') {
            alert('Logged in successfully!');
            window.setTimeout(() => {
                location.assign('/')
            });
        }
        console.log(res);
      } catch (err) {
        alert(err.response.data.message)
      }
    };
  
    const form = document.querySelector('.form');
    if (!form) {
      console.error('Formulário não encontrado!');
      return;
    }
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      console.log('formulário submetido');
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      login(email, password);
    });
  });
  