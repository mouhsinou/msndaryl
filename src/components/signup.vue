<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Inscription</h2>
            <form @submit.prevent="signup">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirmer le mot de passe</label>
                <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary">S'inscrire</button>
              </div>
            </form>
            <p class="text-center mt-3">
              Déjà un compte ? 
              <router-link to="/login">Se connecter</router-link>
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
import { createUserWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../../server/mongodb';

export default {
  name: 'Signup',
  setup() {
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const router = useRouter();

    const signup = async () => {
      if (password.value !== confirmPassword.value) {
        alert("Les mots de passe ne correspondent pas");
        return;
      }
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        router.push('/');
      } catch (error) {
        console.error("Erreur d'inscription", error);
        alert("Erreur d'inscription: " + error.message);
      }
    };

    return {
      email,
      password,
      confirmPassword,
      signup
    };
  }
};
</script>