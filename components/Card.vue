<!-- components/CompactCard.vue -->

<template>
    <div class="compact-card">
      <div class="compact-card-image">
        <img :src="music.photo" alt="User Photo">
      </div>
      <div class="compact-card-content">
        <h2>{{ music.title }}</h2>
        <p>Par {{ music.author }}</p>
        <!-- Ajoutez d'autres informations ici -->
        <hr />
        <section>
          <h3>Styles</h3>
          <h4>{{ music.style }}</h4>
          <!-- Ajoutez d'autres styles ici -->
        </section>
        <hr />
        <button>Voir plus</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      music: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .compact-card {
    width: 250px;
    height: 350px;
    margin: 10px;
    border-radius: 8px;
    overflow-y: auto;
    background-color: $d-white;
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  
    &:hover {
      transform: scale(1.05);
    }
  }
  
  .compact-card-image {
    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
  
  .compact-card-content {
    padding: 15px;
  
    h2 {
        font-family: $primary-font-family;

      font-size: 1.2rem;
      margin-bottom: 8px;
    }
  
    p {
        font-family: $secondary-font-family;
      font-size: 0.9rem;
      color: $d-grey;
    }
  
    hr {
      margin: 10px 0;
      border: none;
      height: 1px;
      background-color: $d-white;
    }
  
    section {
      h3 {
        font-family: $primary-font-family;
        font-size: 1rem;
        margin-bottom: 5px;
      }
  
      h4 {
        font-family: $secondary-font-family;
        font-size: 0.9rem;
        margin-bottom: 5px;
      }
    }
  
    button {
        font-family: $primary-font-family;
      width: 100%;
      padding: 8px;
      border: none;
      background-color: $d-pink;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: $d-pinktonic;
      }
    }
  }
  </style>
  