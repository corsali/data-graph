import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { pipe } from "ramda";
import { Playground, store } from "graphql-playground-react";
import { PlaygroundWrapperProps } from "graphql-playground-react/lib/components/PlaygroundWrapper";
import { VNButton, DeepPartial } from "./shared";
import { RequestDataModal } from "@shared/components/RequestDataModal";

const baseUrl = process.env.REACT_APP_API_URL;
const endpoint = `${baseUrl}/api/gateway`;

const App = () => {
  return (
    <div className="flex flex-col items-stretch mx-4 h-full">
      <div className="flex width-full align-center justify-between text-slate-800 h-16">
        <div>
          <img className="max-h-full" alt="Vana Logo" src="logo.png"></img>
        </div>
        <RequestDataModal>
          {({ openModal }) => (
            <VNButton onClick={pipe(getQuery, openModal)}>
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

const getQuery = () =>
  // ugly, but Playground doesn't provide any sensible way of getting this data
  [...document.getElementsByClassName("CodeMirror-code")[0].children]
    .map((c, i) => (c.textContent || "").replace(i + 1 + "", ""))
    .join("\n");
