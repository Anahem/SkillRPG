module.exports = (Discord, client) => {
    console.log('Ready to adventure');

    client.user.setPresence({
        status: 'ONLINE',
        activity: {
            name: 'God Mode',
            type: 'PLAYING',
            url: 'https://discord.com'
        }
    });
}