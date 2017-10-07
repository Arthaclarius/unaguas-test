 <strong>Unaguas / React Native</strong>
==================================
# Descripción
Proyecto desarrollado para <a href="http://www.unaguas.org/">UNAGUAS</a> en React Native con el fin de tener una app que emule la experiencia del navegador en un App móvil ya sea tanto para Android o IOS.

Se utilizo una de las plantillas de <a href="https://expo.io/">Expo</a> para generar el proyecto de React Native con un TabNavigator.

[TOC]

# Guia de Instalacion para TCU
## Git
Descarga e installa [Git](https://git-scm.com/)
**Activar el Git Bash en la Instalación!**
## NPM
* Descargar [Nodejs LTS](https://nodejs.org/es/)
## GitHub
* Crear una cuenta en [GitHub](https://github.com)
* Ir al proyecto de [Unaguas Actual](https://github.com/Arthaclarius/unaguas-test)
* Hacer Fork del proyecto
* Revisar que se "clonó" el proyecto en sus repositorios
## Expo
* Instalar [Expo XDE](https://expo.io/)
## Editor de Texto
### Recomendados (Con Git y Github)
* [VS Code](https://code.visualstudio.com/)
* [Atom](https://atom.io/)
### Otros
* [Sublime Text](https://www.sublimetext.com/)
* [Brackets](http://brackets.io/)
## Local
* Crear una carpeta para proyectos (usar una si ya existe)
* Abrir Git Bash
* Configurar Git
`git config --global user.email “you@email.com”
git config --global user.name “your name”
`
* Clonar el repositorio de **tu cuenta**
```git clone https://github.com/@YourUserName/unaguas-test.git```
* Descargar las librerías con NPM
`npm install`
* Abran el proyecto con el Expo XDE y el Editor de Texto
* Para ver el proyecto en el Teléfono usen Expo y cargalo con la opción Device, este instalara Expo en el teléfono y les permitirá ejecutar la app desde la red local
* Trabajen el Work Directory
* Hagan Commits por cada cambio 
`git add -A
git commit -m "Message"`
* Hagan pull(Obtener cambios)
`git pull`
* Hagan push(Suban Cambios)
`git push origin master`
## Recomendaciones
Usar uno de los editores recomendados, son fáciles de usar, los pluggins les ayudará a encontrar errores y les permitirá manejar los comandos de git con la interfaz.

# El Proyecto
## Conocimientos y Requisitos
* Saber usar React y React Native (Véase tutoriales en Youtube)
## Folders
* assets: Fuentes, iconos, imágenes, estilos
* components: Footer, Header, renderData
* navigation: DrawerNavigator
* screens: UNAGUAS/ las pantallas de unaguas UNAGUAS/ScreenData objetos que se renderizan en renderData
* App.js : Primer JS en ejecutarse
* app.json : Información de la App Mobile
* package.json: Librerías Instaladas

# todo

* Listar las cosas por hacer


