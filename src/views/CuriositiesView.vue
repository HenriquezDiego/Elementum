<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-gradient">Datos Curiosos de la Tabla Periódica</h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Descubre hechos fascinantes, historias increíbles y curiosidades sorprendentes sobre los elementos químicos y la tabla periódica.
      </p>
    </div>

    <!-- Filtros -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <div class="flex flex-wrap gap-2 items-center">
        <span class="text-sm font-medium text-gray-700 py-2">Filtrar por:</span>
        <button
          v-for="category in curiosityCategories"
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

    <!-- Curiosidades Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="curiosity in filteredCuriosities"
        :key="curiosity.id"
        class="card hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <div class="flex items-center space-x-2 mb-4">
          <div
            class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            :class="getCategoryColor(curiosity.category)"
          >
            {{ getCategoryIcon(curiosity.category) }}
          </div>
          <span class="text-sm font-medium text-gray-600">{{ getCategoryLabel(curiosity.category) }}</span>
        </div>
        
        <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ curiosity.title }}</h3>
        <p class="text-gray-700 leading-relaxed">{{ curiosity.description }}</p>
        
        <div v-if="curiosity.relatedElements && curiosity.relatedElements.length > 0" class="mt-4">
          <div class="flex flex-wrap gap-1">
            <span class="text-xs text-gray-500">Elementos relacionados:</span>
            <span
              v-for="element in curiosity.relatedElements"
              :key="element"
              class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700"
            >
              {{ element }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de estadísticas -->
    <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Estadísticas Fascinantes</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">118</div>
          <div class="text-gray-700">Elementos conocidos</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">94</div>
          <div class="text-gray-700">Elementos naturales</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-orange-600 mb-2">24</div>
          <div class="text-gray-700">Elementos sintéticos</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-red-600 mb-2">1869</div>
          <div class="text-gray-700">Año de creación</div>
        </div>
      </div>
    </div>

    <!-- Timeline histórico -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Timeline Histórico</h2>
      <div class="space-y-6">
        <div class="flex items-start space-x-4">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">
            1869
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Dimitri Mendeleev publica la primera tabla periódica</h3>
            <p class="text-gray-600">Organizó los elementos por masa atómica y propiedades químicas, dejando espacios para elementos aún no descubiertos.</p>
          </div>
        </div>
        
        <div class="flex items-start space-x-4">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
            1913
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Henry Moseley establece el número atómico</h3>
            <p class="text-gray-600">Descubrió que las propiedades de los elementos dependen del número atómico, no de la masa atómica.</p>
          </div>
        </div>
        
        <div class="flex items-start space-x-4">
          <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
            1940
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Descubrimiento del primer elemento transuránico</h3>
            <p class="text-gray-600">El neptunio (Np) fue el primer elemento sintético creado por el hombre.</p>
          </div>
        </div>
        
        <div class="flex items-start space-x-4">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">
            2016
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Completación de la tabla periódica</h3>
            <p class="text-gray-600">Se completaron los elementos del período 7 con el descubrimiento de los últimos elementos superpesados.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Curiosity } from '@/types/element'

const selectedCategory = ref<string>('all')

const curiosityCategories = [
  { value: 'all', label: 'Todas' },
  { value: 'history', label: 'Historia' },
  { value: 'science', label: 'Ciencia' },
  { value: 'fun', label: 'Diversión' },
  { value: 'discovery', label: 'Descubrimiento' }
]

