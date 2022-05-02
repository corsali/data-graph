# data-graph-demo

## Explorer

### Local development

```
npm install && npm start
```

### Form url

To get the values for environmental variables `REACT_APP_FORM_URL` and `REACT_APP_FORM_QUERY_FIELD_ID`, You have to:

1. Create google form
2. Add a question with answer type of `paragraph`
3. Go to three dots in the top-right and click "Get pre-filled link"
4. Type anything in the created field
5. Submit with the "Get link" button and click "COPY LINK" in the toast
6. The pasted link should look like this:

   > https://docs.google.com/forms/d/e/1FAIpQLSflSJE8cn3jEvWgw3IBMRBJST0GUWIGokCnT620A3dc97qETw/viewform?usp=pp_url&entry.214069913=prefilled

7. Given the above link, the variables would be:

   ```
   REACT_APP_FORM_URL = https://docs.google.com/forms/d/e/1FAIpQLSflSJE8cn3jEvWgw3IBMRBJST0GUWIGokCnT620A3dc97qETw/viewform
   REACT_APP_FORM_QUERY_FIELD_ID = 214069913
   ```

### Issues and todos

We've got MaterialUI and Tailwind set up. Might be worth to improve the consistency of usage across the app.

## Server

### Local development

```
npm install && npm start
```

For mock data to be available run `npm run gen:data:clean` and restart the server

### Issues

Webpack aliases are not working with Vercel serverless with the present config.

### Adding services/schema fields

- Go to `server/api/` and create a folder mirroring the structure of other present services.
- Add a `start:<SERVICE_NAME>` script to package json mirroring the existing ones.
- Add the new service to the dictionary and local development ports config in `server/shared/env/index.ts`
- Create the schema for the new service, not forgetting to `extend type User` with the new service.
- Run `npm run gen:gql` to generate the types for the newly created service.
- Open `server/shared/graphql/available-categories.ts` and mirror the available categories dictionary setup for the new service and add it to the exported `availableCategories`.

### Adding mock data
Optional steps are only used for services with no previously available mock data 

- Go to `server/shared/data/generators` and add/update a generator for the service, mirroring the existing ones.
- (optional) Add `Db<SERVICE_NAME>` type definition to `server/shared/data/types.ts`.
- (optional) Go to `server/shared/data/gen-mocks.ts` and add a call to the new generator in the `generateData` function.
- Run `npm run gen:data` (or `npm run gen:data:clean` if you want to replace/modify the existing files - note that any manual changes will be discarded if you do this)
- (optional) Go to `server/shared/data/index.ts` and add the mock data for the new service to a mock database to use in resolvers