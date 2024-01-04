##REDUX
# Redux is a state management library for javascript applications.
# In other words, redux is used to manage the data or state of complex javascript applications
## Pros of Redux
1  Centralize application's state
2  Data-Flow transparent
3  Easily Debug applications
4  Preserve the page state

## WebPack

#---> webpack is the bundler for bundle our javascript code in one file and then link with our browser.
#--> In simple words, we can write our javascript code in multiple files with using webpack.


## Function Programming
1 Function Basics
   Functional programming is one of the type of programming paradigms, Programming Paradigms
    Programming paradigms are the methiods or we can say a set of rules to structure our code and to solve problem.
     Types of Programming Paradigms:-
        Procedural Programming
        Logical Programming
        Functional Programming
        Object Oriented Programming

   Higher Order Functions :- A higher-order function is a function which takes function as a parameter or which returns the function or both.

   Compose and Pipe :- These are the method found in loadash library. They are used to manage the multiple function hierrachy.
   Currying:- Currying is the technique that allow us to take multiple arguments of function and convert it into a function that has a single argument.

   Pure Function:- Pure function is a function which always give same output if we give it the same input.
      No current date/time
      No random values
      No global state
      No database calls
   
   Immutability:- Once we created variable or string or object or array, it cannot be changed.If you want to change that, we have to make copy first of that variable or string or object or array an then we can update that copy.
   
   2 ways to update immutable objects.
     1. Object.assign method. 
     2. Using spread operator.  
        const employee = {name:"Harley",age:22,country:{city:"toronto",pincode:456778}}
        const newEmp = {
         ...employee,
         name:"Martin"
        }
        Immer Library to solve the immutability.(produce method)
        const newEmp = produce(employee,(draftState)=>{
         draftState.name='Martin",
         draftState.country.city = "Calgary"


        })


# Redux WorkFlow

Full WorkFlow
create redux store 
Define Actions
Define Reducers
Dispatch Actions
Sub-Unsubscribe
Folder Structure
Duck Pattern

### Steps to implementing redux
 1 Designing the store
 2 List our actions(What to do)
 3 Create reducer Function(What to do)
 4 Create redux store


##Redux Thunk
In programming term, thunk is "a piece of code that does somne delay work"
Rather than run the logic now, we can write code that can be used to perform the work later.
Using Redux-Thunk middleware, we can write asynchronous/complex logic in Redux.