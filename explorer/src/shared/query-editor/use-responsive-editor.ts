import { useIsMobile } from "@shared/theme";
import { useEffect } from "react";

/**
 * A hacky way to mimic responsiveness in query editor
 */
export const useResponsiveEditor = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const editorEl = document.getElementsByClassName("graphiql-wrapper")[0]
      .children[0].children[0].children[1] as HTMLElement;
    const runQueryEl = editorEl.children[1].children[1] as HTMLElement;
    const optionsPanelEl = editorEl.children[0].children[1]
      .children[0] as HTMLElement;

    if (isMobile) {
      editorEl.style.flexDirection = "column";
      runQueryEl.style.top = "-51px";
      runQueryEl.style.left = "-20px";
      optionsPanelEl.style.paddingLeft = "80px";
    } else {
      editorEl.style.flexDirection = "row";
      runQueryEl.style.top = "15px";
      runQueryEl.style.left = "-62px";
      optionsPanelEl.style.paddingLeft = "21px";
    }
  }, [isMobile]);
};
