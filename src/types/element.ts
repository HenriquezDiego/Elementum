export interface Element {
  atomicNumber: number
  symbol: string
  name: string
  category: string
  group: number
  period: number
  block: string
  atomicMass: number
  density: number
  meltingPoint: number
  boilingPoint: number
  electronegativity: number | null
  electronConfiguration: string
  discoveredBy?: string
  discoveryYear?: number
  description: string
  uses: string[]
  interestingFacts: string[]
  color: string
  state: 'solid' | 'liquid' | 'gas'
  radioactive: boolean
}

export interface ElementCategory {
  name: string
  color: string
  description: string
}

export interface LearningTip {
  id: number
  title: string
  description: string
  category: 'memory' | 'understanding' | 'practice' | 'visual'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}


