import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { Playground, store } from "graphql-playground-react";
import { PlaygroundWrapperProps } from "graphql-playground-react/lib/components/PlaygroundWrapper";
import { VNButton, DeepPartial } from "./shared";

const baseUrl = process.env.REACT_APP_API_URL;
const endpoint = `${baseUrl}/api/gateway`;

const formUrl = process.env.REACT_APP_FORM_URL;
const App = () => {
  const [formsUrl, setFormsUrl] = React.useState("");
  const onCopy = () => {
    // ugly, but Playground doesn't provide any sensible way of getting this data
    const query = [
      ...document.getElementsByClassName("CodeMirror-code")[0].children,
    ]
      .map((c, i) => (c.textContent || "").replace(i + 1 + "", ""))
      .join("\n");

    // TODO: use modal
    setFormsUrl(
      `${formUrl}&entry.214069913=${encodeURIComponent(query).replaceAll(
        "%20",
        "+"
      )}`
    );
    console.log(formsUrl);
  };

  return (
    <div className="flex flex-col items-stretch mx-4 h-full">
      <div className="flex width-full align-center justify-between text-slate-800 h-16">
        <div>
          <img className="max-h-full" src="logo.png"></img>
        </div>
        <VNButton onClick={onCopy}>Request Production Data</VNButton>
      </div>
      {formsUrl && (
        <iframe
          src={formsUrl}
          width="640"
          height="382"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      )}
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
