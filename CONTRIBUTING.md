# Guía para Editar Datos Interesantes

¡Ayúdanos a mejorar los datos interesantes de los elementos químicos! Puedes editar los datos que aparecen en el modal cuando los usuarios hagan clic en cualquier elemento.

## 📝 Cómo Editar Datos Interesantes

### 1. Encuentra los Archivos de Datos

Los datos de los elementos están en dos archivos principales:

- **`src/data/elements.ts`** - Datos básicos de todos los elementos
- **`src/data/completeElements.ts`** - Datos detallados de algunos elementos

### 2. Estructura de los Datos

Cada elemento tiene un array `interestingFacts` que contiene los datos interesantes:

```typescript
{
  atomicNumber: 1,
  symbol: "H",
  name: "Hidrógeno",
  // ... otras propiedades
  interestingFacts: [
    "El hidrógeno es el elemento más abundante del universo",
    "Es el combustible principal de las estrellas",
    "Fue el primer elemento que se formó después del Big Bang"
  ]
}
```

### 3. Cómo Editar

1. **Abre** el archivo correspondiente (`elements.ts` o `completeElements.ts`)
2. **Encuentra** el elemento que quieres editar (por número atómico o símbolo)
3. **Edita** el array `interestingFacts`
4. **Guarda** el archivo
5. **Prueba** haciendo clic en el elemento en la tabla periódica

### 4. Formato de los Datos Interesantes

Cada dato interesante debe ser:
- **Claro y conciso** (1-2 oraciones)
- **Educativo** y preciso
- **Interesante** para estudiantes
- **Escrito en español**

### 5. Ejemplo de Edición

**Antes:**
```typescript
interestingFacts: [
  "El hidrógeno es el elemento más abundante del universo"
]
```

**Después:**
```typescript
interestingFacts: [
  "El hidrógeno es el elemento más abundante del universo",
  "Constituye aproximadamente el 75% de la masa elemental del universo",
  "Es el combustible principal de las estrellas como el Sol"
]
```

### 6. Pautas Importantes

#### ✅ Hacer
- Usar fuentes confiables para verificar información
- Escribir de manera clara y educativa
- Mantener un tono apropiado para estudiantes
- Verificar la precisión de los datos

#### ❌ No Hacer
- Copiar información sin verificar
- Usar datos obsoletos o incorrectos
- Escribir de manera demasiado técnica
- Agregar demasiados datos (máximo 3-4 por elemento)

### 7. Recursos para Investigar

- [Royal Society of Chemistry](https://www.rsc.org/periodic-table)
- [Los Alamos National Laboratory](https://periodic.lanl.gov/)
- [WebElements](https://www.webelements.com/)
- [Wikipedia](https://en.wikipedia.org/wiki/Periodic_table)

## 🚀 Proceso de Contribución

1. **Fork** el repositorio
2. **Crea una rama** para tu contribución
3. **Edita los datos interesantes** siguiendo esta guía
4. **Prueba** que aparezcan correctamente en el modal
5. **Commit** tus cambios
6. **Push** a tu rama
7. **Abre un Pull Request**

---

**¡Gracias por hacer la tabla periódica más educativa e interesante! 🧪⚛️**
