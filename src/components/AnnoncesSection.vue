<template>
    <div class="annonces-section">
      <h2>Gérer les Annonces</h2>
      <button class="btn btn-primary mb-3" @click="toggleForm">Créer une Nouvelle Annonce</button>
  
      <!-- Formulaire de création/modification -->
      <div v-if="showForm" class="card p-3 mb-4">
        <form @submit.prevent="saveAnnonce">
          <div class="mb-3">
            <label for="title" class="form-label">Titre de l'Annonce</label>
            <input type="text" v-model="newAnnonce.title" class="form-control" id="title" required />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea v-model="newAnnonce.description" class="form-control" id="description" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-success">{{ isEditing ? 'Modifier' : 'Créer' }}</button>
          <button type="button" class="btn btn-secondary ms-2" @click="toggleForm">Annuler</button>
        </form>
      </div>
  
      <!-- Liste des annonces -->
      <ul class="list-group">
        <li
          v-for="annonce in annonces"
          :key="annonce.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <h5>{{ annonce.title }}</h5>
            <p>{{ annonce.description }}</p>
          </div>
          <div>
            <button class="btn btn-info btn-sm me-2" @click="viewAnnonce(annonce)">Voir</button>
            <button class="btn btn-warning btn-sm me-2" @click="editAnnonce(annonce)">Modifier</button>
            <button class="btn btn-danger btn-sm" @click="deleteAnnonce(annonce.id)">Supprimer</button>
          </div>
        </li>
      </ul>
  
      <!-- Modal pour voir l'annonce -->
      <div
        class="modal fade"
        id="viewAnnonceModal"
        tabindex="-1"
        aria-labelledby="viewAnnonceLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewAnnonceLabel">{{ selectedAnnonce.title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>{{ selectedAnnonce.description }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showForm: false,
        isEditing: false,
        selectedAnnonce: {}, // Annonce sélectionnée pour la visualisation
        newAnnonce: {
          id: null,
          title: "",
          description: "",
        },
        annonces: [
          { id: 1, title: "Première Annonce", description: "Description de la première annonce" },
          { id: 2, title: "Deuxième Annonce", description: "Description de la deuxième annonce" },
        ],
      };
    },
    methods: {
      toggleForm() {
        this.showForm = !this.showForm;
        if (!this.showForm) {
          this.resetForm();
        }
      },
      saveAnnonce() {
        if (this.isEditing) {
          const index = this.annonces.findIndex((a) => a.id === this.newAnnonce.id);
          if (index !== -1) {
            this.annonces.splice(index, 1, { ...this.newAnnonce });
          }
        } else {
          const newAnnonce = {
            ...this.newAnnonce,
            id: this.annonces.length + 1,
          };
          this.annonces.push(newAnnonce);
        }
        this.toggleForm();
      },
      viewAnnonce(annonce) {
        this.selectedAnnonce = { ...annonce };
        new bootstrap.Modal(document.getElementById("viewAnnonceModal")).show();
      },
      editAnnonce(annonce) {
        this.newAnnonce = { ...annonce };
        this.isEditing = true;
        this.showForm = true;
      },
      deleteAnnonce(id) {
        this.annonces = this.annonces.filter((annonce) => annonce.id !== id);
      },
      resetForm() {
        this.newAnnonce = { id: null, title: "", description: "" };
        this.isEditing = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .annonces-section {
    padding: 20px;
    background-color: #f8f9fa;
  }
  
  .card {
    background-color: #ffffff;
    border: 1px solid #e3e3e3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .list-group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .list-group-item:hover {
    background-color: #f1f1f1;
  }
  </style>
  