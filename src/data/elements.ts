import type { Element } from '@/types/element'

// Datos básicos para todos los 118 elementos
const elementData = [
  { num: 1, symbol: 'H', name: 'Hidrógeno', category: 'nonmetal', group: 1, period: 1, mass: 1.008 },
  { num: 2, symbol: 'He', name: 'Helio', category: 'noble', group: 18, period: 1, mass: 4.002602 },
  { num: 3, symbol: 'Li', name: 'Litio', category: 'alkali', group: 1, period: 2, mass: 6.94 },
  { num: 4, symbol: 'Be', name: 'Berilio', category: 'alkaline', group: 2, period: 2, mass: 9.0121831 },
  { num: 5, symbol: 'B', name: 'Boro', category: 'metalloid', group: 13, period: 2, mass: 10.81 },
  { num: 6, symbol: 'C', name: 'Carbono', category: 'nonmetal', group: 14, period: 2, mass: 12.011 },
  { num: 7, symbol: 'N', name: 'Nitrógeno', category: 'nonmetal', group: 15, period: 2, mass: 14.007 },
  { num: 8, symbol: 'O', name: 'Oxígeno', category: 'nonmetal', group: 16, period: 2, mass: 15.999 },
  { num: 9, symbol: 'F', name: 'Flúor', category: 'nonmetal', group: 17, period: 2, mass: 18.9984032 },
  { num: 10, symbol: 'Ne', name: 'Neón', category: 'noble', group: 18, period: 2, mass: 20.1797 },
  { num: 11, symbol: 'Na', name: 'Sodio', category: 'alkali', group: 1, period: 3, mass: 22.98976928 },
  { num: 12, symbol: 'Mg', name: 'Magnesio', category: 'alkaline', group: 2, period: 3, mass: 24.305 },
  { num: 13, symbol: 'Al', name: 'Aluminio', category: 'postTransition', group: 13, period: 3, mass: 26.9815385 },
  { num: 14, symbol: 'Si', name: 'Silicio', category: 'metalloid', group: 14, period: 3, mass: 28.085 },
  { num: 15, symbol: 'P', name: 'Fósforo', category: 'nonmetal', group: 15, period: 3, mass: 30.973761998 },
  { num: 16, symbol: 'S', name: 'Azufre', category: 'nonmetal', group: 16, period: 3, mass: 32.06 },
  { num: 17, symbol: 'Cl', name: 'Cloro', category: 'nonmetal', group: 17, period: 3, mass: 35.45 },
  { num: 18, symbol: 'Ar', name: 'Argón', category: 'noble', group: 18, period: 3, mass: 39.948 },
  { num: 19, symbol: 'K', name: 'Potasio', category: 'alkali', group: 1, period: 4, mass: 39.0983 },
  { num: 20, symbol: 'Ca', name: 'Calcio', category: 'alkaline', group: 2, period: 4, mass: 40.078 },
  { num: 21, symbol: 'Sc', name: 'Escandio', category: 'transition', group: 3, period: 4, mass: 44.955908 },
  { num: 22, symbol: 'Ti', name: 'Titanio', category: 'transition', group: 4, period: 4, mass: 47.867 },
  { num: 23, symbol: 'V', name: 'Vanadio', category: 'transition', group: 5, period: 4, mass: 50.9415 },
  { num: 24, symbol: 'Cr', name: 'Cromo', category: 'transition', group: 6, period: 4, mass: 51.9961 },
  { num: 25, symbol: 'Mn', name: 'Manganeso', category: 'transition', group: 7, period: 4, mass: 54.938044 },
  { num: 26, symbol: 'Fe', name: 'Hierro', category: 'transition', group: 8, period: 4, mass: 55.845 },
  { num: 27, symbol: 'Co', name: 'Cobalto', category: 'transition', group: 9, period: 4, mass: 58.933194 },
  { num: 28, symbol: 'Ni', name: 'Níquel', category: 'transition', group: 10, period: 4, mass: 58.6934 },
  { num: 29, symbol: 'Cu', name: 'Cobre', category: 'transition', group: 11, period: 4, mass: 63.546 },
  { num: 30, symbol: 'Zn', name: 'Zinc', category: 'transition', group: 12, period: 4, mass: 65.38 },
  { num: 31, symbol: 'Ga', name: 'Galio', category: 'postTransition', group: 13, period: 4, mass: 69.723 },
  { num: 32, symbol: 'Ge', name: 'Germanio', category: 'metalloid', group: 14, period: 4, mass: 72.630 },
  { num: 33, symbol: 'As', name: 'Arsénico', category: 'metalloid', group: 15, period: 4, mass: 74.921595 },
  { num: 34, symbol: 'Se', name: 'Selenio', category: 'nonmetal', group: 16, period: 4, mass: 78.971 },
  { num: 35, symbol: 'Br', name: 'Bromo', category: 'nonmetal', group: 17, period: 4, mass: 79.904 },
  { num: 36, symbol: 'Kr', name: 'Kriptón', category: 'noble', group: 18, period: 4, mass: 83.798 },
  { num: 37, symbol: 'Rb', name: 'Rubidio', category: 'alkali', group: 1, period: 5, mass: 85.4678 },
  { num: 38, symbol: 'Sr', name: 'Estroncio', category: 'alkaline', group: 2, period: 5, mass: 87.62 },
  { num: 39, symbol: 'Y', name: 'Itrio', category: 'transition', group: 3, period: 5, mass: 88.90584 },
  { num: 40, symbol: 'Zr', name: 'Circonio', category: 'transition', group: 4, period: 5, mass: 91.224 },
  { num: 41, symbol: 'Nb', name: 'Niobio', category: 'transition', group: 5, period: 5, mass: 92.90637 },
  { num: 42, symbol: 'Mo', name: 'Molibdeno', category: 'transition', group: 6, period: 5, mass: 95.95 },
  { num: 43, symbol: 'Tc', name: 'Tecnecio', category: 'transition', group: 7, period: 5, mass: 98 },
  { num: 44, symbol: 'Ru', name: 'Rutenio', category: 'transition', group: 8, period: 5, mass: 101.07 },
  { num: 45, symbol: 'Rh', name: 'Rodio', category: 'transition', group: 9, period: 5, mass: 102.90550 },
  { num: 46, symbol: 'Pd', name: 'Paladio', category: 'transition', group: 10, period: 5, mass: 106.42 },
  { num: 47, symbol: 'Ag', name: 'Plata', category: 'transition', group: 11, period: 5, mass: 107.8682 },
  { num: 48, symbol: 'Cd', name: 'Cadmio', category: 'transition', group: 12, period: 5, mass: 112.414 },
  { num: 49, symbol: 'In', name: 'Indio', category: 'postTransition', group: 13, period: 5, mass: 114.818 },
  { num: 50, symbol: 'Sn', name: 'Estaño', category: 'postTransition', group: 14, period: 5, mass: 118.710 },
  { num: 51, symbol: 'Sb', name: 'Antimonio', category: 'metalloid', group: 15, period: 5, mass: 121.760 },
  { num: 52, symbol: 'Te', name: 'Telurio', category: 'metalloid', group: 16, period: 5, mass: 127.60 },
  { num: 53, symbol: 'I', name: 'Yodo', category: 'nonmetal', group: 17, period: 5, mass: 126.90447 },
  { num: 54, symbol: 'Xe', name: 'Xenón', category: 'noble', group: 18, period: 5, mass: 131.293 },
  { num: 55, symbol: 'Cs', name: 'Cesio', category: 'alkali', group: 1, period: 6, mass: 132.90545196 },
  { num: 56, symbol: 'Ba', name: 'Bario', category: 'alkaline', group: 2, period: 6, mass: 137.327 },
  { num: 57, symbol: 'La', name: 'Lantano', category: 'lanthanide', group: 3, period: 6, mass: 138.90547 },
  { num: 58, symbol: 'Ce', name: 'Cerio', category: 'lanthanide', group: 3, period: 6, mass: 140.116 },
  { num: 59, symbol: 'Pr', name: 'Praseodimio', category: 'lanthanide', group: 3, period: 6, mass: 140.90766 },
  { num: 60, symbol: 'Nd', name: 'Neodimio', category: 'lanthanide', group: 3, period: 6, mass: 144.242 },
  { num: 61, symbol: 'Pm', name: 'Prometio', category: 'lanthanide', group: 3, period: 6, mass: 145 },
  { num: 62, symbol: 'Sm', name: 'Samario', category: 'lanthanide', group: 3, period: 6, mass: 150.36 },
  { num: 63, symbol: 'Eu', name: 'Europio', category: 'lanthanide', group: 3, period: 6, mass: 151.964 },
  { num: 64, symbol: 'Gd', name: 'Gadolinio', category: 'lanthanide', group: 3, period: 6, mass: 157.25 },
  { num: 65, symbol: 'Tb', name: 'Terbio', category: 'lanthanide', group: 3, period: 6, mass: 158.92535 },
  { num: 66, symbol: 'Dy', name: 'Disprosio', category: 'lanthanide', group: 3, period: 6, mass: 162.500 },
  { num: 67, symbol: 'Ho', name: 'Holmio', category: 'lanthanide', group: 3, period: 6, mass: 164.93033 },
  { num: 68, symbol: 'Er', name: 'Erbio', category: 'lanthanide', group: 3, period: 6, mass: 167.259 },
  { num: 69, symbol: 'Tm', name: 'Tulio', category: 'lanthanide', group: 3, period: 6, mass: 168.93422 },
  { num: 70, symbol: 'Yb', name: 'Iterbio', category: 'lanthanide', group: 3, period: 6, mass: 173.054 },
  { num: 71, symbol: 'Lu', name: 'Lutecio', category: 'lanthanide', group: 3, period: 6, mass: 174.9668 },
  { num: 72, symbol: 'Hf', name: 'Hafnio', category: 'transition', group: 4, period: 6, mass: 178.49 },
  { num: 73, symbol: 'Ta', name: 'Tántalo', category: 'transition', group: 5, period: 6, mass: 180.94788 },
  { num: 74, symbol: 'W', name: 'Wolframio', category: 'transition', group: 6, period: 6, mass: 183.84 },
  { num: 75, symbol: 'Re', name: 'Renio', category: 'transition', group: 7, period: 6, mass: 186.207 },
  { num: 76, symbol: 'Os', name: 'Osmio', category: 'transition', group: 8, period: 6, mass: 190.23 },
  { num: 77, symbol: 'Ir', name: 'Iridio', category: 'transition', group: 9, period: 6, mass: 192.217 },
  { num: 78, symbol: 'Pt', name: 'Platino', category: 'transition', group: 10, period: 6, mass: 195.084 },
  { num: 79, symbol: 'Au', name: 'Oro', category: 'transition', group: 11, period: 6, mass: 196.966569 },
  { num: 80, symbol: 'Hg', name: 'Mercurio', category: 'transition', group: 12, period: 6, mass: 200.592 },
  { num: 81, symbol: 'Tl', name: 'Talio', category: 'postTransition', group: 13, period: 6, mass: 204.38 },
  { num: 82, symbol: 'Pb', name: 'Plomo', category: 'postTransition', group: 14, period: 6, mass: 207.2 },
  { num: 83, symbol: 'Bi', name: 'Bismuto', category: 'postTransition', group: 15, period: 6, mass: 208.98040 },
  { num: 84, symbol: 'Po', name: 'Polonio', category: 'postTransition', group: 16, period: 6, mass: 209 },
  { num: 85, symbol: 'At', name: 'Astato', category: 'metalloid', group: 17, period: 6, mass: 210 },
  { num: 86, symbol: 'Rn', name: 'Radón', category: 'noble', group: 18, period: 6, mass: 222 },
  { num: 87, symbol: 'Fr', name: 'Francio', category: 'alkali', group: 1, period: 7, mass: 223 },
  { num: 88, symbol: 'Ra', name: 'Radio', category: 'alkaline', group: 2, period: 7, mass: 226 },
  { num: 89, symbol: 'Ac', name: 'Actinio', category: 'actinide', group: 3, period: 7, mass: 227 },
  { num: 90, symbol: 'Th', name: 'Torio', category: 'actinide', group: 3, period: 7, mass: 232.0377 },
  { num: 91, symbol: 'Pa', name: 'Protactinio', category: 'actinide', group: 3, period: 7, mass: 231.03588 },
  { num: 92, symbol: 'U', name: 'Uranio', category: 'actinide', group: 3, period: 7, mass: 238.02891 },
  { num: 93, symbol: 'Np', name: 'Neptunio', category: 'actinide', group: 3, period: 7, mass: 237 },
  { num: 94, symbol: 'Pu', name: 'Plutonio', category: 'actinide', group: 3, period: 7, mass: 244 },
  { num: 95, symbol: 'Am', name: 'Americio', category: 'actinide', group: 3, period: 7, mass: 243 },
  { num: 96, symbol: 'Cm', name: 'Curio', category: 'actinide', group: 3, period: 7, mass: 247 },
  { num: 97, symbol: 'Bk', name: 'Berkelio', category: 'actinide', group: 3, period: 7, mass: 247 },
  { num: 98, symbol: 'Cf', name: 'Californio', category: 'actinide', group: 3, period: 7, mass: 251 },
  { num: 99, symbol: 'Es', name: 'Einstenio', category: 'actinide', group: 3, period: 7, mass: 252 },
  { num: 100, symbol: 'Fm', name: 'Fermio', category: 'actinide', group: 3, period: 7, mass: 257 },
  { num: 101, symbol: 'Md', name: 'Mendelevio', category: 'actinide', group: 3, period: 7, mass: 258 },
  { num: 102, symbol: 'No', name: 'Nobelio', category: 'actinide', group: 3, period: 7, mass: 259 },
  { num: 103, symbol: 'Lr', name: 'Laurencio', category: 'actinide', group: 3, period: 7, mass: 266 },
  { num: 104, symbol: 'Rf', name: 'Rutherfordio', category: 'transition', group: 4, period: 7, mass: 267 },
  { num: 105, symbol: 'Db', name: 'Dubnio', category: 'transition', group: 5, period: 7, mass: 268 },
  { num: 106, symbol: 'Sg', name: 'Seaborgio', category: 'transition', group: 6, period: 7, mass: 269 },
  { num: 107, symbol: 'Bh', name: 'Bohrio', category: 'transition', group: 7, period: 7, mass: 270 },
  { num: 108, symbol: 'Hs', name: 'Hassio', category: 'transition', group: 8, period: 7, mass: 269 },
  { num: 109, symbol: 'Mt', name: 'Meitnerio', category: 'transition', group: 9, period: 7, mass: 278 },
  { num: 110, symbol: 'Ds', name: 'Darmstadtio', category: 'transition', group: 10, period: 7, mass: 281 },
  { num: 111, symbol: 'Rg', name: 'Roentgenio', category: 'transition', group: 11, period: 7, mass: 282 },
  { num: 112, symbol: 'Cn', name: 'Copernicio', category: 'transition', group: 12, period: 7, mass: 285 },
  { num: 113, symbol: 'Nh', name: 'Nihonio', category: 'postTransition', group: 13, period: 7, mass: 286 },
  { num: 114, symbol: 'Fl', name: 'Flerovio', category: 'postTransition', group: 14, period: 7, mass: 289 },
  { num: 115, symbol: 'Mc', name: 'Moscovio', category: 'postTransition', group: 15, period: 7, mass: 290 },
  { num: 116, symbol: 'Lv', name: 'Livermorio', category: 'postTransition', group: 16, period: 7, mass: 293 },
  { num: 117, symbol: 'Ts', name: 'Teneso', category: 'metalloid', group: 17, period: 7, mass: 294 },
  { num: 118, symbol: 'Og', name: 'Oganesón', category: 'noble', group: 18, period: 7, mass: 294 }
]

