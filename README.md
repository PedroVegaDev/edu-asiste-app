# Edu Asiste App

Edu Asiste App es una aplicación desarrollada con [Next.js](https://nextjs.org) que permite gestionar la asistencia de empleados y usuarios mediante escaneo de códigos QR. La aplicación incluye funcionalidades específicas para administradores y usuarios, con roles diferenciados y acceso a distintas secciones según el tipo de usuario.

## Características

- **Inicio de sesión**: Los usuarios pueden iniciar sesión utilizando su DNI y contraseña.
- **Roles de usuario**: 
  - **Administrador**: Acceso a la sección de escaneo de QR para gestionar la asistencia.
  - **Usuario**: Acceso a la sección de asistencia mediante QR.
- **Escaneo de códigos QR**: Funcionalidad para registrar la asistencia de empleados y usuarios.
- **Gestión de empleados y horarios**: Los administradores pueden visualizar y gestionar listas de empleados y horarios.
- **Validación de datos**: Validación de campos como DNI (solo números y longitud de 8 caracteres) y contraseñas (mínimo 6 caracteres).
- **Autenticación**: Integración con NextAuth para gestionar sesiones y roles de usuario.

## Tecnologías utilizadas

- **Frontend**: [Next.js](https://nextjs.org) con la nueva estructura de carpetas `app`.
- **Estilos**: Uso de Hero UI para componentes estilizados y funcionales.
- **Base de datos**: Gestión de datos con Drizzle ORM.
- **Autenticación**: Implementación de NextAuth para la gestión de sesiones y roles.
- **Despliegue**: Optimizado para ser desplegado en [Vercel](https://vercel.com).

## Instalación y configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-repositorio/edu-asiste-app.git
   ```

2. Instala las dependencias utilizando `pnpm`:
   ```bash
   pnpm install
   ```

3. Configura las variables de entorno:
   - Asegúrate de que las variables necesarias estén en el archivo `.env` en la raíz del proyecto.

4. Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

- **`app/`**: Contiene las páginas y componentes principales de la aplicación.
- **`app/api/`**: Rutas API para manejar solicitudes como inicio de sesión y validación de datos.
- **`lib/`**: Librerías y configuraciones como NextAuth y Drizzle ORM.
- **`components/`**: Componentes reutilizables como formularios y menús.

## Despliegue

La aplicación puede ser desplegada fácilmente en [Vercel](https://vercel.com). Sigue estos pasos:

1. Conecta tu repositorio a Vercel.
2. Configura las variables de entorno en el panel de Vercel.
3. Realiza el despliegue y accede a tu aplicación en la URL proporcionada por Vercel.

## Contribución

Las contribuciones son bienvenidas. Si deseas mejorar la aplicación, abre un `Pull Request` en el repositorio.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
