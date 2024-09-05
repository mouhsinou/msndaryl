<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Inscription</h2>
            <form @submit.prevent="signup">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  required
                />
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary">
                  S'inscrire
                </button>
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
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      
        axios
          .post("http://localhost:5000/api/users/register", {
            name: this.name,
            email: this.email,
            password: this.password,
            role: "user", // ou tout autre rôle par défaut
          })
          .then((resp) => {
        this.$router.push('/dashboard'); 
      
          })
          .catch((error) => {
            console.log(error);
          });
        //alert(response.data.message);
        // Rediriger ou faire d'autres actions après la réussite de l'inscription
    
    },
  },
};
</script>
