<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-gradient">Tabla Periódica Interactiva</h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Explora todos los elementos químicos de forma interactiva. Haz clic en cualquier elemento para ver información detallada.
      </p>
    </div>

    <!-- Filtro por categoría -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <div class="flex flex-wrap gap-2 items-center">
        <span class="text-sm font-medium text-gray-700 py-2">Filtrar por categoría:</span>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            selectedCategory === category
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ getCategoryDisplayName(category) }}
        </button>
        <button
          @click="selectedCategory = 'all'"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            selectedCategory === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          Todas las categorías
        </button>
      </div>
    </div>

    <!-- Tabla Periódica -->
    <div class="bg-white rounded-xl shadow-lg p-8 overflow-x-auto">
      <div class="periodic-table-container">
        <div class="periodic-table">
          <!-- Etiquetas de períodos -->
          <div
            v-for="period in 7"
            :key="`period-${period}`"
            class="period-label"
            :style="{ gridRow: period + 1, gridColumn: 1 }"
          >
            {{ period }}
          </div>

          <!-- Etiquetas de grupos -->
          <div
            v-for="group in 18"
            :key="`group-${group}`"
            class="group-label"
            :style="{ gridRow: 1, gridColumn: group + 1 }"
          >
            {{ group }}
          </div>

                                           <!-- Elementos principales (períodos 1-7, grupos 1-18) -->
            <div
              v-for="element in mainElements"
              :key="element.atomicNumber"
              @click="selectElement(element)"
              class="element-card"
              :class="[
                selectedCategory === 'all' 
                  ? 'opacity-100 scale-100'
                  : selectedCategory === element.category
                  ? 'opacity-100 scale-100'
                  : 'opacity-60 scale-100 dimmed-element'
              ]"
            :style="{
              backgroundColor: getCategoryColor(element.category),
              gridColumn: element.group + 1,
              gridRow: element.period + 1
            }"
          >
            <div class="atomic-number">{{ element.atomicNumber }}</div>
            <div class="symbol">{{ element.symbol }}</div>
            <div class="name">{{ element.name }}</div>
            <div class="mass">{{ element.atomicMass }}</div>
          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <!-- Lantánidos (período 6, grupo 3) -->
                  <div
                    v-for="element in lanthanides"
                    :key="element.atomicNumber"
                    @click="selectElement(element)"
                    class="element-card lanthanide"
                    :class="[
                      selectedCategory === 'all' 
                        ? 'opacity-100 scale-100'
                        : selectedCategory === element.category
                        ? 'opacity-100 scale-100'
                        : 'opacity-60 scale-100 dimmed-element'
                    ]"
             :style="{
               backgroundColor: getCategoryColor(element.category),
               gridColumn: 4 + (element.atomicNumber - 58),
               gridRow: 9
             }"
           >
             <div class="atomic-number">{{ element.atomicNumber }}</div>
             <div class="symbol">{{ element.symbol }}</div>
             <div class="name">{{ element.name }}</div>
             <div class="mass">{{ element.atomicMass }}</div>
           </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <!-- Actínidos (período 7, grupo 3) -->
                  <div
                    v-for="element in actinides"
                    :key="element.atomicNumber"
                    @click="selectElement(element)"
                    class="element-card actinide"
                    :class="[
                      selectedCategory === 'all' 
                        ? 'opacity-100 scale-100'
                        : selectedCategory === element.category
                        ? 'opacity-100 scale-100'
                        : 'opacity-60 scale-100 dimmed-element'
                    ]"
             :style="{
               backgroundColor: getCategoryColor(element.category),
               gridColumn: 4 + (element.atomicNumber - 90),
               gridRow: 10
             }"
           >
             <div class="atomic-number">{{ element.atomicNumber }}</div>
             <div class="symbol">{{ element.symbol }}</div>
             <div class="name">{{ element.name }}</div>
             <div class="mass">{{ element.atomicMass }}</div>
           </div>

          <!-- Etiquetas especiales -->
          <div class="lanthanide-label" style="grid-row: 9; grid-column: 1;">
            *
          </div>
          <div class="actinide-label" style="grid-row: 10; grid-column: 1;">
            **
          </div>
        </div>
      </div>
    </div>

    <!-- Leyenda -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-semibold mb-4">Leyenda</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="category in categories"
          :key="category"
          class="flex items-center space-x-2"
        >
          <div
            class="w-4 h-4 rounded"
            :style="{ backgroundColor: getCategoryColor(category) }"
          ></div>
          <span class="text-sm">{{ getCategoryDisplayName(category) }}</span>
        </div>
      </div>
      <div class="mt-4 text-sm text-gray-600">
        <p>* Serie de los lantánidos</p>
        <p>** Serie de los actínidos</p>
      </div>
    </div>

    <!-- Modal de elemento seleccionado -->
    <ElementModal
      v-model="showModal"
      :element="selectedElement"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useElementsStore } from '@/stores/elements'
