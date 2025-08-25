import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Element } from '@/types/element'
import { elementsData } from '@/data/elements'

export const useElementsStore = defineStore('elements', () => {
  const elements = ref<Element[]>(elementsData)
  const selectedElement = ref<Element | null>(null)
  const searchQuery = ref('')
  const selectedCategory = ref<string>('all')

  const filteredElements = computed(() => {
    let filtered = elements.value

    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(element => 
        element.name.toLowerCase().includes(query) ||
        element.symbol.toLowerCase().includes(query) ||
        element.category.toLowerCase().includes(query)
      )
    }

    if (selectedCategory.value !== 'all') {
      filtered = filtered.filter(element => element.category === selectedCategory.value)
    }

    return filtered
  })

  const categories = computed(() => {
    const cats = new Set(elements.value.map(el => el.category))
    return Array.from(cats).sort()
  })

  const getElementBySymbol = (symbol: string) => {
    return elements.value.find(el => el.symbol.toLowerCase() === symbol.toLowerCase())
  }

  const setSelectedElement = (element: Element | null) => {
    selectedElement.value = element
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  const setSelectedCategory = (category: string) => {
    selectedCategory.value = category
  }

  return {
    elements,
    selectedElement,
    searchQuery,
    selectedCategory,
    filteredElements,
    categories,
    getElementBySymbol,
    setSelectedElement,
    setSearchQuery,
    setSelectedCategory
  }
})
