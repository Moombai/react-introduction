## Chapter 13 - Understanding State:

In this section we create a state on our App Component called “fishes” which will be passed down the Components until it reaches the AddFishForm Component where it is then called.

First of we need to set the initial state of our App Component. In order to do this we must add a constructor and within that function call `super()`. This allows us to set a state on the App component and also bind any any new methods to a newly created instance of App.

With our initial state set, and addFish method bound to our App component, we can use this method to update our state. This works by:

* first making a copy of the fish state (in this case we use the spread operator)
* secondly creating a timestamp
* updating the state copy with a timestamp key and the value of the new fish state
* updating the App state with data from the state copy

We then pass down our addFish method to AddFishForm via the props value. It will be called here when we submit the form.

## Chapter 15 - Displaying State with JSX:

In this chapter we create the Fish Componenet in order to render our fishes. Rendering lists of items in JSX is usually achieved using the map function. Interestingly ReactJS likes us to keep a copy of the propery key for each rendered value to make it more efficient for React to update the DOM in future (otherwise React will have to look through all the elements rendered with `map`).

We use the Object keys method to produce a list of all the object keys in the fish state. We then pass all the keys and values down to the Fish component as props. Here the fish component will handle the rendering.

## Chapert 16 - Updating Order State
The objective here is to create an App method that will update the Order state on click. We first create an add to Order method which we add to the App component using the constructor method.

After creating the addToOrder method we pass it down to our Fish component via props. We also need our key value from the fish state which has been passed down via the key property. We find however that the key value is not available in props as it is specially reserved for React to keep track of key values. In order to get the key value that we want, we instead pass it down via a prop called index.

We also update the Fish component to check if the product is out of date before rendering.