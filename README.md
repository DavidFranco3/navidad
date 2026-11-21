# 🎄 Nochebuena | Experiencia Navideña Interactiva

Una aplicación web navideña interactiva, moderna y con estética editorial cuidada, desarrollada con **React**, **Vite**, **Sass / SCSS** y **Tailwind CSS**.

---

## ✨ Características Interactivas

1. **Guirnalda de Luces Edison Vintage:**
   - Bombillas de filamento incandescente con casquillo de latón y cable trenzado oscuro.
   - Cada bombilla puede encenderse o apagarse individualmente emitiendo una campanita sonora afinada (Web Audio API).
   - Selector de modos: *Vela natural* (parpadeo orgánico), *Luz fija* o *Apagadas*.

2. **Nevada Dinámica con Profundidad de Campo (Canvas):**
   - Sistema de partículas a 60 FPS con 3 planos de profundidad (fondo con copos bokeh desenfocados, plano medio nítido y primer plano fluido).
   - Inercia y brisa que reaccionan suavemente a la dirección del ratón o el dedo.
   - Selector de intensidad: *Suave*, *Copiosa*, *Ventisca* o *Sin Nieve*.

3. **Navegación Móvil por Pestañas (Mobile Tabs):**
   - Barra segmentada flotante (*sticky*) en dispositivos móviles para alternar cómodamente entre secciones sin fatiga de scroll vertical:
     - 🎄 **El Árbol**
     - ⏳ **La Espera**
     - ✉️ **La Carta**
     - 🎁 **Augurios**

4. **El Árbol de Invierno (Decorador Interactivo):**
   - Pino con capas de follaje en verde bosque y agujas escarchadas.
   - Adornos vectoriales SVG a medida (esferas de vidrio acanalado rubí, orbe de latón labrado, campana de bronce con badajo y jengibre glaseado) con oscilación natural de péndulo.
   - Gran Estrella polar de 8 puntas conmutable en la cúspide.
   - Opciones de *Arreglo Espontáneo* y *Despejar*.

5. **Correspondencia de Nochebuena (Sobre 3D y Carta):**
   - Sobre de terciopelo borgoña con relieve de sello de cera monogramado con la "N".
   - Tarjeta de papel verjurado con matasellos postal vintage.
   - Personalización en vivo de destinatario, remitente y dedicatoria (con inspiraciones predefinidas).
   - Botón para copiar la felicitación para compartir por WhatsApp o redes.

6. **Estuche de Buenos Augurios:**
   - Caja de regalo con cinta dorada y lazo que se desata al hacer clic con sonido mágico, revelando bendiciones, reflexiones y momentos cálidos de invierno.

7. **Paisaje Sonoro con Web Audio API (Sin dependencias externas):**
   - Armónicos de campanas y carillón sintetizados directamente en el navegador (evita fallos de red o bloqueos CORS).
   - Reproductor de caja de música con la melodía de *Jingle Bells* y control general de sonido.

---

## 🛠️ Tecnologías Empleadas

- **React 18:** Arquitectura de componentes reactivos y gestión de pestañas móviles.
- **Vite:** Entorno ultrarrápido de desarrollo y empaquetado.
- **Sass (Dart Sass):** Estructura modular (`_variables.scss`, `_mixins.scss`, `_garland.scss`, `_envelope.scss`, `_tree.scss`).
- **Tailwind CSS v3:** Diseño responsivo fluido, tipografía y utilidades de layout.
- **Web Audio API:** Síntesis procedural de campanas y caja de música.

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Requisitos
Tener instalado Node.js (v18 o superior).

### 2. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en [http://localhost:5173](http://localhost:5173).

### 3. Compilar para producción
```bash
npm run build
```

### 4. Probar la versión de producción localmente
```bash
npm run preview
```

---

**Autor:** 🐉 David
