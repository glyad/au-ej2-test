import { observable } from 'aurelia-framework'; 
import * as hljs from 'highlight.js';

export class App {
  public message: string = 'Hello World!';
//   public html: string = `<h1>Hello Viewer!</h1><ej-button primary="true" content="message"></ej-button>`;

//   public code: string = hljs.highlight('handlebars', 
// '<div class="entry"> \n \
//   {{!-- only show if author exists --}} \n \
//   {{#if author}} \n \
//     <h1>{{firstName}} {{lastName}}</h1> \n \
//   {{/if}} \n \
// </div> \n').value ;


  @observable() 
  public jsRaw: string;

  public html: string;
  public context: any;


  constructor() {
    this.jsRaw = initialJs;
    this.html = initialHTML;
  }

  public jsRawChanged(newValue: string, oldValue: string): void {
    const functionBody = `return ${newValue}`;
    // tslint:disable-next-line:no-function-constructor-with-string-args
    const ctorFactory = new Function(functionBody);
    const ctor = ctorFactory();
    this.context = new ctor();
  }

}

// tslint:disable:no-multiline-string
const initialJs = `class Foo {
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
  }
  submit() {
    alert('You submitted "' + this.firstName + ' ' + this.lastName + '"');
  }
}`;

const initialHTML = `<form class="ui form" submit.delegate="submit()">
  <div class="field">
    <label>First Name</label>
    <input type="text" value.bind="firstName" placeholder="First Name">
  </div>
  <div class="field">
    <label>Last Name</label>
    <input type="text" value.bind="lastName" placeholder="Last Name">
  </div>
  <div class="ui message">
    <div class="header">Your name is:</div>
    <p>\${firstName} \${lastName}</p>
  </div>
  <button class="ui button" type="submit">Submit</button>
</form>`;
