# Qué es Git flow y cómo funciona

Como programadores, rara vez trabajamos en solitario en un proyecto de gran envergadura. Lo normal es que nos acompañen otros desarrolladores que colaborarán con nosotros mano a mano. A veces nos encontramos con situaciones como tener que trabajar en funcionalidades nuevas, arreglar bugs críticos, acabar una iteración y tener que juntar todas las funcionalidades que se han desarrollando hasta el momento, o incluso dejar lo que estábamos haciendo para seguir con otra tarea más importante o probar implementaciones.

Estas situaciones descritas anteriormente pueden llegar a ser un calvario si un equipo de desarrollo carece de algún sistema de organización en su repositorio de control de versiones.

Es ahí donde entra en juego la metodología Git flow, que como su nombre indica, es un flujo de trabajo aplicado a un repositorio Git. Vincent Driessen fue el encargado de popularizarlo, definiendo un modelo estricto de ramificación diseñado en torno a los lanzamientos del proyecto. Es ideal para proyectos que lleven una planificación de entregas iterativas. Permite la paralelización del desarrollo mediante ramas independientes para la preparación, mantenimiento y publicación de versiones del proyecto así como soporta la reparación de errores en cualquier momento.

## Ramas principales
Todo proyecto, por defecto, debería tener al menos dos ramas infinitas para su desarrollo. Esta metodología define que deben existir dos ramas principales:
- Master
- Develop

