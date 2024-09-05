<template>
    <div class="dashboard-container d-flex">
      <!-- Sidebar -->
      <nav class="sidebar bg-dark text-white p-3">
        <h4 class="sidebar-title">Tableau de Bord</h4>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link text-white" href="#" @click="showSection('home')">
              <i class="bi bi-house-door"></i> Accueil
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#" @click="showSection('annonces')">
              <i class="bi bi-card-text"></i> Gérer les Annonces
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#" @click="logout">
              <i class="bi bi-box-arrow-right"></i> Déconnexion
            </a>
          </li>
        </ul>
      </nav>
  
      <!-- Main Content -->
      <main class="content p-4 flex-grow-1">
        <h1>{{ currentSectionTitle }}</h1>
        <div v-if="currentSection === 'home'">
          <p>Bienvenue sur le tableau de bord. Sélectionnez une option dans le menu pour commencer.</p>
        </div>
        <div v-if="currentSection === 'annonces'">
          <annonces-section />
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import AnnoncesSection from "@/components/AnnoncesSection.vue";
  
  export default {
    components: {
      AnnoncesSection,
    },
    data() {
      return {
        currentSection: "home", // Section par défaut à afficher
      };
    },
    computed: {
      currentSectionTitle() {
        switch (this.currentSection) {
          case "home":
            return "Accueil";
          case "annonces":
            return "Gérer les Annonces";
          default:
            return "";
        }
      },
    },
    methods: {
      showSection(section) {
        this.currentSection = section;
      },
      logout() {
        // Gestion de la déconnexion
        localStorage.removeItem("token");
        this.$router.push("/");
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    height: 100vh;
  }
  
  .sidebar {
    width: 250px;
    position: fixed;
    top: 0;
    bottom: 0;
  }
  
  .content {
    margin-left: 250px;
  }
  
  .nav-link:hover {
    background-color: #495057;
  }
  </style>
  