const curiosities: Curiosity[] = [
  {
    id: 1,
    title: 'El elemento más abundante del universo',
    description: 'El hidrógeno constituye aproximadamente el 75% de la masa elemental del universo. Es el elemento más simple y fue el primero en formarse después del Big Bang.',
    category: 'science',
    relatedElements: ['H']
  },
  {
    id: 2,
    title: 'El oro que viene del espacio',
    description: 'La mayor parte del oro en la Tierra proviene de meteoritos que impactaron nuestro planeta hace miles de millones de años. El oro terrestre se hundió hacia el núcleo durante la formación del planeta.',
    category: 'science',
    relatedElements: ['Au']
  },
  {
    id: 3,
    title: 'Mendeleev predijo elementos futuros',
    description: 'Dimitri Mendeleev dejó espacios vacíos en su tabla periódica para elementos que aún no habían sido descubiertos. Predijo las propiedades del germanio, galio y escandio con sorprendente precisión.',
    category: 'history',
    relatedElements: ['Ge', 'Ga', 'Sc']
  },
  {
    id: 4,
    title: 'El elemento más caro del mundo',
    description: 'El californio-252 es el elemento más caro del mundo, con un precio de aproximadamente $27 millones por gramo. Se usa en reactores nucleares y en la detección de explosivos.',
    category: 'science',
    relatedElements: ['Cf']
  },
  {
    id: 5,
    title: 'El helio que no se puede solidificar',
    description: 'El helio es el único elemento que no puede solidificarse a presión atmosférica, sin importar qué tan baja sea la temperatura. Solo se solidifica bajo presiones extremadamente altas.',
    category: 'science',
    relatedElements: ['He']
  },
  {
    id: 6,
    title: 'El litio que flota en el agua',
    description: 'El litio es el metal más ligero y es el único metal que flota en el agua. Sin embargo, reacciona violentamente con ella, liberando hidrógeno y formando hidróxido de litio.',
    category: 'fun',
    relatedElements: ['Li']
  },
  {
    id: 7,
    title: 'El carbono y la vida',
    description: 'El carbono es la base de toda la vida conocida. Puede formar más compuestos que cualquier otro elemento debido a su capacidad de formar enlaces covalentes estables.',
    category: 'science',
    relatedElements: ['C']
  },
  {
    id: 8,
    title: 'El flúor más reactivo',
    description: 'El flúor es el elemento más reactivo y electronegativo. Es tan reactivo que puede hacer que el vidrio, el agua y algunos metales se quemen con una llama brillante.',
    category: 'science',
    relatedElements: ['F']
  },
  {
    id: 9,
    title: 'El mercurio líquido a temperatura ambiente',
    description: 'El mercurio es el único metal que es líquido a temperatura ambiente. Los antiguos alquimistas lo consideraban el "primer principio" de todos los metales.',
    category: 'fun',
    relatedElements: ['Hg']
  },
  {
    id: 10,
    title: 'El descubrimiento del radio',
    description: 'Marie Curie descubrió el radio en 1898. El elemento brillaba en la oscuridad y Curie lo llevaba en su bolsillo para admirar su luminosidad.',
    category: 'discovery',
    relatedElements: ['Ra']
  },
  {
    id: 11,
    title: 'El platino más valioso que el oro',
    description: 'El platino es más raro que el oro y más valioso. Se estima que todo el platino extraído en la historia cabría en una habitación de tamaño medio.',
    category: 'science',
    relatedElements: ['Pt']
  },
  {
    id: 12,
    title: 'El tungsteno más duro',
    description: 'El tungsteno tiene el punto de fusión más alto de todos los elementos (3422°C). Su nombre proviene del sueco "tung sten" que significa "piedra pesada".',
    category: 'science',
    relatedElements: ['W']
  }
]

const filteredCuriosities = computed(() => {
  if (selectedCategory.value === 'all') {
    return curiosities
  }
  return curiosities.filter(curiosity => curiosity.category === selectedCategory.value)
})

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    history: 'bg-blue-500',
    science: 'bg-green-500',
    fun: 'bg-purple-500',
    discovery: 'bg-orange-500'
  }
  return colors[category] || 'bg-gray-500'
}

const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    history: '📚',
    science: '🔬',
    fun: '🎉',
    discovery: '🔍'
  }
  return icons[category] || '📖'
}

const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    history: 'Historia',
    science: 'Ciencia',
    fun: 'Diversión',
    discovery: 'Descubrimiento'
  }
  return labels[category] || category
}
</script>
