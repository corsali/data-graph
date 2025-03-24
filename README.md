# data-graph-demo

## Manual graph management

Example of the changes necessary to add a new service with simple data field declaration and mock data, can be found here:
https://github.com/corsali/data-graph-demo/pull/2

### Adding services

- Create properly named service folder inside `server/api`.
- Create properly named service folder inside `server/domain`.
- Copy `index.ts` from `templates/api` into `server/api/<SERVICE_NAME>` and follow the instructions inside the file.
- Copy all files from `templates/domain` into `server/domain/<SERVICE_NAME>` and follow the instructions inside them.
- Add `<SERVICE_NAME>` to the `categories` object inside `explorer/src/shared/categories/categories.ts`.
- Open `server/shared/graphql/available-categories.ts` and add `<SERVICE_NAME>` array, looking like the following:

  ```
  const serviceName = ["example"];

  export const availableCategories = {
  serviceName,
  facebook,
  ...
  };
  ```

### Adding schema fields

- If the desired field is not on the list for given service inside `explorer/src/shared/categories/categories.ts`, add it there.
- Add the desired field in `server/domain/<SERVICE_NAME>/shema.graphql`.
- Add `<DESIRED_FIELD>: true` to the `<SERVICE_NAME>Keys` object in the `server/shared/graphql/available-categories.ts` file

### Adding mock data

- Add the desired data in `server/domain/<SERVICE_NAME>/data.ts` under the proper field.

### Updating the google form url

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

---

## Developer graph management (ignore if you just want to add something manually)

This section complements the previous one to keep the codebase clean and scalable. This is the preferred way of adding anything to the schema and should be followed if possible. All steps mentioned here can also be done retroactively.

### Adding services

In addition to the steps described above, proper Typescript types should be provided and the service should be able to be run locally.

- Run `npm run gen:gql` to generate the graphql types for the newly created service.
- In `server/domain/<SERVICE_NAME>/types.ts`, update the `any` with a previously generated graphql service type.
- In `server/domain/<SERVICE_NAME>/resolvers.ts` You should be able to simply remove all of the castings to `any`.
- In `package.json` add a following script, replacing all `<SERVICE_NAME>`s with proper name:

  ```
   "start:<SERVICE_NAME>": "nodemon --ext ts,graphql --watch shared --watch api/<SERVICE_NAME> --watch domain/<SERVICE_NAME> --exec 'npm run node -- api/<SERVICE_NAME>/index.ts'",

  ```

### Adding schema fields

Note: the base list of categories is automatically generated from the folder names of the data exported from the services. Some fields will be naturally missing, as the structure of the exported data varies between the services. The script is in `explorer/scripts/gen-categories.js` and it generates data based on the `data` folder on the root level (git ignored, no actual data is commited to the repo).

The only upgrade from manual schema fields addition is in the `server/shared/graphql/available-categories.ts`, as the fields can be safeguarded by typescript types (replace `any`s with proper types). For the generated types see the first step of "Adding services" section above.

### Adding mock data

There is a dedicated script for data generation in `server/scripts/gen-mocks.ts` which can be run with `npm run gen:data` (or `npm run gen:data:clean` if you want to replace/modify the existing files - note that any manual changes will be discarded if you do this).
It is updated at the moment of writing, but to be usable, it will have to be brought back up to date with the data created manually.
Usage steps:

- Go to `server/api/<SERVICE_NAME>/data-generator.ts` and add/update a generator for the service, mirroring the existing ones.
- Go to `server/scripts/gen-mocks.ts` and add a call to the new generator in the `generateData` function.

---

## Explorer Development

### Local development

```
cd explorer
npm install && npm start
```

```
cd server
npm install && npm start
```

### Issues and todos

We've got MaterialUI and Tailwind set up. Might be worth to improve the consistency of usage across the app.

## Server Development

### Local development

```
npm install && npm start
```

### Issues

Webpack aliases are not working with Vercel serverless with the present config.
