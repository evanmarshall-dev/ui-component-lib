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
