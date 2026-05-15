# 🚗 Campus Parking

Es un sitio web sobre la gestion de un parqueo desarrollado con HTML, CSS y JavaScript utilizando LocalStorage como persistencia de datos.

---

#  Descripción

Campus Parking es una aplicación diseñada para facilitar la administración de un parqueo, permitiendo registrar vehículos, gestionar tipos de vehículos, controlar entradas y salidas, calcular costos automáticamente y administrar el perfil del usuario.

El proyecto fue desarrollado con enfoque en:

- UI/UX moderna
- Diseño responsive
- Persistencia local
- Validaciones
- Experiencia visual profesional

---

#  Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Boxicons

---

# 📂 Estructura del Proyecto

```bash
Campus-Parking/
│
├── HTML/
│   ├── index-login.html
│   ├── dashboard.html
│   ├── vehicles.html
│   ├── parking.html
│   └── profile.html
│
├── CSS/
│   ├── style.css
│   ├── dashboard.css
│   ├── vehicles.css
│   ├── parking.css
│   └── profile.css
│
├── JS/
│   ├── login.js
│   ├── dashboard.js
│   ├── vehicles.js
│   ├── parking.js
│   └── profile.js
│
├── assets/
│   └── dashboard-bg.jpg
│
└── README.md
'''
---

# Acceso al Sistema

El sistema crea automáticamente un usuario administrador inicial.

---

# Funcionalidades

- Login y Registro
    - Inicio de sesión
    - Registro de usuarios
    - Persistencia con LocalStorage
    - Validación de credenciales

---

# Dashboard

El dashboard muestra:

- Vehículos activos
- Ingresos generados
- Espacios disponibles
- Vehículos recientes

Toda la información se actualiza automáticamente según los registros realizados en el sistema.

---

# Gestión de Vehículos

Permite:

- Crear tipos de vehículos
- Mostrar vehículos
- Editar vehículos
- Eliminar vehículos
- Datos gestionados
- Código
- Nombre
- Tarifa

---

# Gestión de Parqueo

Permite registrar:

Placa
Tipo de vehículo
Fecha
Hora entrada
Hora salida
Slot asignado

---

# Validaciones Implementadas
- Placa
Formato válido: ABC123

- Slots
No se permiten slots repetidos
El slot debe estar disponible

- Hora
La hora de salida debe ser mayor a la hora de entrada

---

# Cálculo Automático

El sistema calcula automáticamente:
- Tiempo de permanencia
- Costo total del servicio

Basado en la tarifa registrada del tipo de vehículo.

---

# Perfil Usuario

El usuario puede modificar:
- Nombre
- Correo
- Contraseña

Incluye confirmación antes de guardar cambios.

---

# Objetivos del Proyecto
- Automatizar el control del parqueadero
- Mejorar la experiencia del usuario
- Gestionar ingresos
- Controlar espacios disponibles

---

# Autor

Proyecto desarrollado por Pablo López Monzón