import ElementModal from '@/components/ElementModal.vue'
import type { Element } from '@/types/element'

const elementsStore = useElementsStore()

const selectedCategory = ref<string>('all')
const elements = computed(() => elementsStore.elements)
const categories = computed(() => elementsStore.categories)

// Separar elementos por tipo
const mainElements = computed(() => 
  elements.value.filter(el => 
    el.atomicNumber <= 118 && 
    !(el.atomicNumber >= 58 && el.atomicNumber <= 71) && // Excluir lantánidos (pero incluir La)
    !(el.atomicNumber >= 90 && el.atomicNumber <= 103)   // Excluir actínidos (pero incluir Ac)
  )
)

const lanthanides = computed(() => 
  elements.value.filter(el => el.atomicNumber >= 58 && el.atomicNumber <= 71)
)

const actinides = computed(() => 
  elements.value.filter(el => el.atomicNumber >= 90 && el.atomicNumber <= 103)
)

const selectedElement = ref<Element | null>(null)
const showModal = ref(false)

const selectElement = (element: Element) => {
  selectedElement.value = element
  showModal.value = true
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
</script>

<style scoped>
.periodic-table-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  min-width: 1300px;
}

.periodic-table {
  display: grid;
  grid-template-columns: 25px repeat(18, 70px);
  grid-template-rows: 25px repeat(10, 80px);
  gap: 2px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}

.element-card {
  width: 70px;
  height: 80px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.element-card:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  z-index: 10;
}



.dimmed-element {
  filter: brightness(0.5) contrast(0.7) saturate(0.6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.atomic-number {
  position: absolute;
  top: 2px;
  left: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
  opacity: 0.9;
}

.symbol {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2px;
  line-height: 1;
}

.name {
  font-size: 0.6rem;
  color: white;
  opacity: 0.9;
  line-height: 1;
  margin-bottom: 2px;
  word-break: break-word;
}

.mass {
  font-size: 0.6rem;
  color: white;
  opacity: 0.7;
  line-height: 1;
}

.lanthanide, .actinide {
  width: 70px;
  height: 80px;
}

.period-label, .group-label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #666;
  font-size: 0.875rem;
}

.lanthanide-label, .actinide-label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #666;
  font-size: 0.875rem;
}

/* Responsive design */
@media (max-width: 1400px) {
  .periodic-table-container {
    min-width: 1100px;
  }
  
  .periodic-table {
    grid-template-columns: 20px repeat(18, 60px);
    grid-template-rows: 20px repeat(10, 70px);
    gap: 2px;
    max-width: 1100px;
  }
  
  .element-card {
    width: 60px;
    height: 70px;
    padding: 4px;
  }
  
  .symbol {
    font-size: 1rem;
  }
  
  .name {
    font-size: 0.55rem;
  }
  
  .mass {
    font-size: 0.55rem;
  }
  
  .lanthanide, .actinide {
    width: 60px;
    height: 70px;
  }
}

@media (max-width: 1200px) {
  .periodic-table-container {
    min-width: 950px;
  }
  
  .periodic-table {
    grid-template-columns: 20px repeat(18, 50px);
    grid-template-rows: 20px repeat(10, 60px);
    gap: 1px;
    max-width: 950px;
  }
  
  .element-card {
    width: 50px;
    height: 60px;
    padding: 3px;
  }
  
  .atomic-number {
    font-size: 0.6rem;
    top: 1px;
    left: 2px;
  }
  
  .symbol {
    font-size: 0.8rem;
  }
  
  .name {
    font-size: 0.5rem;
  }
  
  .mass {
    font-size: 0.5rem;
  }
  
  .lanthanide, .actinide {
    width: 50px;
    height: 60px;
  }
}

@media (max-width: 768px) {
  .periodic-table-container {
    min-width: 650px;
  }
  
  .periodic-table {
    grid-template-columns: 15px repeat(18, 35px);
    grid-template-rows: 15px repeat(10, 45px);
    gap: 1px;
    max-width: 650px;
  }
  
  .element-card {
    width: 35px;
    height: 45px;
    padding: 2px;
  }
  
  .atomic-number {
    font-size: 0.5rem;
    top: 1px;
    left: 1px;
  }
  
  .symbol {
    font-size: 0.6rem;
  }
  
  .name {
    font-size: 0.4rem;
  }
  
  .mass {
    font-size: 0.4rem;
  }
  
  .lanthanide, .actinide {
    width: 35px;
    height: 45px;
  }
  
  .period-label, .group-label, .lanthanide-label, .actinide-label {
    font-size: 0.6rem;
  }
}
</style>