![](https://cleventy.com/wp-content/uploads/2020/03/main-branches.png)

### Rama master
Contiene cada una de las versiones estables del proyecto. Cualquier commit que subamos en esta rama debe estar preparado para que se pueda incluir en producción.

### Rama develop
Contiene el código de desarrollo de la siguiente versión planificada del proyecto. En ella se incluirán cada una de las nuevas características que se desarrollen. Esta rama puede incorporarse tanto en una rama release (que veremos más adelante) como en la rama master, para su despliegue en producción.

## Ramas de apoyo
Junto a las ramas master y develop, existe un conjunto de ramas de apoyo, que como hemos descrito anteriormente, su objetivo es el permitir el desarrollo en paralelo entre los miembros del equipo, la resolución de problemas en producción de forma rápida, etc. A diferencia de las ramas principales, estas están limitadas en tiempo. Serán eliminadas eventualmente. Los diferentes tipos de ramas que se usarán son:
 
- feature
- release
- hotfix

![](https://cleventy.com/wp-content/uploads/2020/03/git-model-1.png)

### Ramas feature
Estas ramas tienen que surgir de la rama develop. Cada una de estas ramas almacenan código de desarrollo con nuevas características. Típicamente existen solamente en los repositorios locales de los desarrolladores y no en el repositorio origen. Una vez terminado su desarrollo, se incorporarán nuevamente a la rama develop, que contendrá la última versión de código en desarrollo.

Convención de nombres: estas ramas se pueden nombrar de cualquier forma, excepto master, develop, release-, o hotfix-.

![](https://cleventy.com/wp-content/uploads/2020/03/feature-branches-250x671.png)

**Crear una rama feature**
```
$ git checkout -b feature/myfetaure develop
  Switched to a new branch "feature/myfetaure"
```

**Finalizar una rama feature**
```
$ git checkout develop
   Switched to branch 'develop'
$ git merge --no-ff feature/myfetaure
   Updating ea1b82a..05e9557
   (Summary of changes)
$ git branch -d feature/myfetaure
   Deleted branch feature/myfetaure (was 05e9557).
$ git push origin develop
```
## Ramas release

Como las ramas feature, las ramas release también tienen que surgir de la rama develop. Contienen el código de la versión que se va a liberar próximamente. Es un paso previo y preparatorio para la versión definitiva de producción. En ella se incluye todo el código de develop necesario para el lanzamiento. Puede que contenga algún error pequeño que se debe de arreglar en este momento para no incluirlo en producción. Una vez finalizada la rama, esta se debe incluir tanto en la rama develop como en la rama master.

Convención de nombres: deben de seguir la siguiente convención: release-*, sustituyendo el * por el número de versión (1.1, 2.3, 4.7, etc)

**Crear rama release**

```
$ git checkout -b release-1.2 develop
   Switched to a new branch "release-1.2"
   (Hacer las modificaciones necesarias)
$ git commit -a -m "Release version 1.2 of the project"
   [release-1.2 74d9424] Release version 1.2 of the project
   1 files changed, 1 insertions(+), 1 deletions(-)
```

**Finalizar una rama release**
Primero debemos actualizar la rama master.

```
$ git checkout master
  Switched to branch 'master'
$ git merge --no-ff release-1.2
  Merge made by recursive.
  (Summary of changes)
$ git tag -a 1.2
```
A continuación, debemos guardar esos cambios en la rama develop.

```
$ git checkout develop
  Switched to branch 'develop'
$ git merge --no-ff release-1.2
  Merge made by recursive.
  (Summary of changes)
```
Una vez integrada la rama tanto en master como en develop eliminaremos la rama en el repositorio local.

```
$ git branch -d release-1.2
  Deleted branch release-1.2 (was ff452fe).
```

## Ramas hotfix
Estas ramas surgen de la rama master. Contienen una versión de producción con un error que se desea arreglar urgentemente. Una vez arreglado el error, se incluye el contenido de esta rama en las ramas master y develop para subsanar el error. Además, hay que marcar la versión arreglada de producción con un tag en la rama master.

Convención de nombres: deben de seguir la siguiente convención: hotfix-*, sustituyendo el * por el número de la revisión (1.1.5, 2.3.1, 4.7.9, etc)

**Crear una rama hotfix**

```
$ git checkout -b hotfix-1.2.1 master
  Switched to a new branch "hotfix-1.2.1"
  (Hacer las modificaciones necesarias)
$ git commit -a -m "Bumped version number to 1.2.1"
  [hotfix-1.2.1 41e61bb] Bumped version number to 1.2.1
  1 files changed, 1 insertions(+), 1 deletions(-)
```
**Finalizar una rama hotfix**
Primero debemos actualizar la rama master y etiquetarla.

```
$ git checkout master
  Switched to branch 'master'
$ git merge --no-ff hotfix-1.2.1
  Merge made by recursive.
  (Summary of changes)
$ git tag -a 1.2.1
```
A continuación debemos incluir el hotfix en develop también.

```
$ git checkout develop
  Switched to branch 'develop'
$ git merge --no-ff hotfix-1.2.1
  Merge made by recursive.
  (Summary of changes)
```
Una vez integrada la rama tanto en master como en develop eliminaremos la rama en el repositorio local.
```
$ git branch -d hotfix-1.2.1
  Deleted branch hotfix-1.2.1 (was abbe5d6).
```

![](https://cleventy.com/wp-content/uploads/2020/03/hotfix-branches.png)

## Herramienta git-flow
No es necesario ejecutar manualmente cada uno de los comandos expuestos anteriormente para administrar las ramas. Los hemos incluido para tener una base de conocimiento. Tenemos a nuestra disposición una herramienta de línea de comandos que nos ayudará en este proceso, ya que se encarga de realizar todos los pasos intermedios necesarios para gestionar las ramas. Os dejamos la documentación online del autor de Git flow donde explica cómo instalar la herramienta para los distintos sistemas operativos.

### Cómo utilizar la herrmienta
#### Inicialización de metodología git flow en el repositorio
Para comenzar a utilizar la metodología Git flow, debemos iniciarla dentro de un repositorio git existente. Para ello ejecutaremos el comando:
```
$ git flow init
```
Con ello nos iniciará un proceso guiado con preguntas relacionadas con las convenciones de nombres para las ramas. Para utilizar la convención que hemos descrito arriba, debemos dejar los valores por defecto, sin introducir nada.

#### Gestionar features
Crear una nueva feature (en el ejemplo my-feature):

```
$ git flow feature start feature/my-feature
```
Finalizar la rama feature:

```
$ git flow feature finish feature/my-feature
```
Publicar la rama feature en el repositorio remoto:

```
$ git flow feature publish feature/my-feature
```
Obtener una rama feature del repositorio remoto:

```
$ git flow feature pull origin feature/my-feature
```
Seguir de los cambios de la feature:

```
$ git flow feature track feature/my-feature
```

#### Gestionar releases
Comenzar una release (en el ejemplo release-1.2):

```
$ git flow release start release-1.2
```
Concluir una release:

```
$ git flow release finish release-1.2
```
Publicar la release en el repositorio remoto:
```
$ git flow release publish release-1.2
```
Debemos, también, publicar los tags en el repositorio remoto:

```
$ git push --tags
```
Seguir los cambios de la release:

```
$ git flow release track release-1.2
```

#### Gestionar hotfixes
Crear un hotfix (en este ejemplo hotfix-1.2.1):

```
$ git flow hotfix start hotfix-1.2.1
```
Concluir un hotfix:

```
$ git flow hotfix finish hotfix-1.2.1
```