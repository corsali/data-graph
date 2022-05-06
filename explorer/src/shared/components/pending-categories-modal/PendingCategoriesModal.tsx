import { Box, Dialog, Typography } from "@mui/material";
import { useIsMobile } from "@shared/theme";
import { PropsWithModalOpener, useModal } from "@shared/utils";
import React from "react";
import {
  ServiceAvailability,
  usePendingCategories,
} from "./use-pending-categories";

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
  categories: ServiceAvailability;
};

export const PendingCategoriesModalContent: React.FC<PendingCategoriesModalContentProps> = ({
  categories,
}) => {
  const isMobile = useIsMobile();

  return (
    <Box display="flex" flexDirection="column">
      <Typography
        variant="h4"
        component={Box}
        p={6}
        pb={2}
        borderBottom="1px solid"
      >
        Available Data Categories
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
                columnGap={4}
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              >
                {Object.entries(cats).map(([cat, isAvailable]) => (
                  <Box display="flex" key={cat} gap={3}>
                    <Typography
                      textTransform="capitalize"
                      color={isAvailable ? "secondary.light" : "grey.300"}
                      variant={isMobile ? "caption" : "body2"}
                      component={Box}
                    >
                      <Typography
                        component={Box}
                        fontSize={16}
                        width={12}
                        textAlign="center"
                      >
                        {isAvailable ? "✔" : "•"}
                      </Typography>
                    </Typography>
                    <Typography
                      textTransform="capitalize"
                      component={Box}
                      overflow="hidden"
                      textOverflow="ellipsis"
                      variant={isMobile ? "caption" : "body2"}
                    >
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
