const messages = require('../../config/messages');

module.exports = {
    Mutation: {
        postMessage: (parent, {user, content}) => {
            const id = messages.length;
            messages.push({
                id,
                user,
                content
            });
            return id;
        }
    }
}