# Elementum - Tabla Periódica Interactiva

Una aplicación web moderna para aprender la tabla periódica de forma interactiva y divertida, construida con Vue 3, Vite, TypeScript y TailwindCSS.

## 🚀 Características

- **Tabla Periódica Interactiva**: Explora todos los elementos químicos con información detallada
- **Búsqueda y Filtros**: Encuentra elementos por nombre, símbolo o categoría
- **Tips de Aprendizaje**: Estrategias efectivas para memorizar y entender la tabla periódica
- **Datos Curiosos**: Hechos fascinantes sobre elementos químicos y la historia de la tabla periódica
- **Diseño Responsivo**: Interfaz moderna y adaptada a todos los dispositivos
- **Navegación Intuitiva**: Fácil navegación entre elementos y secciones

## 🛠️ Tecnologías Utilizadas

- **Vue 3** - Framework de JavaScript progresivo
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **TailwindCSS** - Framework CSS utilitario
- **Vue Router** - Enrutamiento para aplicaciones SPA
- **Pinia** - Gestión de estado para Vue
- **ESLint** - Linter para mantener la calidad del código

## 📦 Instalación

1. **Clona el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd elementum
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**:
   La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta el linter para verificar la calidad del código

## 📁 Estructura del Proyecto

```
elementum/
├── src/
│   ├── components/          # Componentes reutilizables
│   ├── views/              # Páginas de la aplicación
│   ├── stores/             # Stores de Pinia
│   ├── types/              # Definiciones de tipos TypeScript
│   ├── data/               # Datos de los elementos químicos
│   ├── router/             # Configuración del router
│   ├── style.css           # Estilos globales
│   ├── main.ts             # Punto de entrada
│   └── App.vue             # Componente raíz
├── public/                 # Archivos estáticos
├── index.html              # HTML principal
├── package.json            # Dependencias y scripts
├── vite.config.ts          # Configuración de Vite
├── tailwind.config.js      # Configuración de TailwindCSS
└── tsconfig.json           # Configuración de TypeScript
```

## 🎨 Características de la Interfaz

- **Diseño Moderno**: Interfaz limpia y atractiva con gradientes y sombras
- **Colores por Categoría**: Cada categoría de elementos tiene su propio color distintivo
- **Animaciones Suaves**: Transiciones y efectos hover para mejor experiencia de usuario
- **Responsive Design**: Adaptado para móviles, tablets y escritorio
- **Accesibilidad**: Navegación por teclado y etiquetas semánticas

## 📚 Funcionalidades Principales

### Tabla Periódica
- Visualización interactiva de todos los elementos
- Información detallada de cada elemento (propiedades físicas, usos, datos curiosos)
- Filtros por categoría y búsqueda por texto
- Modal detallado con información completa

### Tips de Aprendizaje
- Estrategias de memorización
- Técnicas de comprensión
- Ejercicios prácticos
- Consejos visuales

### Datos Curiosos
- Hechos históricos sobre elementos
- Descubrimientos científicos
- Anecdotas interesantes
- Timeline histórico de la tabla periódica

## 🔧 Configuración de Desarrollo

### Requisitos
- Node.js 16+ 
- npm 8+

### Variables de Entorno
No se requieren variables de entorno para el desarrollo local.

### Linting
El proyecto utiliza ESLint con configuraciones específicas para Vue 3 y TypeScript.

## 📱 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (versiones modernas)
- **Dispositivos**: Móviles, tablets, escritorio
- **Resoluciones**: Desde 320px hasta 4K

## 🤝 Contribución

### Editar Datos Interesantes

¡Ayúdanos a mejorar los datos interesantes de los elementos! Puedes editar los datos que aparecen en el modal cuando los usuarios hagan clic en cualquier elemento.

**Cómo contribuir:**
1. Abre `src/data/elements.ts` para datos básicos
2. Abre `src/data/completeElements.ts` para datos detallados
3. Edita el array `interestingFacts` del elemento que quieras mejorar
4. Prueba haciendo clic en el elemento en la tabla periódica
5. ¡Listo! Los cambios aparecerán en el modal

**Formato:**
```typescript
interestingFacts: [
  "Dato interesante 1",
  "Dato interesante 2",
  "Dato interesante 3"
]
```

**Documentación detallada:**
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Guía completa para editar datos interesantes

### Contribución General

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Dimitri Mendeleev** por crear la tabla periódica
- **Vue.js** por el excelente framework
- **TailwindCSS** por las herramientas de diseño
- **Comunidad científica** por la información sobre elementos químicos

---

¡Disfruta aprendiendo la tabla periódica con Elementum! 🧪⚛️
