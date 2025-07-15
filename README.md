# UI Component Library

## React Props

Props are like the _predefined_ fixed name attributes for an HTML element such as `input` (except they are specific to the HTML element used and _cannot_ be custom). You can access those in JS and use them via `document.getElementById("id-name").placeholder`. When it comes to React it is similar, but we have an _imported_ component with _custom_ attributes (`props`), for example `<Card name="name" />`. The values of the props get passed along or accessed when we create the _functional_ component with the `props` argument and output the HTML elements within said component as `{props.name}` for example.

The custom object is created in the imported _component_ and the object is sent over via the `props` object to the _functional_ component and can be accessed the same way we access object properties in vanilla JS (`props.name` where props is the object and name is the property `key`).

> [!WARNING]
> You cannot add styles directly to the **imported** component because React will see this as a custom property. Any styling needs to be applied to the JSX inside the component file itself.

So here is how this is done:

1. Create component (`const ContactCard = () => {...}`).
2. Within the created component add arguments to it called `props` (`const ContactCard = (props) => {...}`).
3. Import created component inside `App.js` app component and add to app component (`<ContactCard />`).
4. Within the **imported** component add a property (`<ContactCard name="Beyonce" />`). Now if you were to console log `props` you would see the name property and any others added to the component printed to the console.
5. You can now replace any hard coded elements in `ContactCard.js` (i.e. `<h2>Beyonce</h2>` or `<p>+123 456 7899</p>`) with the call on the property `name` `key` (`<h2>{props.name}</h2>`).

> [!NOTE]
> This all helps reduce the repetitive code in `ContactCard.js` so that it can be re-used for more than one contact card component. You just need to pass in the props into each component.

## Smaller Components

When working with components and props you will have to keep in mind how props are passed. Let's say we want to separate the contact card image into its own separate component to be used in other components.

You will see the app break when we move the image with `src={props.img}` into a new component called `Avatar.jsx`. This is because we need to pickup the custom attributes or props assigned in the _imported_ component in `App.js`.

1. Add `<Avatar />` to `ContactCard.jsx` and import the component.
2. We can access the `img` attribute from `App.js` `<ContactCard />` imported components via the props argument in `ContactCard.js`. Add it in via `img={props.img}`.
3. Now all we need to do is add props as an argument to the `Avatar` _functional_ component and we will be able to access the value via the transferred `src={props.img}`.

> [!TIP]
> Instead of using `const ComponentName = (props) => {...}` the props object as an argument in a functional component you can **destructure** the pass in props directly in the parenthesis and remove the `{props.name}` for `{name}` inside the HTML/React template.

## Mapping Data to Components

Instead of rendering multiple _imported_ `ContactCard` components inside `App.js` template you can map over the properties in the `contacts.js` array of objects.

1. Inside App.js add a helper function (you can also just do this part inside the `map` method) called `createCard`.
2. You need to pass in a `contact` argument (representing each object property as we map over the array) into the `createCard` function.
3. Add the different properties from `contacts.js` (i.e. name, img, etc.) to the _imported_ `ContactCard` component inside the `createCard` function.
4. Now, we will add a dynamic code block to the `contactContainer` element within the `App` component template and add `contacts.map()` to it (this will map over the `contacts` array).
5. As it maps over each object in the `contacts` array we will call the `createCard` helper function to create a `ContactCard` for each iteration.

> [!TIP]
> Make sure you add an `id` to the `contacts.js` array as well as the `ContactCard` inside the `createCard` function.

You will not be able to call on the `key` as a prop in the functional `ContactCard` component because it is a reserved keyword. If you want to render the `key` in your React template then you will need to create a new prop (i.e. called `id={contact.id}`) inside the `ContactCard` of `createCard` function, destructure that (`id`) inside the functional ContactCard component, and add it to the functional `ContactCard` component template.

For example:

```jsx
// file: ./src/App.jsx

// Helper functions.
function createCard(contact) {
  return (
    <ContactCard
      name={contact.name}
      img={contact.imgUrl}
      tel={contact.phone}
      email={contact.email}
      key={contact.id}
      id={contact.id}
    />
  );
}

function App() {
  return (
    <>
      <main>
        <Heading />
        <section className="contactContainer">
          {contacts.map(createCard)}
        </section>
      </main>
      <Footer />
    </>
  );
}

// file: ./src/components/ContactCard.jsx

const ContactCard = ({ name, img, tel, email, id }) => {
  return (
    <article className="contactCard">
      <p>Contact ID: {id}</p>
      {/* OTHER CODE... */}
    </article>
  );
};
```

## Map, Filter, Reduce, and More

- **_Map_**: Creates a new array with the _returned_ output of a callback (cb) function which is called on each element of the array. Map takes the cb as an _argument_ and runs the function on each element of the array, and the new array elements are the _returned_ values of the cb function.
  - The new array can be assigned to a variable.
- **_Filter_**: Also creates a new array however the new array is made up of **only** the elements that _return_ `true` in the filter cb function.
- **_Reduce_**: Accumulates a value by whatever the output of the _return_ is for each element in a array.
- **_Find_**: Find the first element that matches in an array. It loops through all elements in the array and runs a cb for each element. Within the cb it checks for a condition to be met and _returns_ the **first** element that matches said condition.
- **_FindIndex_**: Works similar to `find()`, but instead of finding the first element that matches a condition it finds the **index** of said element.

**_For example_**:

