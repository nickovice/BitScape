<p align="center">
  <a target="_blank"><img src="https://i.imgur.com/vDeRbsC.png" width="250" /></a>
</p>
<br>
<p align="center">
<a href="https://bitscape-app.vercel.app" target="_blank">Visit the website &#8599</a>
</p>
<br>

## Docker Usage

Run `docker compose up` and go to http://localhost:4200

## Kubernetes Usage

Deploy all required Kubernetes resources (Pods, Service and HPA) with:

`kubectl apply -f <folder-or-file>`

Expose the frontend service locally using port forwarding:

`kubectl port-forward svc/bitscape-app-svc 4000:80 --address 0.0.0.0`

Access the application at:  
http://localhost:4000


## Development server

Run `ng serve --configuration production` to use production API. 
Run `ng serve --configuration development` for a dev server. 

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --configuration production` to build the project with production API. The build artifacts will be stored in the `dist/` directory.

Run `ng build --configuration development` to use local API.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
