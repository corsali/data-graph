import { CircularProgress, Box, Dialog } from "@mui/material";
import { PropsWithModalOpener, useModal } from "@shared/utils";
import React from "react";
import { pipe } from "ramda";
import { useSelector } from "react-redux";
import { getQuery } from "graphql-playground-react";

export type RequestDataModalProps = PropsWithModalOpener<{}>;

export const RequestDataModal: React.FC<RequestDataModalProps> = ({
  children: Children,
}) => {
  const query = useSelector(getQuery);
  const [formUrl, setFormUrl] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const { isModalOpen, closeModal, openModal } = useModal();

  const handleOpen = () => pipe(prepFullFormUrl, setFormUrl, openModal)(query);

  return (
    <>
      <Children openModal={handleOpen} />
      <Dialog onClose={closeModal} open={isModalOpen}>
        {isModalOpen && formUrl && (
          <iframe
            title="request-data-form"
            src={formUrl}
            width="600"
            height="6200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            onLoad={() => setIsLoading(false)}
          />
        )}
        {isLoading && (
          <Box
            position="absolute"
            top={0}
            left={0}
            bottom={0}
            right={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        )}
      </Dialog>
    </>
  );
};

const baseFormUrl = process.env.REACT_APP_FORM_URL;
const queryFieldId = process.env.REACT_APP_FORM_QUERY_FIELD_ID;
const prepFullFormUrl = (query: string) =>
  `${baseFormUrl}?embedded=true&usp=pp_url&entry.${queryFieldId}=${encodeURIComponent(
    query
  ).replaceAll("%20", "+")}`;
