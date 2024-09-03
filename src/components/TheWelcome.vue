<template>
  <div class="vh-100 vw-100 d-flex flex-column bg-gradient">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand text-primary" href="#">
          <i class="bi bi-shop me-2"></i>RECHERCHE ANNONCES
        </a>
        <div>
          <router-link to="/login" class="btn btn-outline-primary me-2">
            <i class="bi bi-box-arrow-in-right me-1"></i>Login
          </router-link>
          <router-link to="/signup" class="btn btn-outline-secondary">
            <i class="bi bi-person-plus me-1"></i>Sign Up
          </router-link>
        </div>
      </div>
    </nav>
    
    <main class="flex-grow-1 d-flex flex-column justify-content-center align-items-center px-4 text-center">
      <h1 class="display-4 fw-bold text-primary mb-3">Trouvez vos produits locaux</h1>
      <p class="lead text-muted mb-5">Cherchez des produits et services dans votre région</p>
      
      <div class="w-100" style="max-width: 800px;">
        <div class="input-group mb-3">
          <span class="input-group-text bg-white">
            <i class="bi bi-geo-alt text-primary"></i>
          </span>
          <input type="text" class="form-control" placeholder="Votre localité" aria-label="Location">
          <input 
            type="text" 
            class="form-control" 
            placeholder="Que recherchez-vous ?" 
            aria-label="Search" 
            v-model="searchQuery"
          >
          <button 
            class="btn btn-primary" 
            type="button" 
            @click="performSearch"
          >
            <i class="bi bi-search me-1"></i>Rechercher
          </button>
        </div>
      </div>
      
      <div class="container mt-5">
        <div class="row g-4">
          <div v-for="category in ['Électronique', 'Vêtements', 'Meubles']" :key="category" class="col-md-4">
            <div class="card h-100 shadow-sm hover-shadow">
              <div class="card-body">
                <h5 class="card-title text-primary">{{ category }}</h5>
                <p class="card-text">Trouvez les meilleures offres en {{ category.toLowerCase() }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <footer class="bg-dark text-white py-3 text-center">
      <p class="mb-0">&copy; 2024 RECHERCHE ANNONCES. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TheWelcome',
  data() {
    return {
      searchQuery: '',
      searchLocation: '',
      products: [],
    };
  },
  methods: {
    async performSearch() {
      try {
        const response = await fetch('http://localhost:3001/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location: this.searchLocation,
            name: this.searchQuery,
          }),
        });
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #e6f2ff 0%, #d9e6f2 100%);
}

.hover-shadow:hover {
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}

.form-control:focus, .btn:focus {
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}

/* Ajustements pour assurer une hauteur complète */
html, body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}
</style>