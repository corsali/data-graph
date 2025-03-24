import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { Playground, store, editQuery } from "graphql-playground-react";
import { PlaygroundWrapperProps } from "graphql-playground-react/lib/components/PlaygroundWrapper";
import { DeepPartial } from "@shared/types";
import { RequestDataModal, PendingCategoriesModal } from "@shared/components";
import {
  editorPrettierSettings,
  defaultQuery,
  useResponsiveEditor,
} from "@shared/query-editor";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { gqlEndpoint } from "@shared/environment";
import { useIsMobile } from "@shared/theme";

const App = () => {
  useResponsiveEditor();
  const theme = useTheme();
  React.useEffect(() => {
    store.getState();
    store.dispatch(editQuery(defaultQuery));
  }, []);
  const isMobile = useIsMobile();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      height="100vh"
      overflow="hidden"
      bgcolor="background.default"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pl={{ xs: 2, sm: 4 }}
        pr={{ xs: 2, sm: 4 }}
        height={64}
        width="100%"
      >
        {/* Logo with proper spacing using theme spacing units */}
        <Box 
          py={theme.spacing(1.5)} 
          px={theme.spacing(2)}
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            borderRadius: 1
          }}
        >
          <img className="max-h-10" alt="Vana Data Graph" src="logo.png" />
        </Box>
        <Box display="flex" alignItems="center" gap={3}>
          <Button
            size="small"
            component="a"
            href="https://docs.vana.org/docs/data-access-quickstart-guide#/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'text.primary',
              '&:hover': {
                color: 'primary.main',
                backgroundColor: 'background.default'
              }
            }}
          >
            <Typography
              variant="button"
              fontSize={isMobile ? "0.6rem" : "0.8125rem"}
            >
              DOCS
            </Typography>
          </Button>
          {false &&
            <PendingCategoriesModal>
              {({ openModal, categoriesAmount }) =>
                categoriesAmount ? (
                  <Button
                    size="small"
                    color="inherit"
                    onClick={openModal}
                  >
                    <Typography
                      variant="button"
                      fontSize={isMobile ? "0.6rem" : "0.8125rem"}
                    >
                      Data coming soon ({categoriesAmount})
                    </Typography>
                  </Button>
                ) : (
                  <></>
                )
              }
            </PendingCategoriesModal>
          }
          <RequestDataModal>
            {({ openModal }) => (
              <Button 
                variant="contained" 
                size="small" 
                onClick={openModal}
                sx={{
                  backgroundColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                  textTransform: 'uppercase'
                }}
              >
                <Typography
                  variant="button"
                  fontSize={isMobile ? "0.6rem" : "0.8125rem"}
                >
                  REQUEST DATA
                </Typography>
              </Button>
            )}
          </RequestDataModal>
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
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
    </Box>
  );
};

const GQLEditor: React.FC<DeepPartial<PlaygroundWrapperProps>> = (props) => (
  <Playground {...props} />
);

export default App;