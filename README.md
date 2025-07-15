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

// FINDINDEX
const firstIndex = numbers.findIndex((idx) => {
  return idx > 10;
}); // firstIndex = 4
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
