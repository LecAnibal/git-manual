# Git Commits

## Como escribir mensajes de commits

Adapatado de [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/) .
### Porque importa

Si exploras algún repositorio de Git al azar, probablemente encuentres que los mensajes de commit son un desastre. Por ejemplo, mira esto mensajes del proyecto de Spring a sus inicios:

```
git log --oneline -5 --author cbeams --before "Fri Mar 26 2009"

e5f4b49 Re-adding ConfigurationPostProcessorTests after its brief removal in r814. @Ignore-ing the testCglibClassesAreLoadedJustInTimeForEnhancement() method as it turns out this was one of the culprits in the recent build breakage. The classloader hacking causes subtle downstream effects, breaking unrelated tests. The test method is still useful, but should only be run on a manual basis to ensure CGLIB is not prematurely classloaded, and should not be run as part of the automated build.
2db0f12 fixed two build-breaking issues: + reverted ClassMetadataReadingVisitor to revision 794 + eliminated ConfigurationPostProcessorTests until further investigation determines why it causes downstream tests to fail (such as the seemingly unrelated ClassPathXmlApplicationContextTests)
147709f Tweaks to package-info.java files
22b25e0 Consolidated Util and MutableAnnotationUtils classes into existing AsmUtils
7f96f57 polishing
```
Ahora, mira estos mensajes de commit más recientes:

```
$ git log --oneline -5 --author pwebb --before "Sat Aug 30 2014"

5ba3db6 Fix failing CompositePropertySourceTests
84564a0 Rework @PropertySource early parsing logic
e142fd1 Add tests for ImportSelector meta-data
887815f Update docbook dependency and generate epub
ac8326d Polish mockito usage
```
¿Cual prefieres leer?

Lo que cambia es la estructura, el ultimo es mas conciso y consistente.
El primero es lo que pasa por defecto, el segundo nunca pasa por accidente.

Mientras que muchos logs de  repositorios, se parecen al primero, hay algunos otros que no. Por ejemplo, [*Linux Kernel*](https://github.com/torvalds/linux/commits/master) y [*Git*](https://github.com/git/git/commits/master). Mira los logs de [Spring Boot](https://github.com/spring-projects/spring-boot/commits/master), o cualquier repositorio administrado por [Tim Pope](https://github.com/tpope/vim-pathogen/commits/master).

Los colaboradores de estos repositorios saben que un mensaje de commit bien elaborado es la mejor forma de comunicar el contexto del cambio a sus compañeros (incluyendo a ellos mismos en el futuro). Un `diff` nos va decir que cambio, pero un mensaje de commit nos dirá el porqué.

Si no habias pensado en los mensajes de commit, entonces puede ser el caso que no estes utilizado `git log` o herramientas similares. Esto es un ciclo vicioso, porque en una historia de commits sin estructura e inconsistente, uno tiende a no ponerle atención. Y por qué no es usada, esta se mantiene sin estructura e inconsistente.


## Convención

 * **Estilo** - Sintaxis, márgenes, gramática, capitalización, puntuación
 * **Contenido** - ¿Que información va en el cuerpo del mensaje ?, ¿Que no debe de contener?
 * **Metadata** - ¿Como se deben de referenciar tracking ID's, pull request, etc ?

 # 7 Reglas de como escribir un mensaje de commits
 1. Separa el encabezado del cuerpo, con una línea en blanco
 1. Limita el encabezado a 50 caracteres
 1. Capitaliza el encabezado
 1. No termines el encabezado con un punto
 1. Usa modo imperativo en el encabezado
 1. El cuerpo del mensaje cada línea no mayor a 72 caracteres
 1. Usa el cuerpo para explicar **qué** y **por qué** en vez de **como** (el código lo explica).*

 ## Ejemplo

 ```
 Resumir los encabezados en alrededor de 50 caracteres o menos.

 Texto explicativo más detallado, si es necesario. El cuerpo del mensaje cada línea menor a 72 caracteres o menos.
 La línea en blanco que separa el encabezado del cuerpo es crítica (a menos que omitas el cuerpo por completo).

 Explica el problema que este commit está resolviendo. Concéntrate en por qué están haciendo este cambio en vez de como (el código lo explica).
 ¿Hay efectos secundarios u otras consecuencias poco intuitivas de este cambio? Expliquelas aquí.

 Otros párrafos vienen después de líneas en blanco.

  - Usar viñetas están bien

  Ponga referencias a ellos en la parte inferior, como estos:

 Resuelve: #123
 Ver también: #456, #789
 ```

## Imperativo

El modo imperativo es uno de los modos verbales utilizados para expresar órdenes, mandatos, o deseos.

Sentencias en modo imperativo:

* Limpia tu cuarto
* Cierra la puerta
* Saca la basura

*Un buen encabezado siempre debe de poder a completar la siguiente frase:*

 Si se aplica, este commit, va a __Tu encabezado aqui en modo imperativo__

Ejemplos:

* Si se aplica, este commit va a __Actualizar la documentación__
* Si se aplica, este commit va a __Eliminar los métodos obsoletos__
* Si se aplica, este commit va a __Lanzar la versión 1.0.0__
* Si se aplica, este commit va a __Fusionar la solicitud de extracción__
* Si se aplica, este commit va a __Actualizar depencias de Spring__
* Si se aplica, este commit va a __Añadir pruebas unitarias al metodo de pago__

Nota como no funciona como con otros modos verbales(malos ejemplos):
* Si se aplica, este commit va a __Se suben cambios para el oficio de prevencion__
* Si se aplica, este commit va a __Se valida en año fabricacion__
* Si se aplica, este commit va a __Se modifica el insert que ocupa la funcion guardar__
* Si se aplica, este commit va a __Se agregan cambios al agregadoJS__