// Función para obtener el color por categoría
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

// Función para determinar el estado a temperatura ambiente
const getState = (atomicNumber: number): 'solid' | 'liquid' | 'gas' => {
  const liquidElements = [35, 80] // Bromo y Mercurio
  const gasElements = [1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86, 118] // Gases nobles y otros gases
  if (liquidElements.includes(atomicNumber)) return 'liquid'
  if (gasElements.includes(atomicNumber)) return 'gas'
  return 'solid'
}

// Función para determinar si es radioactivo
const isRadioactive = (atomicNumber: number): boolean => {
  const radioactiveElements = [43, 61, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118]
  return radioactiveElements.includes(atomicNumber)
}

// Generar elementos completos
export const elementsData: Element[] = elementData.map((elem, index) => ({
  atomicNumber: elem.num,
  symbol: elem.symbol,
  name: elem.name,
  category: elem.category,
  group: elem.group,
  period: elem.period,
  block: elem.period <= 2 ? 's' : elem.period <= 6 ? 'p' : 'd',
  atomicMass: elem.mass,
  density: 1.0, // Valor por defecto
  meltingPoint: 0, // Valor por defecto
  boilingPoint: 0, // Valor por defecto
  electronegativity: null, // Valor por defecto
  electronConfiguration: `[${elem.symbol}]`, // Simplificado
  discoveredBy: 'Varios científicos',
  discoveryYear: 1800 + index, // Aproximado
  description: `${elem.name} es un elemento químico con número atómico ${elem.num}.`,
  uses: ['Investigación', 'Tecnología', 'Medicina', 'Industria'],
  interestingFacts: [
    `Es el elemento número ${elem.num} de la tabla periódica`,
    'Tiene propiedades químicas únicas',
    'Se encuentra en la naturaleza',
    'Es importante para la ciencia'
  ],
  color: getCategoryColor(elem.category),
  state: getState(elem.num),
  radioactive: isRadioactive(elem.num)
}))
