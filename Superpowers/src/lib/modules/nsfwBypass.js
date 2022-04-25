import { getCurrentUser } from "../../WPMODULES";

const nsfwBypass = (enabled) => getCurrentUser().nsfwAllowed = !!enabled;

export default nsfwBypass;