```jsx
// ARRAY
const numbers = [1, 2, 4, 5, 78, 9, 4, 3];

// MAP
const doubleNums = numbers.map((x) => {
  return x * 2;
}); // doubleNums = [2, 4, 8, 10, 156, 18, 8, 6]

// FILTER
const greaterThanTen = numbers.filter((num) => {
  return num > 10;
}); // greaterThanTen = [78]

// REDUCE
const sum = numbers.reduce((total, currentNum) => {
  // console logs to understand.
  console.log("total(accumulator) = " + total);
  console.log("current number = " + currentNum);
  return total + currentNum;
}, 0); // sum = 106

// FIND
const firstNum = numbers.find((num) => {
  return num > 10;
}); // firstNum = 78

// FINDINDEX (With reduced code)
const firstIndex = numbers.findIndex((idx) => idx > 10); // firstIndex = 4
```

### Map, Filter, or Reduce Challenge

Take the `emojipedia` array and create a new array containing only the `meaning` element, but the text _value_ of the `meaning` property needs to be **truncated** to 100 characters.

> [!TIP]
> Use the method `substring()` to complete the challenge (Takes **two** arguments, first is the first index we start at (**including** the index) and second is second index we end at (but **do not** include)).

**_Solution_**:

```jsx
const truncMeaning = emojipedia.map((obj) => {
  return obj.meaning.substring(0, 100);
}); // truncMeaning = New array made up of the meaning property truncated to 100 characters.
```

## ES6 Arrow Functions

> [!NOTE]
> If you only have one parameter in your arrow function you can remove the parameter parenthesis (i.e. `(param) => {...}` becomes `param => {...}`).
> If you are only returning a single line statement or expression in an arrow function you can also remove the curly braces and the **return** keyword (i.e. `param => {return x * x}` becomes `param => x * x`).

**_For example_**:

```jsx
// file: ./src/App.jsx

// OTHER CODE...

// Remove argument parenthesis, return keyword, and curly braces because only one param/arg and only one line of code in return.
{
  emojipedia.map((emoji) => (
    <Emoji
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      definition={emoji.meaning}
    />
  ));
}

// OTHER CODE...
```

## React Component Conditional Rendering

In the project example we will have a variable that is _false_ when user is not logged in and switches to _true_ once authenticated and logged in.

We will render a different component in App.js depending on whether the above value is _true_ or _false_.

**_Method #1_**:

```jsx
// Represent user login or not.
let isLoggedIn = true;

// Function that checks if logged in render h2 or if not logged in render login form.
function renderConditionally() {
  if (isLoggedIn === true) {
    return <h2>Hello User</h2>;
  } else {
    <h2>Please Login</h2>
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>;
  }
}

// Call above function within App component template.
function App() {
  return (
    <div>
      {renderConditionally()}
    </div>
  )
}
```

The **_Method #1_** will work, but it uses a lot of code.

**_To refactor_**:

1. Add `form` to its own component called `Login`.
2. Import `Login` to `App.jsx` and add it to the conditional function under `isLoggedIn === false`.
3. Add input to its own component (`Input.jsx`) and import into `Login.jsx`.
4. Add props for `type` and `placeholder` to the input component that was added to `Login.jsx` template and repeat for the password input.
5. Now delete the input elements from `Input.jsx`, _destructure_ the props from `Login.jsx`, and add the props to a single input element within `Input.jsx` template.
6. We now want to _refactor_ the `renderConditionally()` function to put it inside the `App` component template, but we **cannot** do this with a _statement_ (**ONLY** _expressions_). We can accomplish this by taking the logic from the helper function and adding it inside the template using _ternary_ operators (Ternary operators turn the statement into an expression).

**_For example_**:

```jsx
// file: ./src/components/Input.jsx
const Input = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;

// file: ./src/components/Login.jsx
import Input from "./Input";

const Login = () => {
  return (
    <>
      <h2>Please Login</h2>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

// file: ./src/App.jsx

// OTHER CODE...

let isLoggedIn = false;

function App() {
  return (
    <>
      <main>
        <Heading />
        <section className="login__container">
          {/* {isLoggedIn === true ? <h2>Hello User</h2> : <Login />} */}
          {isLoggedIn ? <h2>Hello User</h2> : <Login />}
        </section>
      </main>
      <Footer />
    </>
  );
}
```

> [!TIP]
> If you want to show nothing at all for the else statement then you would add `null` after the colon.

You can refactor conditional statements even further by using **Logical AND** (`&&`). If the conditional is a simple `if` statement (no else) and because JS does not evaluate the second half of **AND** if the `if` is **false** you can simply write `{if (true) && "code to run if true"}` and if _false_ then the expression will not evaluate the right side and render **nothing**.

> [!TIP]
> You can re-write the ternary using the above method by using two separate statements (one for true and one for false) like this: `{isLoggedIn && <h2>Hello User</h2>}{!isLoggedIn && <Login />}`, but it is not advised to do this if there is an else statement it is handled better using ternary operator.

## Conditional Rendering Challenge

- Create a userIsRegistered variable set to true or false.
- Show login as the button text if variable is true.
- Show register as the button text if variable is false.
- Only show confirm password input if variable is false.
- Don't show confirm password if variable is true.

### Solution

1. First, pass the variable userIsRegistered to the Login form via a prop. Set the prop isRegistered equal to the value of userIsRegistered variable: `<Login isRegistered={userIsRegistered} />` so it will pass true or false to the login form.
2. We can now destructure the prop isRegistered in the Login functional component and inside the button element add a ternary operator to render "Login" or "Register" based on if isRegistered is true or not: `<button type="submit">{isRegistered ? "Login" : "Register"}</button>`.
3. Now we can use logical AND to render the confirm password input if isRegistered is false. By placing the input element within this condition using NOT isRegistered (false) then we do not need to do anything for isRegistered true because it is either on the page via template or not (no else statement): `{!isRegistered && (<Input type="password" placeholder="Confirm Password" />)}`.
