import registerSettings from "./patches/registerSettings";
import styles from "./styles.scss";

export default () => {
    const patches = [
        styles(),
        registerSettings(),
    ];

    return {
        onUnload() {
            _.forEachRight(patches, (p) => p());
        }
    };
};
