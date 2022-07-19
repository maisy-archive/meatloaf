import { createBotMessage, getChannelId, receiveMessage } from "../WPMODULES";

export default function internalMessage(content, author = "Sapphire") {
    const message = createBotMessage(getChannelId(), "");

    typeof content === "string" ? message.content = content : message.embeds.push(content);

    message.state === "SENT";
    message.author.id = "1"
    message.author.bot = true;
    message.author.discriminator = "6969"; // Set the discriminator to 6969 because I am hilarious
    message.author.avatar = "clyde"
    message.author.username = author;

    receiveMessage(getChannelId(), message);
}