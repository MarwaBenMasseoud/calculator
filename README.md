# Calculator

This project allows the users to find a combination of cards allowing him to reach the desired value.

## Development server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`.
*The app will reload and you will be automatically redirected to this URL `http://localhost:4200/amount/5`.*

## Interceptors

Every time we make a request, we attempt to intercept all HTTP requests. If an outgoing request is captured, then we assign it the provided token : `tokenTest123`. 

## First Step

I create the parent component `CalculatorAmountComponent` which contains the combination of cards allowing it to reach the desired value.

`{path: 'amount/:id', component: CalculatorAmountComponent},` : 

In `app.module.ts`  I added this route that points directly to this component, like that the user can introduce the shop ID he wants.

## Second Step

I create the parent component `DesiredAmountComponent` which contains a reactive form. 

In this form, the user types a value between 20 and 70 and clicks on the validate button:

*If this value gives an "equal" response, I only display the cards as output `(sendCards)="displayCards($event)"` .*

*If this value gives a "floor" and "ceil" response, I display the "Montant précédent" and "Montant suivant" buttons and i display an indicative message `Ce choix n'est pas possible, veuillez choisir le montant suivant ou précédent.` .
as soon as he makes his choice ( I send the cards as output with `(sendCardsNotEqual)="displayCardsNotEqual($event)"` to the parent component ), the amount appears in the input and he waits for the user to click on validate button (step 1)*

*If this value is less than 20 or greater than 70, as soon as the user clicks the validate button, the next or previous value will be displayed automatically in the input*

