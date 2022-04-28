import React from "react";
import "./App.scss";
import { Provider, useSelector } from "react-redux";
import { pipe, tap } from "ramda";
import {
  Playground,
  store,
  getQuery,
  getResponses,
} from "graphql-playground-react";
import { PlaygroundWrapperProps } from "graphql-playground-react/lib/components/PlaygroundWrapper";
import { DeepPartial } from "@shared/types";
import { RequestDataModal, VNButton } from "@shared/components";
import {
  getQueriedServices,
  editorPrettierSettings,
} from "@shared/query-editor";

const baseUrl = process.env.REACT_APP_API_URL;
const endpoint = `${baseUrl}/api/gateway`;

const App = () => {
  useQueriedServices();

  return (
    <div className="flex flex-col items-stretch mx-4 h-full">
      <div className="flex width-full align-center justify-between text-slate-800 h-16">
        <div>
          <img className="max-h-full" alt="Vana Logo" src="logo.png"></img>
        </div>
        <RequestDataModal>
          {({ openModal }) => (
            <VNButton onClick={pipe(getQuery, tap(console.log), openModal)}>
              Request Production Data
            </VNButton>
          )}
        </RequestDataModal>
      </div>

      <Provider store={store as any}>
        <GQLEditor
          endpoint={endpoint}
          codeTheme={{}}
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

export const useQueriedServices = () => {
  const [services, setServices] = React.useState<string[]>([]);
  const query = useSelector(getQuery);
  const schema = useSelector(getResponses);
  console.log({ query, split: query.split("\n") });

  React.useEffect(() => {
    const extractedServices = getQueriedServices(query);
    if (extractedServices) {
      setServices(extractedServices);
    }
  }, [query]);

  console.log({ services, schema });
};
