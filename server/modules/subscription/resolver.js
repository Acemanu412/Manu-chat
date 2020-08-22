const subscribers = require('../../config/subscribers');
const messages = require('../../config/messages');

const onMessageUpdate = (f) => subscribers.push(f)

module.exports = {
    Subscription: {
        messages: {
            subscribe: (parent, args, { pubSub }) => {
                const channel = Math.random().toString(36).slice(2, 15);
                const publish = () => pubSub.publish(channel, { messages });

                onMessageUpdate(publish);
                setTimeout(publish, 0);
                return pubSub.asyncIterator(channel);
            }
        }
    }
}