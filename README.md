# Discord RSS Bot Template
This is a simple discord bot template for receiving updates from an RSS feed. It takes information from a single RSS feed and posts updates in a specific channel. To run the bot create a file named `information.json` with the following information:
```
{
    "botid": "<Discord Client Secret>",
    "channel": "<Discord Channel ID>",
    "color": "<Hex Color Value>(This is optional)",
    "url": "<RSS Feed URL>"
}
```
Once this information has been added run `npm i` to install the required pages then run `node index` while in the folder to start the bot.  

If the feed you are calling has strict call limits, you may want to adjust the number on line 40 in `index.js`. This value is the number of seconds between calls times 1000, by default this is 3 seconds.
