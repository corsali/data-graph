import { Box, Dialog, Typography } from "@mui/material";
import { PropsWithModalOpener, useModal } from "@shared/utils";
import React from "react";
import { Categories, Service } from "@shared/categories";
import { usePendingCategories } from "./use-pending-categories";

export type PendingCategoriesModalProps = PropsWithModalOpener<
  {},
  { categoriesAmount: number }
>;

export const PendingCategoriesModal: React.FC<PendingCategoriesModalProps> = ({
  children: Children,
}) => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const { categories, categoriesAmount } = usePendingCategories();

  return (
    <>
      <Children openModal={openModal} categoriesAmount={categoriesAmount} />
      <Dialog onClose={closeModal} open={isModalOpen}>
        {isModalOpen && (
          <PendingCategoriesModalContent categories={categories} />
        )}
      </Dialog>
    </>
  );
};
export type PendingCategoriesModalContentProps = {
  categories: Categories;
};

export const PendingCategoriesModalContent: React.FC<PendingCategoriesModalContentProps> = ({
  categories,
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        variant="h4"
        component={Box}
        p={6}
        pb={2}
        borderBottom="1px solid"
      >
        More data categories coming
      </Typography>
      <Box p={6} pt={2}>
        {Object.entries(categories).map(([service, cats]) => {
          return (
            <Box py={2} key={service}>
              <Typography
                textTransform="capitalize"
                variant="h5"
                component="h5"
                color="primary.dark"
              >
                {service}
              </Typography>
              <Box
                display="grid"
                mt={2}
                rowGap={0.5}
                columnGap={4}
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              >
                {cats.map((cat) => (
                  <Box display="flex" key={cat} gap={3}>
                    <Typography
                      textTransform="capitalize"
                      color={cat ? "grey.400" : "secondary.light"}
                      variant="body2"
                    >
                      {cat ? "•" : "✔"}
                    </Typography>
                    <Typography textTransform="capitalize" variant="body2">
                      {cat}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
