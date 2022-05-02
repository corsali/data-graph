import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { Playground, store, editQuery } from "graphql-playground-react";
import { PlaygroundWrapperProps } from "graphql-playground-react/lib/components/PlaygroundWrapper";
import { DeepPartial } from "@shared/types";
import { RequestDataModal, PendingCategoriesModal } from "@shared/components";
import { editorPrettierSettings, defaultQuery } from "@shared/query-editor";
import { Box, Button } from "@mui/material";
import { gqlEndpoint } from "@shared/api";

const App = () => {
  React.useEffect(() => {
    store.getState();
    store.dispatch(editQuery(defaultQuery));
  }, []);

  return (
    <div className="flex flex-col items-stretch h-full overflow-hidden">
      <div className="flex width-full align-center justify-between text-slate-800 h-16 mx-4">
        <div>
          <img className="max-h-full" alt="Vana Logo" src="logo.png"></img>
        </div>
        <Box display="flex" alignItems="center" color="primary.dark" gap={3}>
          <PendingCategoriesModal>
            {({ openModal, categoriesAmount }) =>
              categoriesAmount ? (
                <Button
                  variant="outlined"
                  size="small"
                  color="inherit"
                  onClick={openModal}
                >
                  Data coming soon ({categoriesAmount})
                </Button>
              ) : (
                <></>
              )
            }
          </PendingCategoriesModal>
          <RequestDataModal>
            {({ openModal }) => (
              <Button variant="contained" size="small" onClick={openModal}>
                Request Production Data
              </Button>
            )}
          </RequestDataModal>
        </Box>
      </div>

      <Provider store={store as any}>
        <GQLEditor
          endpoint={gqlEndpoint}
          settings={{
            "editor.theme": "light",
            "tracing.tracingSupported": false,
            "tracing.hideTracingResponse": true,
            "schema.polling.interval": 30000,
            "prettier.printWidth": editorPrettierSettings.printWidth,
            "prettier.tabWidth": editorPrettierSettings.tabWidth,
            "prettier.useTabs": editorPrettierSettings.useTabs,
          }}
          fixedEndpoint
        />
      </Provider>
    </div>
  );
};

const GQLEditor: React.FC<DeepPartial<PlaygroundWrapperProps>> = (props) => (
  <Playground {...props} />
);

export default App;
