# rest-server con node TS

rest server con mysql, usando ts,

Recuerden que deben ejecutar `npm install` para reconstruir los modulos de node

## Ejecutar nuestro proyecto

debemos lanzar el siguiente comando: `nodemon dist/app` y en otra terminal
`tsc --watch`

### Información importante acerca de este proyecto

Usamos typescript, lo podemos instalar así: `npm i -g typescript`
para usuarios de linux y osx anteponemos la palabra ` sudo `

El proyecto usa las siguientes tecnologías:
`npm i express cors dotenv`

opcional, en caso de que al importar express de error instalamos lo siguiente:
`npm i --save-dev @types/express`

#### Configurando el archivo de typescript

Ejecutamos el siguiente comando `tsc --init`, esto no crea una rchivo
llamado `tsconfig.json`, aqui descomentamos lo siguiente:

`"outDir": "./dist",`,
`"sourceMap": true,`,
`"moduleResolution": "node",`,

una vez hacemos esto: ejecutamos `tsc`, lo cual nos deberia crear la carpeta `dist`

Instalamos el tslint, para poder agregar reglas de desarrollo, aparte de las que nos da typescript
para instalarlo usamos: `npm i tslint --save-dev`, lo instalamos solo como dependencia de desarrollo.

Debemos instalar typescript en nuestro proyecto asi: `npm i typescript --save-dev`

Inicializamos el archivo de tslin asi: `./node_modules/.bin/tslint --init`

en el archivo que nos creo tslint, agregamos las reglas que necesitemos, en este caso agregamos:
dentro de nuestro archivo `tslint`, las regla: `"no-console": false`, debe ir dentro de rules asi:
`"rules": {"no-console": false},`




