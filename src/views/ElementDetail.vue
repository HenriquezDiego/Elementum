<template>
  <div v-if="element" class="space-y-6">
    <!-- Breadcrumb -->
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link to="/" class="text-gray-700 hover:text-primary-600">
            Tabla Periódica
          </router-link>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">{{ element.name }}</span>
          </div>
        </li>
      </ol>
    </nav>

    <!-- Header del elemento -->
    <div class="bg-white rounded-xl shadow-lg p-8">
      <div class="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
        <div
          class="w-32 h-32 rounded-xl flex items-center justify-center text-white text-4xl font-bold"
          :style="{ backgroundColor: getCategoryColor(element.category) }"
        >
          {{ element.symbol }}
        </div>
        <div class="flex-1">
          <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ element.name }}</h1>
          <p class="text-xl text-gray-600 mb-4">{{ element.symbol }} - Elemento {{ element.atomicNumber }}</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
              {{ getCategoryDisplayName(element.category) }}
            </span>
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 capitalize">
              {{ element.state }}
            </span>
            <span v-if="element.radioactive" class="px-3 py-1 bg-yellow-100 rounded-full text-sm font-medium text-yellow-800">
              Radioactivo
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Información detallada -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Propiedades físicas -->
      <div class="card">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Propiedades Físicas</h2>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-gray-600">Masa atómica:</span>
            <span class="font-medium">{{ element.atomicMass }} u</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Densidad:</span>
            <span class="font-medium">{{ element.density }} g/cm³</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Punto de fusión:</span>
            <span class="font-medium">{{ element.meltingPoint }}°C</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Punto de ebullición:</span>
            <span class="font-medium">{{ element.boilingPoint }}°C</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Electronegatividad:</span>
            <span class="font-medium">{{ element.electronegativity || 'N/A' }}</span>
          </div>
        </div>
      </div>

      <!-- Información estructural -->
      <div class="card">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Información Estructural</h2>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-gray-600">Grupo:</span>
            <span class="font-medium">{{ element.group }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Período:</span>
            <span class="font-medium">{{ element.period }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Bloque:</span>
            <span class="font-medium">{{ element.block.toUpperCase() }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Configuración electrónica:</span>
            <span class="font-mono text-sm">{{ element.electronConfiguration }}</span>
          </div>
        </div>
      </div>

      <!-- Descubrimiento -->
      <div class="card">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Descubrimiento</h2>
        <div class="space-y-3">
          <div v-if="element.discoveredBy" class="flex justify-between">
            <span class="text-gray-600">Descubierto por:</span>
            <span class="font-medium">{{ element.discoveredBy }}</span>
          </div>
          <div v-if="element.discoveryYear" class="flex justify-between">
            <span class="text-gray-600">Año:</span>
            <span class="font-medium">{{ element.discoveryYear }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Descripción -->
    <div class="card">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Descripción</h2>
      <p class="text-gray-700 leading-relaxed text-lg">{{ element.description }}</p>
    </div>

    <!-- Usos -->
    <div v-if="element.uses.length > 0" class="card">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Usos Principales</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div
          v-for="use in element.uses"
          :key="use"
          class="bg-gray-50 rounded-lg px-4 py-3 text-gray-700"
        >
          {{ use }}
        </div>
      </div>
    </div>

    <!-- Datos interesantes -->
    <div v-if="element.interestingFacts.length > 0" class="card">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Datos Interesantes</h2>
      <div class="space-y-3">
        <div
          v-for="fact in element.interestingFacts"
          :key="fact"
          class="flex items-start space-x-3"
        >
          <div class="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
          <p class="text-gray-700">{{ fact }}</p>
        </div>
      </div>
    </div>

    <!-- Navegación entre elementos -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Navegación</h2>
      <div class="flex justify-between items-center">
        <button
          v-if="previousElement"
          @click="navigateToElement(previousElement.symbol)"
          class="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>{{ previousElement.name }} ({{ previousElement.symbol }})</span>
        </button>
        <div v-else class="w-32"></div>

        <span class="text-gray-500">Elemento {{ element.atomicNumber }} de 118</span>

        <button
          v-if="nextElement"
          @click="navigateToElement(nextElement.symbol)"
          class="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <span>{{ nextElement.name }} ({{ nextElement.symbol }})</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div v-else class="w-32"></div>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-12">
    <div class="text-6xl mb-4">🔍</div>
    <h2 class="text-2xl font-bold text-gray-900 mb-2">Elemento no encontrado</h2>
    <p class="text-gray-600 mb-6">El elemento que buscas no existe en la tabla periódica.</p>
    <router-link to="/" class="btn-primary">
      Volver a la tabla periódica
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useElementsStore } from '@/stores/elements'
import type { Element } from '@/types/element'

const props = defineProps<{
  symbol: string
}>()

const router = useRouter()
const elementsStore = useElementsStore()

const element = computed(() => elementsStore.getElementBySymbol(props.symbol))

const previousElement = computed(() => {
  if (!element.value) return null
  return elementsStore.elements.find(el => el.atomicNumber === element.value!.atomicNumber - 1)
})

const nextElement = computed(() => {
  if (!element.value) return null
  return elementsStore.elements.find(el => el.atomicNumber === element.value!.atomicNumber + 1)
})

const navigateToElement = (symbol: string) => {
  router.push(`/element/${symbol}`)
}

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    alkali: '#ff6b6b',
    alkaline: '#ffa726',
    transition: '#66bb6a',
    postTransition: '#42a5f5',
    metalloid: '#ab47bc',
    nonmetal: '#26c6da',
    noble: '#ff7043',
    lanthanide: '#8d6e63',
    actinide: '#78909c'
  }
  return colors[category] || '#gray'
}

const getCategoryDisplayName = (category: string): string => {
  const names: Record<string, string> = {
    alkali: 'Metales Alcalinos',
    alkaline: 'Metales Alcalinotérreos',
    transition: 'Metales de Transición',
    postTransition: 'Metales Post-Transición',
    metalloid: 'Metaloides',
    nonmetal: 'No Metales',
    noble: 'Gases Nobles',
    lanthanide: 'Lantánidos',
    actinide: 'Actínidos'
  }
  return names[category] || category
}

onMounted(() => {
  if (!element.value) {
    router.push('/')
  }
})
</script>
