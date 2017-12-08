## Chapter 13 - Understanding State:

In this section we create a state on our App Component called “fishes” which will be passed down the Components until it reaches the AddFishForm Component where it is then called.

First of we need to set the initial state of our App Component. In order to do this we must add a constructor and within that function call `super()`. This allows us to set a state on the App component and also bind any any new methods to a newly created instance of App.

With our initial state set, and addFish method bound to our App component, we can use this method to update our state. This works by:

* first making a copy of the fish state (in this case we use the spread operator)
* secondly creating a timestamp
* updating the state copy with a timestamp key and the value of the new fish state
* updating the App state with data from the state copy

We then pass down our addFish method to AddFishForm via the props value. It will be called here when we submit the form.