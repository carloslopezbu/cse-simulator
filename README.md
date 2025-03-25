# Simulador CSE

El Simulador CSE es una aplicación web diseñada para simular componentes de circuitos y sus interacciones. Los usuarios pueden colocar componentes en un mapa, configurar sus propiedades y visualizar su comportamiento.

## Características

- Mapa interactivo para colocar componentes de circuitos.
- Propiedades configurables de los componentes (por ejemplo, resistencia, voltaje).
- Actualizaciones en tiempo real de los valores de los componentes.

## Tecnologías Utilizadas

- **Frontend**: React.js
- **Estilos**: Tailwind CSS
- **Herramienta de Construcción**: Vite

## Instrucciones de Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/cse-simulator.git
   cd cse-simulator
   ```

2. Navega al directorio del frontend:
   ```bash
   cd frontend
   ```

3. Instala las dependencias:
   ```bash
   pnpm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   pnpm run dev
   ```

5. Abre tu navegador y navega a `http://localhost:5173`.

## Estructura del Proyecto

```
cse-simulator/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Simulator.jsx
│   │   │   ├── Select.jsx
│   │   │   └── Map.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## Uso

1. Selecciona un tipo de componente usando el menú `Select`.
2. Haz clic en el mapa para colocar el componente seleccionado.
3. Ajusta los valores de los componentes directamente en el mapa.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.