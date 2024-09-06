<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Connexion</h2>
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary">Se connecter</button>
              </div>
            </form>
            <p class="text-center mt-3">
              Pas encore de compte ? 
              <router-link to="/signup">S'inscrire</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const login = async () => {
      try {
        // Requête POST vers le backend Express pour la connexion
        const response = await fetch('http://localhost:5000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('Connexion réussie !');
          // Stocker le token JWT dans le localStorage pour les requêtes futures
          localStorage.setItem('token', data.token);
          // Rediriger vers la page d'accueil ou une autre page
          router.push('/dashboard');
        } else {
          alert('Erreur de connexion : ' + data.message);
        }
      } catch (error) {
        console.error('Erreur lors de la requête de connexion', error);
        alert('Erreur de connexion: ' + error.message);
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>