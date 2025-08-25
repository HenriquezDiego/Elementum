<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">E</span>
              </div>
              <span class="text-xl font-bold text-gradient">Elementum</span>
            </router-link>
          </div>
          <div class="flex items-center space-x-4">
            <router-link 
              to="/" 
              class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-primary-600 bg-primary-50"
            >
              Tabla Periódica
            </router-link>
            <router-link 
              to="/tips" 
              class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-primary-600 bg-primary-50"
            >
              Tips de Aprendizaje
            </router-link>
            <router-link 
              to="/curiosidades" 
              class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-primary-600 bg-primary-50"
            >
              Datos Curiosos
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </main>

    <footer class="bg-white border-t border-gray-200 mt-16">
      <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center text-gray-600">
          <p>&copy; 2024 Elementum. Aprende la tabla periódica de forma interactiva.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Componente principal de la aplicación
</script>
