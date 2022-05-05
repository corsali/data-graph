import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { Playground, store, editQuery } from "graphql-playground-react";
import { PlaygroundWrapperProps } from "graphql-playground-react/lib/components/PlaygroundWrapper";
import { DeepPartial } from "@shared/types";
import { RequestDataModal, PendingCategoriesModal } from "@shared/components";
import { editorPrettierSettings, defaultQuery } from "@shared/query-editor";
import { Box, Button } from "@mui/material";
import { gqlEndpoint } from "@shared/environment";

const App = () => {
  React.useEffect(() => {
    store.getState();
    store.dispatch(editQuery(defaultQuery));
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      height="100%"
      overflow="hidden"
      bgcolor="background.default"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pl={{ xs: 0, sm: 4 }}
        pr={{ xs: 2, sm: 4 }}
        height={{ xs: 86, sm: 64 }}
        width="100%"
      >
        <img className="max-h-16" alt="Vana Logo" src="logo.png" />
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
      </Box>

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
    </Box>
  );
};

const GQLEditor: React.FC<DeepPartial<PlaygroundWrapperProps>> = (props) => (
  <Playground {...props} />
);

export default App;
