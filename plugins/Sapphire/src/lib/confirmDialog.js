import { showConfirmationModal } from "@cumcord/ui/modals";

export default function confirmDialog(buttonText, title, description, cancelText = undefined, confirmButtonColor = undefined) {
    let buttonType;
    
    switch(confirmButtonColor) {
        case "Brand":
            buttonType = "neutral";
        break;
        case "Green":
            buttonType = "confirm";
        break;
        case "Red":
            buttonType = "danger";
        break;
        default:
            buttonType = "neutral";
        break;
    }

    return showConfirmationModal({
        header: title,
        content: description,
        confirmText: buttonText,
        cancelText: cancelText,
        type: buttonType,
    })
}