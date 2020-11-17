## My steps to setup the project
1. ng new groceryshop to create angular app
2. ng serve -o
3. remove app.component.html content
4. ng g c inventory
5. ng g c cart

## Send data from Parent to Child
Parent Component <app-cart>
productItems -> array of products to be sent to child

Child Component <app-inventory [receivedProductItems]="productItems">
@Input receivedProductItems: string; -> List of products, static, pass from app-cart

## Send data from Child to Parent
Parent Component <app-cart>
receivedChildMessage -> message received from child
getMessage(message: string) {
    this.receivedChildMessage = message;
  }

Child Component <app-inventory (messageToEmit)="getMessage($event)">
@Output() messageToEmit = new EventEmitter<string>();
<button (click)="sendMessageToParent(messageToSendC)">Send to Parent</button>
sendMessageToParent(message: string) {
    this.messageToEmit.emit(message)
}



# Groceryshop2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
