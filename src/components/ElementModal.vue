<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isOpen" 
        class="modal-overlay"
        @click="handleOverlayClick"
      >
        <div 
          class="modal-content"
          @click.stop
        >
          <!-- Header -->
          <div class="p-5 border-b border-gray-200">
            <div class="flex justify-between items-start">
              <div class="flex items-center space-x-4">
                <div
                  class="w-14 h-14 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                  :style="{ backgroundColor: getCategoryColor(element.category) }"
                >
                  {{ element.symbol }}
                </div>
                <div>
                  <h2 class="text-xl font-bold text-gray-900">{{ element.name }}</h2>
                  <p class="text-gray-600 text-sm">{{ element.symbol }} - Elemento {{ element.atomicNumber }}</p>
                  <p class="text-sm text-gray-500">{{ getCategoryDisplayName(element.category) }}</p>
                </div>
              </div>
              <button
                @click="closeModal"
                class="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Cerrar modal"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5 space-y-5">
            <!-- Grid principal con información básica y propiedades -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
              <!-- Información básica -->
              <div class="space-y-3">
                <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Información Básica</h3>
                <div class="space-y-2 text-sm">
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

              <!-- Propiedades físicas -->
              <div class="space-y-3">
                <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Propiedades Físicas</h3>
                <div class="space-y-2 text-sm">
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

              <!-- Descubrimiento y configuración -->
              <div class="space-y-3">
                <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Descubrimiento</h3>
                <div class="space-y-2 text-sm">
                  <div v-if="element.discoveredBy" class="flex justify-between">
                    <span class="text-gray-600">Descubierto por:</span>
                    <span class="font-medium">{{ element.discoveredBy }}</span>
                  </div>
                  <div v-if="element.discoveryYear" class="flex justify-between">
                    <span class="text-gray-600">Año:</span>
                    <span class="font-medium">{{ element.discoveryYear }}</span>
                  </div>
                </div>
                
                <div class="pt-3">
                  <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Configuración Electrónica</h3>
                  <p class="font-mono text-xs text-gray-700 bg-gray-50 p-2 rounded">{{ element.electronConfiguration }}</p>
                </div>
              </div>
            </div>

            <!-- Usos -->
            <div v-if="element.uses.length > 0">
              <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Usos Principales</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div
                  v-for="use in element.uses"
                  :key="use"
                  class="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700"
                >
                  {{ use }}
                </div>
              </div>
            </div>

            <!-- Datos interesantes -->
            <div v-if="element.interestingFacts.length > 0">
              <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Datos Interesantes</h3>
              <div class="space-y-2">
                <div
                  v-for="fact in element.interestingFacts"
                  :key="fact"
                  class="flex items-start space-x-2"
                >
                  <div class="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p class="text-sm text-gray-700">{{ fact }}</p>
                </div>
              </div>
            </div>

            <!-- Indicadores especiales -->
            <div v-if="element.radioactive" class="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <span class="font-medium text-yellow-800 text-sm">Elemento Radioactivo</span>
              </div>
              <p class="text-yellow-700 text-sm mt-1">Este elemento es radioactivo y debe manejarse con precaución.</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import type { Element } from '@/types/element'
import { useBodyScroll } from '@/composables/useBodyScroll'

interface Props {
  element: Element
  modelValue: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Composable para manejar el scroll del body
const { lockScroll, unlockScroll } = useBodyScroll()

// Computed para controlar la visibilidad del modal
const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})



// Watch para manejar el scroll del body cuando el modal se abre/cierra
watch(isOpen, (newValue) => {
  if (newValue) {
    lockScroll()
  } else {
    unlockScroll()
  }
})

// Métodos para manejar el modal
const closeModal = () => {
  isOpen.value = false
}

const handleOverlayClick = (event: Event) => {
  // Solo cerrar si se hace clic en el overlay, no en el contenido
  if (event.target === event.currentTarget) {
    closeModal()
  }
}

// Funciones de utilidad
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

<style scoped>
/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 9999;
}

/* Modal content */
.modal-content {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 48rem;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
}

/* Transiciones */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Bloquear scroll del body cuando el modal está abierto */
:global(body.modal-open) {
  overflow: hidden;
}
</style>
