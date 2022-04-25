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

## Server

### Local development

```
npm install && npm start
```