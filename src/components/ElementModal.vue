<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="p-6 border-b border-gray-200">
        <div class="flex justify-between items-start">
          <div class="flex items-center space-x-4">
            <div
              class="w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl font-bold"
              :style="{ backgroundColor: getCategoryColor(element.category) }"
            >
              {{ element.symbol }}
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900">{{ element.name }}</h2>
              <p class="text-gray-600">{{ element.symbol }} - Elemento {{ element.atomicNumber }}</p>
            </div>
          </div>
          <button
            @click="$emit('close')"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <!-- Información básica -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Información Básica</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">Categoría:</span>
                  <span class="font-medium">{{ getCategoryDisplayName(element.category) }}</span>
                </div>
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
                  <span class="text-gray-600">Estado:</span>
                  <span class="font-medium capitalize">{{ element.state }}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Propiedades Físicas</h3>
              <div class="space-y-2">
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
          </div>

          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Descripción</h3>
              <p class="text-gray-700 leading-relaxed">{{ element.description }}</p>
            </div>

            <div v-if="element.discoveredBy || element.discoveryYear">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Descubrimiento</h3>
              <div class="space-y-2">
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

            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Configuración Electrónica</h3>
              <p class="font-mono text-gray-700">{{ element.electronConfiguration }}</p>
            </div>
          </div>
        </div>

        <!-- Usos -->
        <div v-if="element.uses.length > 0">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Usos Principales</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div
              v-for="use in element.uses"
              :key="use"
              class="bg-gray-50 rounded-lg px-3 py-2 text-gray-700"
            >
              {{ use }}
            </div>
          </div>
        </div>

        <!-- Datos interesantes -->
        <div v-if="element.interestingFacts.length > 0">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Datos Interesantes</h3>
          <div class="space-y-2">
            <div
              v-for="fact in element.interestingFacts"
              :key="fact"
              class="flex items-start space-x-2"
            >
              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-gray-700">{{ fact }}</p>
            </div>
          </div>
        </div>

        <!-- Indicadores especiales -->
        <div v-if="element.radioactive" class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <span class="font-medium text-yellow-800">Elemento Radioactivo</span>
          </div>
          <p class="text-yellow-700 mt-1">Este elemento es radioactivo y debe manejarse con precaución.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Element } from '@/types/element'

defineProps<{
  element: Element
}>()

defineEmits<{
  close: []
}>()

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
</script>
