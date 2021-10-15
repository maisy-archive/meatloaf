import { findByProps, findByDisplayName } from "@cumcord/modules/webpack";

const ModalComponents = findByProps('ModalCloseButton');
const Header = findByDisplayName('Header');
const Flex = findByDisplayName('Flex');
const NitroLogo = findByDisplayName('UserSettingsPremiumSubscriptionsIcon');
// const NitroStacked = findByDisplayName('NitroStackedIcon');

const { openModal } = findByProps("openModal");
import ModalContent from "./ModalContent";

export const openDiscoinModal = openModal((e) => {
    return (
      <ModalComponents.ModalRoot
        transitionState={e.transitionState}
        size="large"
      >
        <ModalComponents.ModalHeader separator={false}>
          <Flex.Child basis="auto" grow={1} shrink={1} wrap={false}>
            <Header tag="h2" size={Header.Sizes.SIZE_20}>
              <NitroLogo/> Discoins - imagine a currency
            </Header>
          </Flex.Child>
          <Flex.Child basis="auto" grow={0} shrink={1} wrap={false}>
            <ModalComponents.ModalCloseButton onClick={e.onClose} />
          </Flex.Child>
        </ModalComponents.ModalHeader>
        <ModalComponents.ModalContent>
          <ModalContent/>
        </ModalComponents.ModalContent>
      </ModalComponents.ModalRoot>
    );
});