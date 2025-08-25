import type { Element } from '@/types/element'

export const completeElementsData: Element[] = [
  // Período 1
  {
    atomicNumber: 1, symbol: 'H', name: 'Hidrógeno', category: 'nonmetal', group: 1, period: 1, block: 's',
    atomicMass: 1.008, density: 0.08988, meltingPoint: -259.16, boilingPoint: -252.87, electronegativity: 2.20,
    electronConfiguration: '1s¹', discoveredBy: 'Henry Cavendish', discoveryYear: 1766,
    description: 'El hidrógeno es el elemento más abundante en el universo y el más ligero de todos los elementos.',
    uses: ['Combustible para cohetes', 'Producción de amoníaco', 'Hidrogenación de aceites', 'Células de combustible'],
    interestingFacts: ['Es el elemento más abundante en el universo', 'Fue el primer elemento en formarse después del Big Bang', 'En el Sol, el hidrógeno se fusiona para formar helio', 'Es el único elemento que puede existir sin neutrones'],
    color: '#26c6da', state: 'gas', radioactive: false
  },
  {
    atomicNumber: 2, symbol: 'He', name: 'Helio', category: 'noble', group: 18, period: 1, block: 's',
    atomicMass: 4.002602, density: 0.1786, meltingPoint: -272.2, boilingPoint: -268.93, electronegativity: null,
    electronConfiguration: '1s²', discoveredBy: 'Pierre Janssen', discoveryYear: 1895,
    description: 'El helio es un gas noble inerte, el segundo elemento más ligero y el segundo más abundante en el universo observable.',
    uses: ['Globos y dirigibles', 'Criogenia', 'Respiración en buceo profundo', 'Escáneres médicos'],
    interestingFacts: ['Es el único elemento que no puede solidificarse a presión atmosférica', 'Fue descubierto en el Sol antes que en la Tierra', 'Su nombre proviene del dios griego del Sol, Helios', 'Es el gas noble más abundante en el universo'],
    color: '#ff7043', state: 'gas', radioactive: false
  },

  // Período 2
  {
    atomicNumber: 3, symbol: 'Li', name: 'Litio', category: 'alkali', group: 1, period: 2, block: 's',
    atomicMass: 6.94, density: 0.534, meltingPoint: 180.54, boilingPoint: 1342, electronegativity: 0.98,
    electronConfiguration: '[He] 2s¹', discoveredBy: 'Johann August Arfvedson', discoveryYear: 1817,
    description: 'El litio es un metal alcalino blando, plateado-blanco, que es altamente reactivo y flamable.',
    uses: ['Baterías recargables', 'Tratamiento del trastorno bipolar', 'Aleaciones ligeras', 'Reactores nucleares'],
    interestingFacts: ['Es el metal más ligero', 'Flota en el agua pero reacciona violentamente con ella', 'Se usa en el tratamiento del trastorno bipolar', 'Es esencial para las baterías de iones de litio'],
    color: '#ff6b6b', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 4, symbol: 'Be', name: 'Berilio', category: 'alkaline', group: 2, period: 2, block: 's',
    atomicMass: 9.0121831, density: 1.85, meltingPoint: 1287, boilingPoint: 2470, electronegativity: 1.57,
    electronConfiguration: '[He] 2s²', discoveredBy: 'Louis Nicolas Vauquelin', discoveryYear: 1798,
    description: 'El berilio es un metal alcalinotérreo duro, grisáceo, que es tóxico y se usa principalmente en aleaciones.',
    uses: ['Ventanas de rayos X', 'Reactores nucleares', 'Aleaciones de cobre', 'Instrumentos ópticos'],
    interestingFacts: ['Es transparente a los rayos X', 'Es tóxico y puede causar beriliosis', 'Se usa en ventanas de rayos X', 'Es el metal alcalinotérreo más ligero'],
    color: '#ffa726', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 5, symbol: 'B', name: 'Boro', category: 'metalloid', group: 13, period: 2, block: 'p',
    atomicMass: 10.81, density: 2.34, meltingPoint: 2075, boilingPoint: 4000, electronegativity: 2.04,
    electronConfiguration: '[He] 2s² 2p¹', discoveredBy: 'Joseph Louis Gay-Lussac', discoveryYear: 1808,
    description: 'El boro es un semimetal que se encuentra en la naturaleza principalmente como ácido bórico.',
    uses: ['Detergentes', 'Vidrio borosilicato', 'Fertilizantes', 'Materiales compuestos'],
    interestingFacts: ['Es esencial para las plantas', 'Se usa en detergentes y jabones', 'El vidrio borosilicato es resistente al calor', 'Es un micronutriente importante'],
    color: '#ab47bc', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 6, symbol: 'C', name: 'Carbono', category: 'nonmetal', group: 14, period: 2, block: 'p',
    atomicMass: 12.011, density: 2.267, meltingPoint: 3550, boilingPoint: 4027, electronegativity: 2.55,
    electronConfiguration: '[He] 2s² 2p²', discoveredBy: 'Antiguos', discoveryYear: -3750,
    description: 'El carbono es la base de toda la vida conocida y forma más compuestos que cualquier otro elemento.',
    uses: ['Grafito para lápices', 'Diamantes', 'Combustibles fósiles', 'Materiales compuestos'],
    interestingFacts: ['Es la base de toda la vida', 'Puede formar más compuestos que cualquier otro elemento', 'Existe en forma de diamante y grafito', 'Es el cuarto elemento más abundante en el universo'],
    color: '#26c6da', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 7, symbol: 'N', name: 'Nitrógeno', category: 'nonmetal', group: 15, period: 2, block: 'p',
    atomicMass: 14.007, density: 1.251, meltingPoint: -210.1, boilingPoint: -195.79, electronegativity: 3.04,
    electronConfiguration: '[He] 2s² 2p³', discoveredBy: 'Daniel Rutherford', discoveryYear: 1772,
    description: 'El nitrógeno es un gas incoloro, inodoro e insípido que constituye aproximadamente el 78% de la atmósfera terrestre.',
    uses: ['Fertilizantes', 'Explosivos', 'Criogenia', 'Producción de amoníaco'],
    interestingFacts: ['Constituye el 78% de la atmósfera', 'Es esencial para las proteínas', 'Se usa en fertilizantes', 'Es inerte en condiciones normales'],
    color: '#26c6da', state: 'gas', radioactive: false
  },
  {
    atomicNumber: 8, symbol: 'O', name: 'Oxígeno', category: 'nonmetal', group: 16, period: 2, block: 'p',
    atomicMass: 15.999, density: 1.429, meltingPoint: -218.79, boilingPoint: -182.96, electronegativity: 3.44,
    electronConfiguration: '[He] 2s² 2p⁴', discoveredBy: 'Carl Wilhelm Scheele', discoveryYear: 1774,
    description: 'El oxígeno es un gas incoloro, inodoro e insípido que es esencial para la respiración y la combustión.',
    uses: ['Respiración', 'Combustión', 'Tratamiento médico', 'Soldadura'],
    interestingFacts: ['Es esencial para la respiración', 'Constituye el 21% de la atmósfera', 'Es el tercer elemento más abundante', 'Fue descubierto independientemente por Scheele y Priestley'],
    color: '#26c6da', state: 'gas', radioactive: false
  },
  {
    atomicNumber: 9, symbol: 'F', name: 'Flúor', category: 'nonmetal', group: 17, period: 2, block: 'p',
    atomicMass: 18.9984032, density: 1.696, meltingPoint: -219.62, boilingPoint: -188.12, electronegativity: 3.98,
    electronConfiguration: '[He] 2s² 2p⁵', discoveredBy: 'Henri Moissan', discoveryYear: 1886,
    description: 'El flúor es el elemento más electronegativo y reactivo, un gas amarillo pálido altamente tóxico.',
    uses: ['Pasta de dientes', 'Refrigerantes', 'Producción de uranio', 'Teflón'],
    interestingFacts: ['Es el elemento más electronegativo', 'Es altamente reactivo y tóxico', 'Se usa en pasta de dientes', 'Puede reaccionar con gases nobles'],
    color: '#26c6da', state: 'gas', radioactive: false
  },
  {
    atomicNumber: 10, symbol: 'Ne', name: 'Neón', category: 'noble', group: 18, period: 2, block: 'p',
    atomicMass: 20.1797, density: 0.8999, meltingPoint: -248.59, boilingPoint: -246.08, electronegativity: null,
    electronConfiguration: '[He] 2s² 2p⁶', discoveredBy: 'Sir William Ramsay', discoveryYear: 1898,
    description: 'El neón es un gas noble incoloro, inodoro e inerte que se usa principalmente en señales luminosas.',
    uses: ['Señales luminosas', 'Láseres', 'Criogenia', 'Indicadores de alto voltaje'],
    interestingFacts: ['Brilla de color naranja-rojo en tubos de descarga', 'Es el quinto elemento más abundante en el universo', 'Se usa en señales de neón', 'Es completamente inerte'],
    color: '#ff7043', state: 'gas', radioactive: false
  },

  // Período 3
  {
    atomicNumber: 11, symbol: 'Na', name: 'Sodio', category: 'alkali', group: 1, period: 3, block: 's',
    atomicMass: 22.98976928, density: 0.971, meltingPoint: 97.72, boilingPoint: 883, electronegativity: 0.93,
    electronConfiguration: '[Ne] 3s¹', discoveredBy: 'Humphry Davy', discoveryYear: 1807,
    description: 'El sodio es un metal alcalino blando, plateado-blanco, altamente reactivo que nunca se encuentra libre en la naturaleza.',
    uses: ['Cloruro de sodio (sal)', 'Lámparas de vapor de sodio', 'Refrigerante nuclear', 'Metalurgia'],
    interestingFacts: ['Es el sexto elemento más abundante en la corteza terrestre', 'Reacciona violentamente con el agua', 'Se usa en lámparas de vapor de sodio', 'Es esencial para la función nerviosa'],
    color: '#ff6b6b', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 12, symbol: 'Mg', name: 'Magnesio', category: 'alkaline', group: 2, period: 3, block: 's',
    atomicMass: 24.305, density: 1.738, meltingPoint: 650, boilingPoint: 1090, electronegativity: 1.31,
    electronConfiguration: '[Ne] 3s²', discoveredBy: 'Joseph Black', discoveryYear: 1755,
    description: 'El magnesio es un metal alcalinotérreo brillante, grisáceo, que es el octavo elemento más abundante en la corteza terrestre.',
    uses: ['Aleaciones ligeras', 'Pirotécnica', 'Medicina', 'Agricultura'],
    interestingFacts: ['Es el octavo elemento más abundante en la corteza', 'Se quema con una llama blanca brillante', 'Es esencial para la fotosíntesis', 'Se usa en aleaciones de aviones'],
    color: '#ffa726', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 13, symbol: 'Al', name: 'Aluminio', category: 'postTransition', group: 13, period: 3, block: 'p',
    atomicMass: 26.9815385, density: 2.70, meltingPoint: 660.32, boilingPoint: 2470, electronegativity: 1.61,
    electronConfiguration: '[Ne] 3s² 3p¹', discoveredBy: 'Hans Christian Ørsted', discoveryYear: 1825,
    description: 'El aluminio es un metal post-transición blando, no magnético, dúctil, que es el tercer elemento más abundante en la corteza terrestre.',
    uses: ['Envases y latas', 'Construcción', 'Transporte', 'Electrónica'],
    interestingFacts: ['Es el tercer elemento más abundante en la corteza', 'Es muy resistente a la corrosión', 'Se recicla fácilmente', 'Se usa en aviones y automóviles'],
    color: '#42a5f5', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 14, symbol: 'Si', name: 'Silicio', category: 'metalloid', group: 14, period: 3, block: 'p',
    atomicMass: 28.085, density: 2.3296, meltingPoint: 1414, boilingPoint: 3265, electronegativity: 1.90,
    electronConfiguration: '[Ne] 3s² 3p²', discoveredBy: 'Jöns Jacob Berzelius', discoveryYear: 1824,
    description: 'El silicio es un semimetal que es el segundo elemento más abundante en la corteza terrestre después del oxígeno.',
    uses: ['Semiconductores', 'Vidrio', 'Cemento', 'Aleaciones'],
    interestingFacts: ['Es el segundo elemento más abundante en la corteza', 'Es esencial para la electrónica moderna', 'Se encuentra en la arena', 'Es el material base de los chips de computadora'],
    color: '#ab47bc', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 15, symbol: 'P', name: 'Fósforo', category: 'nonmetal', group: 15, period: 3, block: 'p',
    atomicMass: 30.973761998, density: 1.82, meltingPoint: 44.15, boilingPoint: 280.5, electronegativity: 2.19,
    electronConfiguration: '[Ne] 3s² 3p³', discoveredBy: 'Hennig Brand', discoveryYear: 1669,
    description: 'El fósforo es un no metal que es esencial para la vida y se encuentra en el ADN, ARN y ATP.',
    uses: ['Fertilizantes', 'Detergentes', 'Fósforos', 'Medicina'],
    interestingFacts: ['Es esencial para la vida', 'Brilla en la oscuridad', 'Se encuentra en el ADN y ARN', 'Fue descubierto en la orina'],
    color: '#26c6da', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 16, symbol: 'S', name: 'Azufre', category: 'nonmetal', group: 16, period: 3, block: 'p',
    atomicMass: 32.06, density: 2.067, meltingPoint: 115.21, boilingPoint: 444.72, electronegativity: 2.58,
    electronConfiguration: '[Ne] 3s² 3p⁴', discoveredBy: 'Antiguos', discoveryYear: -2000,
    description: 'El azufre es un no metal abundante que es esencial para la vida y se encuentra en aminoácidos y proteínas.',
    uses: ['Ácido sulfúrico', 'Pólvora', 'Vulcanización del caucho', 'Medicina'],
    interestingFacts: ['Es esencial para la vida', 'Huele a huevos podridos', 'Se usa en pólvora', 'Es el décimo elemento más abundante'],
    color: '#26c6da', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 17, symbol: 'Cl', name: 'Cloro', category: 'nonmetal', group: 17, period: 3, block: 'p',
    atomicMass: 35.45, density: 3.214, meltingPoint: -101.5, boilingPoint: -34.04, electronegativity: 3.16,
    electronConfiguration: '[Ne] 3s² 3p⁵', discoveredBy: 'Carl Wilhelm Scheele', discoveryYear: 1774,
    description: 'El cloro es un halógeno que es un gas amarillo verdoso altamente reactivo y tóxico.',
    uses: ['Purificación de agua', 'Blanqueadores', 'PVC', 'Medicina'],
    interestingFacts: ['Es un poderoso desinfectante', 'Se usa en piscinas', 'Es tóxico en altas concentraciones', 'Se combina con sodio para formar sal'],
    color: '#26c6da', state: 'gas', radioactive: false
  },
  {
    atomicNumber: 18, symbol: 'Ar', name: 'Argón', category: 'noble', group: 18, period: 3, block: 'p',
    atomicMass: 39.948, density: 1.784, meltingPoint: -189.35, boilingPoint: -185.85, electronegativity: null,
    electronConfiguration: '[Ne] 3s² 3p⁶', discoveredBy: 'Lord Rayleigh', discoveryYear: 1894,
    description: 'El argón es un gas noble incoloro, inodoro e inerte que es el tercer gas noble más abundante en la atmósfera.',
    uses: ['Bombillas', 'Soldadura', 'Criogenia', 'Láseres'],
    interestingFacts: ['Es el tercer gas noble más abundante', 'Se usa en bombillas', 'Es completamente inerte', 'Constituye el 0.93% de la atmósfera'],
    color: '#ff7043', state: 'gas', radioactive: false
  },

  // Período 4
  {
    atomicNumber: 19, symbol: 'K', name: 'Potasio', category: 'alkali', group: 1, period: 4, block: 's',
    atomicMass: 39.0983, density: 0.862, meltingPoint: 63.38, boilingPoint: 759, electronegativity: 0.82,
    electronConfiguration: '[Ar] 4s¹', discoveredBy: 'Humphry Davy', discoveryYear: 1807,
    description: 'El potasio es un metal alcalino blando, plateado-blanco, que es altamente reactivo y esencial para la vida.',
    uses: ['Fertilizantes', 'Medicina', 'Aleaciones', 'Reactores nucleares'],
    interestingFacts: ['Es esencial para la función muscular', 'Reacciona violentamente con el agua', 'Se encuentra en bananas', 'Es el séptimo elemento más abundante'],
    color: '#ff6b6b', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 20, symbol: 'Ca', name: 'Calcio', category: 'alkaline', group: 2, period: 4, block: 's',
    atomicMass: 40.078, density: 1.54, meltingPoint: 842, boilingPoint: 1484, electronegativity: 1.00,
    electronConfiguration: '[Ar] 4s²', discoveredBy: 'Humphry Davy', discoveryYear: 1808,
    description: 'El calcio es un metal alcalinotérreo que es el quinto elemento más abundante en la corteza terrestre.',
    uses: ['Construcción', 'Medicina', 'Agricultura', 'Metalurgia'],
    interestingFacts: ['Es esencial para huesos y dientes', 'Es el quinto elemento más abundante', 'Se encuentra en la leche', 'Se usa en cemento y yeso'],
    color: '#ffa726', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 21, symbol: 'Sc', name: 'Escandio', category: 'transition', group: 3, period: 4, block: 'd',
    atomicMass: 44.955908, density: 2.985, meltingPoint: 1541, boilingPoint: 2830, electronegativity: 1.36,
    electronConfiguration: '[Ar] 3d¹ 4s²', discoveredBy: 'Lars Fredrik Nilson', discoveryYear: 1879,
    description: 'El escandio es un metal de transición blando, plateado-blanco, que se encuentra principalmente en minerales raros.',
    uses: ['Aleaciones de aluminio', 'Lámparas de vapor de mercurio', 'Reactores nucleares', 'Materiales deportivos'],
    interestingFacts: ['Es el primer elemento de transición', 'Se usa en aleaciones de aluminio para aviones', 'Es relativamente raro', 'Fue nombrado en honor a Escandinavia'],
    color: '#66bb6a', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 22, symbol: 'Ti', name: 'Titanio', category: 'transition', group: 4, period: 4, block: 'd',
    atomicMass: 47.867, density: 4.506, meltingPoint: 1668, boilingPoint: 3287, electronegativity: 1.54,
    electronConfiguration: '[Ar] 3d² 4s²', discoveredBy: 'William Gregor', discoveryYear: 1791,
    description: 'El titanio es un metal de transición fuerte, ligero, resistente a la corrosión, que se usa en aleaciones de alta resistencia.',
    uses: ['Aleaciones de aviones', 'Implantes médicos', 'Pinturas', 'Equipos deportivos'],
    interestingFacts: ['Es muy resistente a la corrosión', 'Se usa en implantes médicos', 'Es más fuerte que el acero pero más ligero', 'Se encuentra en la arena de playa'],
    color: '#66bb6a', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 23, symbol: 'V', name: 'Vanadio', category: 'transition', group: 5, period: 4, block: 'd',
    atomicMass: 50.9415, density: 6.11, meltingPoint: 1910, boilingPoint: 3407, electronegativity: 1.63,
    electronConfiguration: '[Ar] 3d³ 4s²', discoveredBy: 'Andrés Manuel del Río', discoveryYear: 1801,
    description: 'El vanadio es un metal de transición duro, plateado-grisáceo, que se usa principalmente en aleaciones de acero.',
    uses: ['Aleaciones de acero', 'Catalizadores', 'Baterías', 'Colorantes'],
    interestingFacts: ['Se usa para hacer acero más fuerte', 'Fue descubierto en México', 'Es esencial para algunos organismos', 'Se usa en baterías de flujo'],
    color: '#66bb6a', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 24, symbol: 'Cr', name: 'Cromo', category: 'transition', group: 6, period: 4, block: 'd',
    atomicMass: 51.9961, density: 7.15, meltingPoint: 1907, boilingPoint: 2671, electronegativity: 1.66,
    electronConfiguration: '[Ar] 3d⁵ 4s¹', discoveredBy: 'Louis Nicolas Vauquelin', discoveryYear: 1797,
    description: 'El cromo es un metal de transición duro, brillante, que se usa para el cromado y en aleaciones de acero.',
    uses: ['Cromado', 'Aleaciones de acero', 'Colorantes', 'Catalizadores'],
    interestingFacts: ['Se usa para el cromado de superficies', 'Es esencial para el metabolismo de la glucosa', 'Le da color a las esmeraldas', 'Es muy resistente a la corrosión'],
    color: '#66bb6a', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 25, symbol: 'Mn', name: 'Manganeso', category: 'transition', group: 7, period: 4, block: 'd',
    atomicMass: 54.938044, density: 7.21, meltingPoint: 1246, boilingPoint: 2061, electronegativity: 1.55,
    electronConfiguration: '[Ar] 3d⁵ 4s²', discoveredBy: 'Carl Wilhelm Scheele', discoveryYear: 1774,
    description: 'El manganeso es un metal de transición duro, quebradizo, plateado-grisáceo, que es esencial para la vida.',
    uses: ['Aleaciones de acero', 'Baterías', 'Fertilizantes', 'Colorantes'],
    interestingFacts: ['Es esencial para la función cerebral', 'Se usa en baterías alcalinas', 'Es importante para la fotosíntesis', 'Se encuentra en las nueces'],
    color: '#66bb6a', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 26, symbol: 'Fe', name: 'Hierro', category: 'transition', group: 8, period: 4, block: 'd',
    atomicMass: 55.845, density: 7.874, meltingPoint: 1538, boilingPoint: 2862, electronegativity: 1.83,
    electronConfiguration: '[Ar] 3d⁶ 4s²', discoveredBy: 'Antiguos', discoveryYear: -5000,
    description: 'El hierro es un metal de transición que es el cuarto elemento más abundante en la corteza terrestre y esencial para la vida.',
    uses: ['Acero', 'Construcción', 'Herramientas', 'Medicina'],
    interestingFacts: ['Es el elemento más abundante en la Tierra', 'Es esencial para la hemoglobina', 'Se oxida fácilmente', 'Fue el primer metal trabajado por humanos'],
    color: '#66bb6a', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 27, symbol: 'Co', name: 'Cobalto', category: 'transition', group: 9, period: 4, block: 'd',
    atomicMass: 58.933194, density: 8.86, meltingPoint: 1495, boilingPoint: 2927, electronegativity: 1.88,
    electronConfiguration: '[Ar] 3d⁷ 4s²', discoveredBy: 'Georg Brandt', discoveryYear: 1735,
    description: 'El cobalto es un metal de transición duro, plateado-grisáceo, que es esencial para la vitamina B12.',
    uses: ['Imanes', 'Aleaciones de alta temperatura', 'Colorantes', 'Medicina'],
    interestingFacts: ['Es esencial para la vitamina B12', 'Se usa en imanes potentes', 'Le da color azul al vidrio', 'Es tóxico en altas concentraciones'],
    color: '#66bb6a', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 28, symbol: 'Ni', name: 'Níquel', category: 'transition', group: 10, period: 4, block: 'd',
    atomicMass: 58.6934, density: 8.908, meltingPoint: 1455, boilingPoint: 2913, electronegativity: 1.91,
    electronConfiguration: '[Ar] 3d⁸ 4s²', discoveredBy: 'Axel Fredrik Cronstedt', discoveryYear: 1751,
    description: 'El níquel es un metal de transición plateado-blanco, que es resistente a la corrosión y se usa en aleaciones.',
    uses: ['Monedas', 'Aleaciones de acero', 'Baterías recargables', 'Catalizadores'],
    interestingFacts: ['Se usa en monedas de muchos países', 'Es resistente a la corrosión', 'Se usa en baterías de níquel-cadmio', 'Puede causar alergias'],
    color: '#66bb6a', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 29, symbol: 'Cu', name: 'Cobre', category: 'transition', group: 11, period: 4, block: 'd',
    atomicMass: 63.546, density: 8.96, meltingPoint: 1084.62, boilingPoint: 2562, electronegativity: 1.90,
    electronConfiguration: '[Ar] 3d¹⁰ 4s¹', discoveredBy: 'Antiguos', discoveryYear: -9000,
    description: 'El cobre es un metal de transición rojizo, dúctil y maleable, que es excelente conductor de electricidad.',
    uses: ['Cables eléctricos', 'Monedas', 'Tuberías', 'Electrónica'],
    interestingFacts: ['Es el mejor conductor de electricidad', 'Se oxida formando verdín', 'Es esencial para la vida', 'Fue el primer metal usado por humanos'],
    color: '#66bb6a', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 30, symbol: 'Zn', name: 'Zinc', category: 'transition', group: 12, period: 4, block: 'd',
    atomicMass: 65.38, density: 7.134, meltingPoint: 419.53, boilingPoint: 907, electronegativity: 1.65,
    electronConfiguration: '[Ar] 3d¹⁰ 4s²', discoveredBy: 'Andreas Sigismund Marggraf', discoveryYear: 1746,
    description: 'El zinc es un metal de transición blando, blanco-azulado, que es esencial para la vida y se usa para galvanizar.',
    uses: ['Galvanizado', 'Baterías', 'Aleaciones', 'Suplementos'],
    interestingFacts: ['Es esencial para el sistema inmunológico', 'Se usa para galvanizar hierro', 'Es importante para la cicatrización', 'Se encuentra en ostras'],
    color: '#66bb6a', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 31, symbol: 'Ga', name: 'Galio', category: 'postTransition', group: 13, period: 4, block: 'p',
    atomicMass: 69.723, density: 5.907, meltingPoint: 29.7646, boilingPoint: 2400, electronegativity: 1.81,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p¹', discoveredBy: 'Paul-Émile Lecoq de Boisbaudran', discoveryYear: 1875,
    description: 'El galio es un metal post-transición blando, plateado, que se derrite cerca de la temperatura ambiente.',
    uses: ['Semiconductores', 'Termómetros', 'Láseres', 'Electrónica'],
    interestingFacts: ['Se derrite en la mano', 'Se usa en termómetros de alta temperatura', 'Es importante para LEDs', 'Fue predicho por Mendeleev'],
    color: '#42a5f5', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 32, symbol: 'Ge', name: 'Germanio', category: 'metalloid', group: 14, period: 4, block: 'p',
    atomicMass: 72.630, density: 5.323, meltingPoint: 938.25, boilingPoint: 2833, electronegativity: 2.01,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p²', discoveredBy: 'Clemens Winkler', discoveryYear: 1886,
    description: 'El germanio es un semimetal que se usa en semiconductores y fibra óptica.',
    uses: ['Semiconductores', 'Fibra óptica', 'Lentes infrarrojas', 'Electrónica'],
    interestingFacts: ['Es transparente a la luz infrarroja', 'Se usa en fibra óptica', 'Fue predicho por Mendeleev', 'Es importante para la electrónica'],
    color: '#ab47bc', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 33, symbol: 'As', name: 'Arsénico', category: 'metalloid', group: 15, period: 4, block: 'p',
    atomicMass: 74.921595, density: 5.727, meltingPoint: 817, boilingPoint: 614, electronegativity: 2.18,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p³', discoveredBy: 'Albertus Magnus', discoveryYear: 1250,
    description: 'El arsénico es un semimetal tóxico que se encuentra en la naturaleza y se ha usado como veneno.',
    uses: ['Semiconductores', 'Pesticidas', 'Medicina', 'Aleaciones'],
    interestingFacts: ['Es muy tóxico', 'Se ha usado como veneno', 'Es esencial para algunos organismos', 'Se encuentra en el arroz'],
    color: '#ab47bc', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 34, symbol: 'Se', name: 'Selenio', category: 'nonmetal', group: 16, period: 4, block: 'p',
    atomicMass: 78.971, density: 4.809, meltingPoint: 221, boilingPoint: 685, electronegativity: 2.55,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁴', discoveredBy: 'Jöns Jacob Berzelius', discoveryYear: 1817,
    description: 'El selenio es un no metal que es esencial para la vida y se usa en fotocopiadoras y paneles solares.',
    uses: ['Fotocopiadoras', 'Paneles solares', 'Suplementos', 'Vidrio'],
    interestingFacts: ['Es esencial para la función tiroidea', 'Se usa en fotocopiadoras', 'Es importante para la salud', 'Se encuentra en nueces de Brasil'],
    color: '#26c6da', state: 'solid', radioactive: false
  },
  {
    atomicNumber: 35, symbol: 'Br', name: 'Bromo', category: 'nonmetal', group: 17, period: 4, block: 'p',
    atomicMass: 79.904, density: 3.122, meltingPoint: -7.2, boilingPoint: 58.8, electronegativity: 2.96,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁵', discoveredBy: 'Antoine Jérôme Balard', discoveryYear: 1826,
    description: 'El bromo es un halógeno que es el único elemento no metálico líquido a temperatura ambiente.',
    uses: ['Retardantes de llama', 'Medicina', 'Fotografía', 'Purificación de agua'],
    interestingFacts: ['Es el único elemento no metálico líquido', 'Huele mal', 'Se usa en retardantes de llama', 'Es tóxico'],
    color: '#26c6da', state: 'liquid', radioactive: false
  },
  {
    atomicNumber: 36, symbol: 'Kr', name: 'Kriptón', category: 'noble', group: 18, period: 4, block: 'p',
    atomicMass: 83.798, density: 3.749, meltingPoint: -157.36, boilingPoint: -153.22, electronegativity: 3.00,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁶', discoveredBy: 'Sir William Ramsay', discoveryYear: 1898,
    description: 'El kriptón es un gas noble incoloro, inodoro e inerte que se usa en lámparas y láseres.',
    uses: ['Lámparas', 'Láseres', 'Indicadores de alto voltaje', 'Criogenia'],
    interestingFacts: ['Brilla de color blanco en tubos de descarga', 'Se usa en lámparas de flash', 'Es completamente inerte', 'Fue usado para definir el metro'],
    color: '#ff7043', state: 'gas', radioactive: false
  }
]
