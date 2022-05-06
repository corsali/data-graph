import { useIsMobile } from "@shared/theme";
import { useEffect } from "react";

/**
 * A hacky way to mimic responsiveness in query editor and hide some unnecessary stuff
 */
export const useResponsiveEditor = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const editorEl = getEditorEl();
    const headerEl = document.getElementsByClassName("graphiql-wrapper")?.[0]
      .children[0].children[0].children[0];
    // remove "Copy curl" button
    headerEl.children[3].remove();
    // remove bottom panel of result
    editorEl.children[1].children[4].remove();
  }, []);

  useEffect(() => {
    const wrapperEl = document.getElementsByClassName(
      "playground"
    )?.[0] as HTMLElement;
    const tabsEl = wrapperEl.children[0] as HTMLElement;
    const settingsEl = wrapperEl.children[2] as HTMLElement;
    const editorEl = getEditorEl();
    const codeInputEl = editorEl.children[0] as HTMLElement;
    const runQueryEl = editorEl.children[1].children[1] as HTMLElement;
    const resizeEl = editorEl.children[1].children[0] as HTMLElement;
    const optionsPanelEl = editorEl.children[0].children[1]
      .children[0] as HTMLElement;

    if (isMobile) {
      codeInputEl.style.flex = "4";
      editorEl.style.flexDirection = "column";
      runQueryEl.style.top = "-51px";
      runQueryEl.style.left = "-20px";
      optionsPanelEl.style.paddingLeft = "80px";
      resizeEl.style.display = "none";
      tabsEl.style.display = "none";
      settingsEl.style.display = "none";
    } else {
      codeInputEl.style.flex = "1";
      editorEl.style.flexDirection = "row";
      runQueryEl.style.top = "15px";
      runQueryEl.style.left = "-62px";
      optionsPanelEl.style.paddingLeft = "21px";
      resizeEl.style.display = "initial";
      tabsEl.style.display = "initial";
      settingsEl.style.display = "initial";
    }
  }, [isMobile]);
};

const getEditorEl = () =>
  document.getElementsByClassName("graphiql-wrapper")?.[0].children[0]
    .children[0].children[1] as HTMLElement;
