# Clean frontend architecture and CQRS

This template describes an example of a clean architecture approach in frontend applications.
This template uses a case of user registration and authorization.

## Technology stack
- Typescript
- CQRS
- IoC
- Composition API
- Vite
- Vue 3
- Class validator
- Vuetify 3

## For what?
- Unified approach to the description of the application.
- UI framework independence.
- Client API independence.
- Independence from any repositories (for example vuex, redux).
- A simple approach to testing - pure Typescript functions.

## Potential but:
- Overengineering.
- The entry threshold.

It is not always necessary to complicate the application by adopting this approach.
It is assumed that the project has many business entities that need to be selected.
Some rules can and should be exercised, for example, to read data, you do not need to create a Usecase for reading,
You can just call the Query and Application layer.

## File structure

![](https://github.com/nefayran/FrontendCleanArchitecture/blob/master/readme/picture-1.png)

## Layers and distribution of responsibilities
- Domain - basic business entities and rules
- Application - data routing
- Usescases - Implementations, easy to understand actions
- Infrastructure - API, repositories

## Interactions

Each layer must have interfaces for input and output data.
The action should be based on business entities and rules.

![](https://github.com/nefayran/FrontendCleanArchitecture/blob/master/readme/picture-2.png)

## License

MIT

All questions: nefayran@gmail.com