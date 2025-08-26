<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-gradient">Tips para Aprender la Tabla Periódica</h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Descubre técnicas efectivas y estrategias para memorizar y entender la tabla periódica de forma divertida y eficiente.
      </p>
    </div>

    <!-- Filtros -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <div class="flex flex-wrap gap-2 items-center">
        <span class="text-sm font-medium text-gray-700 py-2">Filtrar por:</span>
        <button
          v-for="category in tipCategories"
          :key="category.value"
          @click="selectedCategory = category.value"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            selectedCategory === category.value
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ category.label }}
        </button>
      </div>
    </div>

    <!-- Tips Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="tip in filteredTips"
        :key="tip.id"
        class="card hover:shadow-xl transition-shadow duration-300"
      >
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-2">
            <div
              class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              :class="getCategoryColor(tip.category)"
            >
              {{ getCategoryIcon(tip.category) }}
            </div>
            <span class="text-sm font-medium text-gray-600">{{ getCategoryLabel(tip.category) }}</span>
          </div>
          <span
            class="px-2 py-1 rounded-full text-xs font-medium"
            :class="getDifficultyColor(tip.difficulty)"
          >
            {{ getDifficultyLabel(tip.difficulty) }}
          </span>
        </div>
        
        <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ tip.title }}</h3>
        <p class="text-gray-700 leading-relaxed">{{ tip.description }}</p>
      </div>
    </div>

    <!-- Sección de estrategias adicionales -->
    <div class="bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Estrategias Adicionales</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900">Memorización por Patrones</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start space-x-2">
              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Aprende los metales alcalinos (Li, Na, K, Rb, Cs, Fr)</span>
            </li>
            <li class="flex items-start space-x-2">
              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Memoriza los gases nobles (He, Ne, Ar, Kr, Xe, Rn)</span>
            </li>
            <li class="flex items-start space-x-2">
              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Estudia los halógenos (F, Cl, Br, I, At)</span>
            </li>
          </ul>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900">Técnicas de Estudio</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start space-x-2">
              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Usa mnemotécnicas para recordar símbolos</span>
            </li>
            <li class="flex items-start space-x-2">
              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Practica con juegos y aplicaciones</span>
            </li>
            <li class="flex items-start space-x-2">
              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Relaciona elementos con objetos cotidianos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { LearningTip } from '@/types/element'

const selectedCategory = ref<string>('all')

const tipCategories = [
  { value: 'all', label: 'Todos' },
  { value: 'memory', label: 'Memoria' },
  { value: 'understanding', label: 'Comprensión' },
  { value: 'practice', label: 'Práctica' },
  { value: 'visual', label: 'Visual' }
]

const tips: LearningTip[] = [
  {
    id: 1,
    title: 'Mnemotécnica para Metales Alcalinos',
    description: 'Crea una frase memorable: "LiNa K Rb Cs Fr" (Litio, Sodio, Potasio, Rubidio, Cesio, Francio). Puedes usar: "Los Niños K Rebotan Como Saltamontes Felices".',
    category: 'memory',
    difficulty: 'beginner'
  },
  {
    id: 2,
    title: 'Patrones de Electronegatividad',
    description: 'La electronegatividad aumenta de izquierda a derecha y de abajo hacia arriba. El flúor (F) es el más electronegativo y el cesio (Cs) el menos.',
    category: 'understanding',
    difficulty: 'intermediate'
  },
  {
    id: 3,
    title: 'Juego de Símbolos',
    description: 'Practica identificando elementos por sus símbolos. Por ejemplo: Au (Oro), Ag (Plata), Fe (Hierro), Cu (Cobre), Pb (Plomo).',
    category: 'practice',
    difficulty: 'beginner'
  },
  {
    id: 4,
    title: 'Mapa Mental Visual',
    description: 'Crea un mapa mental con colores para cada categoría. Los metales alcalinos en rojo, gases nobles en naranja, etc. Esto ayuda a la memoria visual.',
    category: 'visual',
    difficulty: 'beginner'
  },
  {
    id: 5,
    title: 'Tendencias Periódicas',
    description: 'Aprende las tendencias: radio atómico disminuye hacia la derecha, energía de ionización aumenta hacia la derecha y hacia arriba.',
    category: 'understanding',
    difficulty: 'advanced'
  },
  {
    id: 6,
    title: 'Aplicaciones Prácticas',
    description: 'Relaciona elementos con sus usos cotidianos: Na (sal de mesa), Fe (construcción), O (respiración), C (diamantes y grafito).',
    category: 'practice',
    difficulty: 'intermediate'
  },
  {
    id: 7,
    title: 'Configuración Electrónica',
    description: 'Aprende a escribir configuraciones electrónicas siguiendo el principio de Aufbau: 1s² 2s² 2p⁶ 3s² 3p⁶, etc.',
    category: 'understanding',
    difficulty: 'advanced'
  },
  {
    id: 8,
    title: 'Flashcards Digitales',
    description: 'Crea tarjetas digitales con el símbolo en un lado y el nombre, número atómico y propiedades en el otro. Practica regularmente.',
    category: 'memory',
    difficulty: 'beginner'
  },
  {
    id: 9,
    title: 'Análisis de Grupos',
    description: 'Estudia las propiedades comunes de cada grupo: Grupo 1 (metales alcalinos) son muy reactivos, Grupo 18 (gases nobles) son inertes.',
    category: 'understanding',
    difficulty: 'intermediate'
  }
]

const filteredTips = computed(() => {
  if (selectedCategory.value === 'all') {
    return tips
  }
  return tips.filter(tip => tip.category === selectedCategory.value)
})

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    memory: 'bg-blue-500',
    understanding: 'bg-green-500',
    practice: 'bg-purple-500',
    visual: 'bg-orange-500'
  }
  return colors[category] || 'bg-gray-500'
}

const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    memory: '🧠',
    understanding: '💡',
    practice: '✏️',
    visual: '👁️'
  }
  return icons[category] || '📚'
}

const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    memory: 'Memoria',
    understanding: 'Comprensión',
    practice: 'Práctica',
    visual: 'Visual'
  }
  return labels[category] || category
}

const getDifficultyColor = (difficulty: string): string => {
  const colors: Record<string, string> = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  }
  return colors[difficulty] || 'bg-gray-100 text-gray-800'
}

const getDifficultyLabel = (difficulty: string): string => {
  const labels: Record<string, string> = {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado'
  }
  return labels[difficulty] || difficulty
}
</script>
